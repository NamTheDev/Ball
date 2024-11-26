import { AutocompleteInteraction, ChatInputCommandInteraction, Client, Colors } from "discord.js";
import { client, commandCollection } from "..";

async function handleChatInputCommand(interaction: ChatInputCommandInteraction, client: Client) {
    await interaction.deferReply({ ephemeral: true });

    const command = commandCollection.get(interaction.commandName);
    if (command) try {
        await command.execute(interaction, client);
    } catch (error) {
        await interaction.followUp({
            embeds: [
                {
                    color: Colors.Red,
                    description: `\`\`\`${error}\`\`\``
                }
            ]
        })
    }
}

async function handleAutocomplete(interaction: AutocompleteInteraction, client: Client) {
    const command = commandCollection.get(interaction.commandName);
    if (command)
        if (command.autocomplete) await command.autocomplete(interaction, client);
}

client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) await handleChatInputCommand(interaction, client);
    else if (interaction.isAutocomplete()) await handleAutocomplete(interaction, client)
});