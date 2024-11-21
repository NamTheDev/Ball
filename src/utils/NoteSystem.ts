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
        
        const urlRegex = /https?:\/\/[^\s]+/g;
        const urls = content.match(urlRegex);
        if(urls && urls.length > 0) throw Error("Links are not allowed in notes.");

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
        return `Edited note's title "${title}" to "${newTitle}".`;
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
            const reasons = config.ERRORS.CONTENT_VIOLATION.REASONS;
            const [{
                message: {
                    content: violation
                }
            }] = await chat(`title: ${title}\ncontent: ${content}`,
                `See if this content violate any of these reasons: ${reasons.join(', ')}` +
                'Must include reasons in the response.' +
                'Use only ABC characters and or comma and dot.' +
                'Response must be as short as possible (serve like an error message).' +
                'Additional note: ' + config.ERRORS.CONTENT_VIOLATION.ADDITIONAL_NOTE
            );
            for (const reason of reasons) {
                if (violation?.toLowerCase().includes(reason))
                    throw Error(violation + `\n\nCode: ${config.ERRORS.CONTENT_VIOLATION.CODE}`);
            }
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
        const notes = readdirSync(databasePath).map((title) => title.split('.txt')[0]);
        return notes;
    }

    private checkLimits() {
        if (!existsSync(this.databasePath)) return;
        const currentNoteCount = readdirSync(this.databasePath).length;
        if (currentNoteCount >= this.maxNotes) return true;
    }
}