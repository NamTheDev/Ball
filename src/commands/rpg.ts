import { ApplicationCommandOptionType } from "discord.js";
import type { ChatInputApplicationCommandStructure } from "../types";


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
                        name: 'guild',
                        description: 'see the guild office',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'apply',
                                description: 'apply a quest',
                                type: ApplicationCommandOptionType.String,
                                required: true,
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

    async autocomplete(interaction, client) {
        const focusedOption = interaction.options.getFocused(true);
        const subcommandGroup = interaction.options.getSubcommandGroup(false);
        const subcommand = interaction.options.getSubcommand(false);

        if (subcommandGroup === 'modify') {
            if (subcommand === 'equip') {
                if (focusedOption.name === 'item') {
                    const items = await getItemNames();
                    const filteredItems = items.filter(item => item.startsWith(focusedOption.value));
                    await interaction.respond(
                        filteredItems.map(item => ({ name: item, value: item }))
                    );
                }
            }
        }

        if (subcommandGroup === 'setup') {
            if (focusedOption.name === 'character') {
                const characters = await getCharacterNames();
                const filteredCharacters = characters.filter(character => character.startsWith(focusedOption.value));
                await interaction.respond(
                    filteredCharacters.map(character => ({ name: character, value: character }))
                );
            }
        }

        if (subcommandGroup === 'shop') {
            if (subcommand === 'buy') {
                if (focusedOption.name === 'item') {
                    const items = await getItemNames();
                    const filteredItems = items.filter(item => item.startsWith(focusedOption.value));
                    await interaction.respond(
                        filteredItems.map(item => ({ name: item, value: item }))
                    );
                }
            }
            if (subcommand === 'sell') {
                if (focusedOption.name === 'item') {
                    const items = await getItemNames();
                    const filteredItems = items.filter(item => item.startsWith(focusedOption.value));
                    await interaction.respond(
                        filteredItems.map(item => ({ name: item, value: item }))
                    );
                }
            }
        }

        if (subcommand === 'adventure') {
            if (focusedOption.name === 'character') {
                const characters = await getCharacterNames();
                const filteredCharacters = characters.filter(character => character.startsWith(focusedOption.value));
                await interaction.respond(
                    filteredCharacters.map(character => ({ name: character, value: character }))
                );
            }
            if (focusedOption.name === 'pet') {
                const pets = await getPetNames();
                const filteredPets = pets.filter(pet => pet.startsWith(focusedOption.value));
                await interaction.respond(
                    filteredPets.map(pet => ({ name: pet, value: pet }))
                );
            }
        }

        if (subcommandGroup === 'capital') {
            if (subcommand === 'work') {
                if (focusedOption.name === 'character') {
                    const characters = await getCharacterNames();
                    const filteredCharacters = characters.filter(character => character.startsWith(focusedOption.value));
                    await interaction.respond(
                        filteredCharacters.map(character => ({ name: character, value: character }))
                    );
                }
            }
            if (subcommand === 'guild') {
                if (focusedOption.name === 'apply') {
                    const quests = await getQuestNames();
                    const filteredQuests = quests.filter(quest => quest.startsWith(focusedOption.value));
                    await interaction.respond(
                        filteredQuests.map(quest => ({ name: quest, value: quest }))
                    );
                }
            }
            if (subcommand === 'blacksmith') {
                if (focusedOption.name === 'weapon') {
                    const weapons = await getWeaponNames();
                    const filteredWeapons = weapons.filter(weapon => weapon.startsWith(focusedOption.value));
                    await interaction.respond(
                        filteredWeapons.map(weapon => ({ name: weapon, value: weapon }))
                    );
                }
            }
        }
    },
    async execute(interaction) {

    }
};

export default command;