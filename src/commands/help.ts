import { readFileSync } from "fs";
import config from "../../config";
import type { ApplicationCommandStructure } from "../types";
import GroqClient from "../utils/GroqClient";

const command: ApplicationCommandStructure = {
    data: {
        name: 'help',
        description: 'understand how to use the bot',
        options: [
            {
                name: 'question',
                description: 'your question to the bot',
                type: 3,
                required: true,
                autocomplete: true
            }
        ]
    },

    async autocomplete(interaction) {
        const models = config.HELP.QUESTIONS.map(question => ({
            name: question.QUESTION, value: `${question.QUESTION}_${question.REFERENCE}`
        }));
        interaction.respond(models);
    },

    async execute(interaction) {
        const { commandCollection } = await import("..");
        const [question, type, reference] = interaction.options.getString('question', true).split('_');
        const commands = [...commandCollection];

        let response = '';

        const defaultSystemMessage = 'You are a question and answer chatbot.\nReference:';

        switch (type) {
            case "COMMAND":
                if (reference === "LIST")
                    response = await GroqClient.chat(
                        question,
                        `${defaultSystemMessage} ${commands.map(command =>
                            JSON.stringify(command[1].data, null, 2)
                        ).join('\n')}`
                    ).then(res => res[0].message.content) || '';
                else
                    response = await GroqClient.chat(
                        question,
                        `${defaultSystemMessage} ${JSON.stringify(
                            commandCollection.get(reference.toLowerCase()), null, 2)}`
                    ).then(res => res[0].message.content) || '';
                break;
            case "FILE":
                const file = readFileSync(reference, 'utf-8');
                response = await GroqClient.chat(
                    question, `${defaultSystemMessage} ${file}`
                ).then(res => res[0].message.content) || '';
                break;
        }

        await interaction.followUp({ content: response });
    }
}

export default command;