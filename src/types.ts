import type {  AutocompleteInteraction, ChatInputApplicationCommandData, ChatInputCommandInteraction, Client, Interaction } from "discord.js";

export interface ChatInputApplicationCommandStructure {
    data: ChatInputApplicationCommandData,
    autocomplete?: (interaction: AutocompleteInteraction, client: Client) => Promise<void>,
    execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<void>
}