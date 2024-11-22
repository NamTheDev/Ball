import { ApplicationCommandOptionType } from "discord.js";
import type { ApplicationCommandStructure } from "../types";
import config from "../../config";
import { chat } from "../utils/GroqClient";

const command: ApplicationCommandStructure = {
    data: {
        name: 'chat',
        description: 'chat with the bot',
        options: [
            {
                name: 'message',
                description: 'your message to the bot',
                type: ApplicationCommandOptionType.String,
                required: true
            },
            {
                name: 'model',
                description: 'model to use',
                type: ApplicationCommandOptionType.String,
                autocomplete: true
            }
        ]
    },
    execute: async (interaction, client) => {
        const message = interaction.options.getString('message', true);
        const model = interaction.options.getString('model');
        const [{ message: { content } }] = await chat(message, model || config.GROQ_MODEL);


        if(!content) throw Error("No response from the bot.");
        await interaction.reply(content);
    }
}

export default command;