import type { AutocompleteInteraction, ChatInputApplicationCommandData, ChatInputCommandInteraction, Client, Interaction } from "discord.js";

// Command system types
export interface ChatInputApplicationCommandStructure {
    data: ChatInputApplicationCommandData,
    autocomplete?: (interaction: AutocompleteInteraction, client: Client) => Promise<void>,
    execute: (interaction: ChatInputCommandInteraction, client: Client) => Promise<void>
}

// Note system types
export interface Note {
    title: string;
    content: string;
}

export interface NoteData {
    [key: string]: Note;
}

// RPG system types
export interface RPGData {
    character: string;
    class: string;
    appearance: string;
    backstory: string;
    stats: {
        level: number,
        experience: number,
        health: number,
        mana: number,
        stamina: number,
        strength: number,
        magic: number
    };
    inventory: string[];
    skills: string[];
    pets: string[];
}
