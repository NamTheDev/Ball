import { existsSync, readFileSync, writeFileSync, unlinkSync } from "fs";
import type { APIEmbed, ChatInputCommandInteraction, CommandInteraction } from 'discord.js';
import characters from '../../json/RPG/characters.json';
import economy from '../../json/RPG/economy.json';
import wilderness from '../../json/RPG/wilderness.json';
import GroqClient from './GroqClient';
import config from '../../config';
import type { RPGData } from "../types";

export class RPGSystem {
    private userID: string = '';
    private databasePath: string = '';
    private filePath: string = '';

    // Setup
    constructor(userID?: string) {
        if (!userID) return;
        this.userID = userID;
        this.databasePath = `database/rpg/`;
        this.filePath = `${this.databasePath}${this.userID}.json`;
    }

    public async setup(interaction: ChatInputCommandInteraction) {
        const character = interaction.options.getString('character', true);
        const appearance = interaction.options.getString('appearance', true);
        const backstory = interaction.options.getString('backstory') || undefined;

        const response = await this.createUserData(character, appearance, backstory);

        await interaction.followUp(response);
    }

    // Data management
    private readData(): RPGData {
        const data = readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data);
    }

    private writeData(data: RPGData): void {
        writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    public async createUserData(character: string, appearance: string, backstory?: string) {
        if (this.checkDataExists()) throw Error("User data already exists.");
        const characterAndClass = character.split(' ');
        const characterName = characterAndClass[0];
        const className = characterAndClass[1].replace(/[()]/g, "");
        const stats = JSON.stringify(characters.find(({ name }) => name === characterName)?.stats, null, 2);

        const generatedData = await GroqClient.chat(
            `Character: ${characterName}.\n` +
            `Class: ${className}.\n` +
            `Appearance: ${appearance}.\n` +
            `Backstory: ${backstory || "<generate>"}.\n` +
            `Stats: ${stats}.\n` +
            'Unlocked characters: <Character itself>.',
            {
                systemMessage:
                    'Generate JSON object based on data.\n' +
                    'Keep level and experience value as 0.\n' +
                    'JSON Schema:' +
                    JSON.stringify(config.DEFAULT_RPG_SETTINGS_SCHEMA, null, 2),
                json_object: true
            }
        ).then(response => response[0].message.content || '');

        let parsedData: RPGData;
        try {
            parsedData = JSON.parse(generatedData);
        } catch (error) {
            throw new Error("LLM failed to generate data.");
        }
        const userData = parsedData;

        this.writeData(userData);
        return `Created RPG data for user "${this.userID}".`;
    }

    public async getUserData(): Promise<RPGData> {
        if (!this.checkDataExists()) throw Error("User data does not exist.");
        return this.readData();
    }

    public async updateUserData(updatedData: Partial<RPGData>) {
        if (!this.checkDataExists()) throw Error("User data does not exist.");
        const data = this.readData();
        const newData = { ...data, ...updatedData };
        this.writeData(newData);
        return `Updated RPG data for user "${this.userID}".`;
    }

    public async deleteUserData() {
        if (existsSync(this.filePath)) {
            unlinkSync(this.filePath);
            return `Deleted RPG data for user "${this.userID}".`;
        } else {
            throw Error("User data does not exist.");
        }
    }

    // Inventory management
    public async listInventory(): Promise<string[]> {
        const data = await this.getUserData();
        return data.inventory;
    }

    public async addItemToInventory(item: string) {
        const data = await this.getUserData();
        data.inventory.push(item);
        this.writeData(data);
        return `Added "${item}" to your inventory.`;
    }

    public async removeItemFromInventory(item: string) {
        const data = await this.getUserData();
        const index = data.inventory.indexOf(item);
        if (index > -1) {
            data.inventory.splice(index, 1);
            this.writeData(data);
            return `Removed "${item}" from your inventory.`;
        } else {
            throw Error(`Item "${item}" not found in inventory.`);
        }
    }

    private checkDataExists(): boolean {
        return existsSync(this.filePath);
    }

    // Name data retrieval
    public async getBiomeNames(): Promise<string[]> {
        return wilderness.map(({ name }) => name);
    }

    public async getItemNames(): Promise<string[]> {
        const shopItems = Object.values(economy.shop);
        const itemDescriptions: string[] = [];
        shopItems.forEach(category =>
            category.forEach(
                ({ name, price }) =>
                    itemDescriptions.push(`${name} (${price})`)
            )
        );
        return itemDescriptions;
    }

    public async getCharacterNames(): Promise<string[]> {
        return characters.map(
            ({ name, class: className }) => `${name} (${className})`
        );
    }

    public async getPetNames(): Promise<string[]> {
        return economy.shop.Pets.map(({ name, price }) => `${name} (${price})`);
    }

    public async getWeaponNames(): Promise<string[]> {
        return economy.shop.Weapons.map(({ name, price }) => `${name} (${price})`);
    }

    // Profile data retrieval
    public async profile(subcommand: string | null, interaction: CommandInteraction) {
        if (!subcommand) return;
        switch (subcommand) {
            case 'full':
                this.getFullProfile(interaction);
                break;
        }
    }
    public async getFullProfile(interaction: CommandInteraction) {
        const data = await this.getUserData();
        await interaction.followUp({
            embeds: [{
                title: `RPG Profile - ${this.userID}`,
                fields: [
                    { name: 'Character', value: data.character, inline: true },
                    { name: 'Class', value: data.class, inline: true },
                    { name: 'Appearance', value: data.appearance, inline: false },
                    { name: 'Backstory', value: data.backstory, inline: false },
                    { name: 'Level', value: `${data.stats.level}`, inline: true },
                    { name: 'Experience', value: `${data.stats.experience}`, inline: true },
                    { name: 'Health', value: `${data.stats.health}`, inline: true },
                    { name: 'Mana', value: `${data.stats.mana}`, inline: true },
                    { name: 'Stamina', value: `${data.stats.stamina}`, inline: true },
                    { name: 'Strength', value: `${data.stats.strength}`, inline: true },
                    { name: 'Magic', value: `${data.stats.magic}`, inline: true },
                    { name: 'Inventory', value: data.inventory.join('\n') || 'Empty', inline: true },
                    { name: 'Skills', value: data.skills.join('\n') || 'None', inline: true },
                    { name: 'Pets', value: data.pets.join('\n') || 'None', inline: true },
                    { name: 'Unlocked Characters', value: data.unlocked_characters.join('\n') || 'None', inline: false }
                ]
            }]
        });
    }
}

export default RPGSystem;
