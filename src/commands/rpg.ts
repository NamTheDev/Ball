import { ApplicationCommandOptionType } from "discord.js";
import type { ChatInputApplicationCommandStructure } from "../types";
import RPG from "../utils/RPG";


const command: ChatInputApplicationCommandStructure = {
    data: {
        name: 'rpg',
        description: 'rpg game but is AI-generated',
        options: [
            {
                name: 'modify',
                description: 'modify your profile',
                type: ApplicationCommandOptionType.SubcommandGroup,
                options: [
                    {
                        name: 'equip',
                        description: 'equip an item',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'item',
                                description: 'item to equip',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                autocomplete: true
                            }
                        ]
                    },
                    {
                        name: 'unequip',
                        description: 'unequip an item',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'item',
                                description: 'item to unequip',
                                type: ApplicationCommandOptionType.String,
                                required: true
                            }
                        ]
                    },
                    {
                        name: 'summon',
                        description: 'summon a pet',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'pet',
                                description: 'pet to summon',
                                type: ApplicationCommandOptionType.String,
                                required: true
                            }
                        ]
                    },
                    {
                        name: 'activate',
                        description: 'activate a skill',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'skill',
                                description: 'skill to activate',
                                type: ApplicationCommandOptionType.String,
                                required: true
                            }
                        ]
                    },
                    {
                        name: 'switch',
                        description: 'switch your character',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'character',
                                description: 'character to switch to',
                                type: ApplicationCommandOptionType.String,
                                required: true
                            }
                        ]
                    }
                ]
            },
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
                        name: 'skills',
                        description: 'see your acquired skills',
                        type: ApplicationCommandOptionType.Subcommand
                    },
                    {
                        name: 'characters',
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
                        name: 'character',
                        description: 'choose your RPG character',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        autocomplete: true
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
                        required: true,
                        autocomplete: true
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
            {
                name: 'capital',
                description: 'see your capital',
                type: ApplicationCommandOptionType.SubcommandGroup,
                options: [
                    {
                        name: 'work',
                        description: 'work at your capital',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'character',
                                description: 'work as a character',
                                type: ApplicationCommandOptionType.String,
                                autocomplete: true
                            }
                        ]
                    },
                    {
                        name: 'blacksmith',
                        description: 'see the blacksmith',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'weapon',
                                description: 'select the weapon to modify',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                autocomplete: true
                            },
                            {
                                name: 'action',
                                description: 'upgrade or sell the weapon (with higher price)',
                                type: ApplicationCommandOptionType.String,
                                choices: [
                                    { name: 'upgrade', value: 'upgrade' },
                                    { name: 'sell', value: 'sell' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
    },

    async autocomplete(interaction) {
        const focusedOption = interaction.options.getFocused(true);
        const subcommandGroup = interaction.options.getSubcommandGroup(false);
        const subcommand = interaction.options.getSubcommand(false);

        const handlers = [
            {
                subcommandGroup: 'modify',
                subcommand: 'equip',
                optionName: 'item',
                fetchFunction: RPG.getItemNames,
            },
            {
                subcommandGroup: 'setup',
                subcommand: null,
                optionName: 'character',
                fetchFunction: RPG.getCharacterNames,
            },
            {
                subcommandGroup: 'shop',
                subcommand: 'buy',
                optionName: 'item',
                fetchFunction: RPG.getItemNames,
            },
            {
                subcommandGroup: 'shop',
                subcommand: 'sell',
                optionName: 'item',
                fetchFunction: RPG.getItemNames,
            },
            {
                subcommandGroup: null,
                subcommand: 'adventure',
                optionName: 'biome',
                fetchFunction: RPG.getBiomeNames,
            },
            {
                subcommandGroup: null,
                subcommand: 'adventure',
                optionName: 'character',
                fetchFunction: RPG.getCharacterNames,
            },
            {
                subcommandGroup: null,
                subcommand: 'adventure',
                optionName: 'pet',
                fetchFunction: RPG.getPetNames,
            },
            {
                subcommandGroup: 'capital',
                subcommand: 'work',
                optionName: 'character',
                fetchFunction: RPG.getCharacterNames,
            },
            {
                subcommandGroup: 'capital',
                subcommand: 'blacksmith',
                optionName: 'weapon',
                fetchFunction: RPG.getWeaponNames,
            },
        ];

        const handler = handlers.find(
            (h) =>
                h.subcommandGroup === subcommandGroup &&
                h.subcommand === subcommand &&
                h.optionName === focusedOption.name
        );

        if (!handler) return;

        const names = await handler.fetchFunction();
        const focusedValue = focusedOption.value.toLowerCase();

        const filteredNames = names.filter((name) =>
            !focusedValue ? true : name.toLowerCase().startsWith(focusedValue) || name.toLowerCase().includes(focusedValue)
        );

        await interaction.respond(
            filteredNames.map((name) => ({ name, value: name }))
        );
    },

    async execute(interaction) {

    }
};

export default command;