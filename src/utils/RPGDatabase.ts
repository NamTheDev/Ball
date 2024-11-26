import { existsSync, mkdirSync, readFileSync, writeFileSync, unlinkSync } from "fs";
import config from "../../config";
import type { RPGData } from "../types";

export class RPGSystem {
    private userID: string;
    private databasePath: string;
    private filePath: string;

    constructor(userID: string) {
        this.userID = userID;
        this.databasePath = `database/rpg/`;
        this.filePath = `${this.databasePath}${this.userID}.json`;
        if (!existsSync(this.databasePath)) mkdirSync(this.databasePath, { recursive: true });
        if (!existsSync(this.filePath)) writeFileSync(this.filePath, '{}');
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

        const defaultData = { ...config.DEFAULT_RPG_SETTINGS };
        const userData: RPGData = {
            ...defaultData,
            character,
            appearance,
            backstory: backstory || "A mysterious past.",
            stats: {
                level: 1,
                experience: 0,
                health: 100,
                mana: 50,
                stamina: 100,
                strength: 10,
                magic: 20
            },
            inventory: [],
            skills: [],
            pets: []
        };

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
}
