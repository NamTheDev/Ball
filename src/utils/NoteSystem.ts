import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";
import config from "../../config";
import { chat } from "./GroqClient";

export class NoteSystem {
    private userID: string;
    public maxNotes: number = config.MAX_NOTES;
    private get databasePath(): string {
        return `database/notes/${this.userID}/`
    };
    private filePath(title: string): string {
        return `${this.databasePath}${title}.txt`;

    }

    constructor(userID: string) {
        this.userID = userID;
        if (!existsSync(this.databasePath)) mkdirSync(this.databasePath);
    }

    public async createNote(title: string, content: string) {
        const limitReached = this.checkLimits();
        if (limitReached) throw Error("You have reached the maximum number of notes.");
        const filePath = this.filePath(title);
        if (existsSync(filePath)) throw Error("Note already exists");
        writeFileSync(filePath, content);
        return `Created note "${title}".`
    }

    public async editNoteTitle(title: string, newTitle: string) {
        const filePath = this.filePath(title);
        const newFilePath = this.filePath(newTitle);
        if (!existsSync(filePath)) throw Error("Note does not exist");
        renameSync(filePath, newFilePath);
        return `Edited note's title "${title}".`;
    }

    public async editNoteContent(title: string, content: string) {
        const filePath = this.filePath(title);
        if (!existsSync(filePath)) throw Error("Note does not exist");
        writeFileSync(filePath, content);
        return `Edited note's content "${title}".`;
    }

    public async viewNote(title: string, showMode?: boolean): Promise<string> {
        const filePath = this.filePath(title);
        if (!existsSync(filePath)) throw Error("Note does not exist");
        const content = readFileSync(filePath, 'utf-8');
        if (showMode) {
            const [{
                message: {
                    content: violation
                }
            }] = await chat(content, 'Is this content inhumane? Must include word true into response. This reply is toward user.');
            if (
                violation?.toLowerCase().includes('true')
            ) throw Error(violation);
        }
        return content;
    }

    public async deleteNote(title: string) {
        const filePath = this.filePath(title);
        if (!existsSync(filePath)) throw Error("Note does not exist");
        unlinkSync(filePath);
        return `Deleted note "${title}".`;
    }

    public async listNotes() {
        const { databasePath } = this
        if (!existsSync(databasePath)) mkdirSync(databasePath);
        const notes = readdirSync(databasePath).map((title) => title.split('.')[0]);
        return notes;
    }

    private checkLimits() {
        if (!existsSync(this.databasePath)) return;
        const currentNoteCount = readdirSync(this.databasePath).length;
        if (currentNoteCount >= this.maxNotes) return true;
    }
}