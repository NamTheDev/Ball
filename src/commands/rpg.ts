import { ApplicationCommandOptionType } from "discord.js";
import type { ChatInputApplicationCommandStructure } from "../types";


const command: ChatInputApplicationCommandStructure = {
    data: {
        name: 'rpg',
        description: 'rpg game but is AI-generated',
        options: [
            {
                name: 'profile',
                description: 'see your profile and status',
                type: ApplicationCommandOptionType.SubcommandGroup,
                options: [
                    {
                        name: 'balance',
                        description: 'see your wallet and bank balance',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'inventory',
                        description: 'see your inventory',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'stats',
                        description: 'see your level and experience',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'pets',
                        description: 'see your pets',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'skill-tree',
                        description: 'see your acquired skills',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'unlocked-characters',
                        description: 'see your unlocked characters',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'full',
                        description: 'see everything you have',
                        type: ApplicationCommandOptionType.Subcommand
                    }
                ]
            },
            {
                name: 'setup',
                description: 'get started with the game',
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: 'name',
                        description: 'set your RPG name',
                        type: ApplicationCommandOptionType.String,
                        required: true
                    },
                    {
                        name: 'age',
                        description: 'set your RPG age',
                        type: ApplicationCommandOptionType.Integer,
                        required: true
                    },
                    {
                        name: 'appearance',
                        description: 'describe your RPG appearance',
                        type: ApplicationCommandOptionType.String,
                        required: true
                    },
                    {
                        name: 'backstory',
                        description: 'tell a bit about your RPG backstory',
                        type: ApplicationCommandOptionType.String
                    },
                    {
                        name: 'character',
                        description: 'choose your RPG character',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        autocomplete: true
                    }
                ]
            },
            {
                name: 'shop',
                description: 'buy items from the shop',
                type: ApplicationCommandOptionType.SubcommandGroup,
                options: [
                    {
                        name: 'buy',
                        description: 'buy items from the shop',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'item',
                                description: 'item to buy',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                autocomplete: true
                            }
                        ]
                    },
                    {
                        name: 'sell',
                        description: 'sell items to the shop',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'item',
                                description: 'item to sell',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                autocomplete: true
                            }
                        ]
                    }
                ]
            },
            {
                name: 'adventure',
                description: 'go on an adventure',
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: 'biome',
                        description: 'choose your adventure biome',
                        type: ApplicationCommandOptionType.String,
                        required: true
                    },
                    {
                        name: 'character',
                        description: 'choose your adventure character',
                        type: ApplicationCommandOptionType.String,
                        autocomplete: true
                    },
                    {
                        name: 'pet',
                        description: 'bring a pet on your adventure',
                        type: ApplicationCommandOptionType.String,
                        autocomplete: true
                    }
                ]
            },
        ],
    },
    async execute(interaction) {

    }
};

export default command;