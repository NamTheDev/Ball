import { ApplicationCommandOptionType, Colors, MessagePayload, type InteractionReplyOptions } from "discord.js";
import type { ApplicationCommandStructure } from "../types";
import { NoteSystem } from "../utils/NoteSystem";

const command: ApplicationCommandStructure = {
    data: {
        name: 'note',
        description: 'manage your notes using our note system',
        options: [
            {
                name: 'create',
                description: 'create a new note',
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: 'title',
                        description: 'title of the note',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        max_length: 15,
                        min_length: 5
                    },
                    {
                        name: 'content',
                        description: 'content of the note',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        max_length: 2000
                    }
                ]
            },
            {
                name: 'edit',
                description: 'edit a note',
                type: ApplicationCommandOptionType.SubcommandGroup,
                options: [
                    {
                        name: 'title',
                        description: 'edit title of the note',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'title',
                                description: 'title of the note',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                autocomplete: true
                            },
                            {
                                name: 'new-title',
                                description: 'new title of the note',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                max_length: 15,
                                min_length: 5
                            }
                        ]
                    },
                    {
                        name: 'content',
                        description: 'edit content of the note',
                        type: ApplicationCommandOptionType.Subcommand,
                        options: [
                            {
                                name: 'title',
                                description: 'title of the note',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                autocomplete: true
                            },
                            {
                                name: 'content',
                                description: 'content of the note',
                                type: ApplicationCommandOptionType.String,
                                required: true,
                                max_length: 2000
                            }
                        ]
                    }
                ]
            },
            {
                name: 'view',
                description: 'view a note',
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: 'title',
                        description: 'title of the note',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        autocomplete: true
                    }
                ]
            },
            {
                name: 'show',
                description: 'show a note',
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: 'title',
                        description: 'title of the note',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        autocomplete: true
                    }
                ]
            },
            {
                name: 'delete',
                description: 'delete a note',
                type: ApplicationCommandOptionType.Subcommand,
                options: [
                    {
                        name: 'title',
                        description: 'title of the note',
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        autocomplete: true
                    }
                ]
            },
            {
                name: 'list',
                description: 'list all notes',
                type: ApplicationCommandOptionType.Subcommand
            }
        ]
    },

    async autocomplete(interaction) {
        const noteSystem = new NoteSystem(interaction.user.id);
        const notes = await noteSystem.listNotes();
        interaction.respond(notes.map(note => ({ name: note, value: note })));
    },

    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand(true);
        const title = interaction.options.getString('title');
        const newTitle = interaction.options.getString('new-title');
        const content = interaction.options.getString('content');
        const noteSystem = new NoteSystem(interaction.user.id);

        let response: string | MessagePayload | InteractionReplyOptions = '';
        switch (subcommand) {
            case 'create':
                if (title && content)
                    response = await noteSystem.createNote(title, content);
                break;
            case 'title':
                if (title && newTitle)
                    response = await noteSystem.editNoteTitle(title, newTitle);
                break;
            case 'content':
                if (title && content)
                    response = await noteSystem.editNoteContent(title, content);
                break;
            case 'show':
                if (title)
                    response = await noteSystem.viewNote(title, true);
                if (interaction.channel?.isSendable())
                    await interaction.channel.send({
                        embeds: [
                            {
                                author: {
                                    name: interaction.user.username,
                                    icon_url: interaction.user.displayAvatarURL()
                                },
                                title: `Note - "${title}"`,
                                color: Colors.White,
                                description: response
                            }
                        ]
                    })
                response = 'Note displayed publicly.';
                break;
            case 'view':
                if (title)
                    response = await noteSystem.viewNote(title);
                response = {
                    embeds: [
                        {
                            title: `Note - "${title}"`,
                            color: Colors.White,
                            description: response
                        }
                    ]
                }
                break;
            case 'delete':
                if (title)
                    response = await noteSystem.deleteNote(title);
                break;
            case 'list':
                response = (await noteSystem.listNotes()).map((note, index) => `${index}. \`\`\`${note}\`\`\``).join('\n');
                break;

        }

        await interaction.followUp(response);
    }
}

export default command;