import { readFileSync } from "fs";
import config from "../../config";
import type { ChatInputApplicationCommandStructure } from "../types";
import GroqClient from "../utils/GroqClient";
import { ApplicationCommandOptionType } from "discord.js";
import NumberGen from "../utils/NumberGen";

const command: ChatInputApplicationCommandStructure = {
    data: {
        name: 'help',
        description: 'ask about the bot',
        options: [
            {
                name: 'question',
                description: 'your question to the bot',
                type: ApplicationCommandOptionType.String,
                required: true,
                autocomplete: true
            }
        ]
    },

    async autocomplete(interaction) {
        const maxAutocompleteChoices = 24;
        const focusedValue = interaction.options.getFocused();

        if (focusedValue) {
            const filteredQuestions = config.HELP.QUESTIONS
                .filter(({ QUESTION }) => QUESTION.toLowerCase().includes(focusedValue.toLowerCase()))
                .slice(0, maxAutocompleteChoices)
                .map(({ QUESTION, REFERENCE }) => ({ name: QUESTION, value: `${QUESTION}_${REFERENCE}` }));
            return interaction.respond(filteredQuestions);
        }

        const uniqueQuestions = new Set();
        const questions = [];

        while (questions.length < maxAutocompleteChoices) {
            const randomIndex = NumberGen.getRandomNumberInRange(0, config.HELP.QUESTIONS.length - 1);
            const { QUESTION, REFERENCE } = config.HELP.QUESTIONS[randomIndex];

            if (!uniqueQuestions.has(QUESTION)) {
                uniqueQuestions.add(QUESTION);
                questions.push({ name: QUESTION, value: `${QUESTION}_${REFERENCE}` });
            }
        }

        interaction.respond(questions);
    },

    async execute(interaction) {
        const { commandCollection } = await import("..");
        const [question, type, reference] = interaction.options.getString('question', true).split('_');
        const commands = [...commandCollection];

        let response = '';

        const defaultSystemMessage = 'You are a chatbot who will help user to know more about the bot. Your answer should be short.\nReference:';

        const references = {
            get file() {
                return readFileSync(reference || 'README.md', 'utf-8');
            },

            get commandList() {
                return commands.map(command => {
                    const { name, description } = command[1].data;
                    return JSON.stringify({
                        name,
                        description,
                        prefix: '/'
                    }, null, 2);
                })
            },

            get command() {
                return JSON.stringify(
                    commandCollection.get(reference.toLowerCase())?.data, null, 2
                )
            }
        }

        async function COMMAND() {
            if (reference === "LIST")
                response = await GroqClient.chat(
                    question,
                    { systemMessage: `${defaultSystemMessage} ${references.commandList}).join('\n')}` }
                ).then(res => res[0].message.content) || '';
            else
                response = await GroqClient.chat(
                    question,
                    {
                        systemMessage:
                            `${defaultSystemMessage} ${references.command}\n\n` +
                            'Common command usage:\n' +
                            '- HAS SUBCOMMAND - /command <subcommand> <option (could be none)>\n' +
                            '- HAS NO SUBCOMMAND - /command <option (could be none)>... (and more) \n' +
                            'Be specific in your response; give explainations and give examples.'
                    }
                ).then(res => res[0].message.content) || '';
        }

        async function FILE() {
            response = await GroqClient.chat(
                question, { systemMessage: `${defaultSystemMessage} ${references.file}` }
            ).then(res => res[0].message.content) || '';
        }

        switch (type) {
            case "COMMAND": await COMMAND(); break;
            case "FILE": await FILE(); break;
            default: throw Error("Invalid question.");
        }

        await interaction.followUp({ content: response });
    }
}

export default command;