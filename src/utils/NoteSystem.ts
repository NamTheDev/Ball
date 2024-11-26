import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import config from "../../config";
import Moderation from "./Moderation";
import type { NoteData } from "../types";

export class NoteSystem {
    private userID: string;
    public maxNotes: number = config.MAX_NOTES;
    private databasePath: string;
    private filePath: string;

    constructor(userID: string) {
        this.userID = userID;
        this.databasePath = `database/notes/`;
        this.filePath = `${this.databasePath}${this.userID}.json`;
    }

    private readNotes(): NoteData {
        const data = readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data)
    }

    private writeNotes(data: NoteData): void {
        writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }

    public async createNote(title: string, content: string) {
        const notes = this.readNotes();
        const limitReached = this.checkLimits();
        if (limitReached) throw Error("You have reached the maximum number of notes.");

        const urlsDetected = this.checkURLs(title, content);
        if (urlsDetected) throw Error("Links are not allowed in notes.");

        if (notes[title]) throw Error("Note already exists");
        notes[title] = { title, content };
        this.writeNotes(notes);

        return `Created note "${title}".`
    }

    public async editNoteTitle(title: string, newTitle: string) {
        const notes = this.readNotes();
        if (!notes[title]) throw Error("Note does not exist");

        if (notes[newTitle]) throw Error("A note with the new title already exists");

        notes[newTitle] = { ...notes[title], title: newTitle };
        delete notes[title];
        this.writeNotes(notes);
        return `Edited note's title "${title}" to "${newTitle}".`;
    }

    public async editNoteContent(title: string, content: string) {
        const notes = this.readNotes();
        if (!notes[title]) throw Error("Note does not exist");
        notes[title].content = content;
        this.writeNotes(notes);
        return `Edited note's content "${title}".`;
    }

    public async viewNote(title: string, showMode?: boolean): Promise<string> {
        const notes = this.readNotes()
        if (!notes[title]) throw Error("Note does not exist");
        const note = notes[title]
        const content = note.content;
        if (showMode) await Moderation.validateContent(`Title: "${title}" - content:\n"${content}"`);
        return content;
    }

    public async deleteNote(title: string) {
        const notes = this.readNotes();
        if (!notes[title]) throw Error("Note does not exist");
        delete notes[title];
        this.writeNotes(notes);
        return `Deleted note "${title}".`;
    }

    public async listNotes() {
        const notes = this.readNotes();
        return Object.keys(notes);
    }

    private checkLimits() {
        const notes = this.readNotes();
        const currentNoteCount = Object.keys(notes).length;
        if (currentNoteCount >= this.maxNotes) return true;
    }

    private checkURLs(title: string, content: string) {
        const urlRegex = /https?:\/\/[^\s]+/g;
        const titleUrls = title.match(urlRegex) || [];
        const contentUrls = content.match(urlRegex) || [];

        return !!(titleUrls?.length + contentUrls?.length);
    }
}