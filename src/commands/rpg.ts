import type { ChatInputApplicationCommandStructure } from "../types";


const command: ChatInputApplicationCommandStructure = {
    data: {
        name: 'rpg',
        description: 'rpg game but is AI-generated',
        options: [
            {
                name: 'message',
                description: 'your message to the bot',
                type: ApplicationCommandOptionType.String,
                required: true
            }
        ]
    }
};
}