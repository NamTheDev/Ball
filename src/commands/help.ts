import { readFileSync } from "fs";
import config from "../../config";
import type { ChatInputApplicationCommandStructure } from "../types";
import GroqClient from "../utils/GroqClient";
import { ApplicationCommandOptionType } from "discord.js";

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
        const focusedValue = interaction.options.getFocused();
        const maxAutocompleteChoices = 24;

        const questions = config.HELP_QUESTIONS
            .map(({ QUESTION, REFERENCE }) => ({ name: QUESTION, value: `${QUESTION}_${REFERENCE}` }))
            .slice(0, maxAutocompleteChoices)

        if (focusedValue) {
            const filteredQuestions = questions
                .filter(
                    ({ name }) =>
                        name.toLowerCase()
                            .startsWith(
                                focusedValue.toLowerCase()
                            )
                );
            return interaction.respond(filteredQuestions);
        }

        interaction.respond(questions);
    },

    async execute(interaction) {
        const { commandCollection } = await import("..");
        const [question, type, reference] = interaction.options.getString('question', true).split('_');
        const commands = [...commandCollection];
        const defaultSystemMessage = 'You are a chatbot who will help user to know more about the bot. Your answer should be short.\nReference:';

        let referenceData;

        switch (type) {
            case "COMMAND":
                referenceData = reference === "LIST"
                    ?
                    `${commands.map(([_, cmd]) => JSON.stringify({
                        name: cmd.data.name,
                        description: cmd.data.description,
                        prefix: '/'
                    }, null, 2)).join('\n')}\n` +
                    'Example command list:\n' +
                    '1. /command1' +
                    '2. /command2' +
                    '3. /command3' +
                    '... (and more)'
                    : 
                    `${JSON.stringify(commandCollection.get(reference.toLowerCase())?.data, null, 2)}\n` +
                    'Common command usage:\n' +
                    '- HAS SUBCOMMAND - /command <subcommand> <option (could be none)>\n' +
                    '- HAS NO SUBCOMMAND - /command <option (could be none)>... (and more) \n' +
                    'Be specific in your response; give explainations and give examples.'
                break;
            case "FILE":
                referenceData = readFileSync(reference || 'README.md', 'utf-8');
                break;
            default:
                throw new Error("Invalid question.");
        }

        const systemMessage = `${defaultSystemMessage} ${referenceData}`;
        const response = (await GroqClient.chat(question, { systemMessage }))[0]?.message.content || '';
        await interaction.followUp({ content: response });
    }
}

export default command;