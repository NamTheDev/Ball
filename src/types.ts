import type { ApplicationCommandData, AutocompleteInteraction, ChatInputCommandInteraction, Client, Interaction } from "discord.js";

export interface ApplicationCommandStructure {
    data: ApplicationCommandData,
    autocomplete?: (interaction: AutocompleteInteraction, client: Client) => Promise<void>,
    execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<void>
}