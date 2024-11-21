import { Colors } from "discord.js";
import { client, commandCollection } from "..";

client.on('interactionCreate', async (interaction) => {
    if (interaction.isChatInputCommand()) {
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
    } else if (interaction.isAutocomplete()) {
        const command = commandCollection.get(interaction.commandName);
        if (command)
            if (command.autocomplete) await command.autocomplete(interaction, client);
    }
});