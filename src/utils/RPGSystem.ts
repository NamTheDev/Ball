import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from "fs";
import type { ChatInputCommandInteraction } from 'discord.js';
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

    constructor(userID?: string) {
        if (!userID) return;
        this.userID = userID;
        this.databasePath = `database/rpg/`;
        this.filePath = `${this.databasePath}${this.userID}.json`;
    }


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
        const stats = characters.find(({ name }) => name === characterName)?.stats

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


    public async setup(interaction: ChatInputCommandInteraction) {
        const character = interaction.options.getString('character', true);
        const appearance = interaction.options.getString('appearance', true);
        const backstory = interaction.options.getString('backstory') || undefined;

        const response = await this.createUserData(character, appearance, backstory);

        await interaction.followUp(response);
    }
}

export default RPGSystem;
