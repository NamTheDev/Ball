export default {
    //Discord
    DISCORD_BOT_TOKEN: Bun.env.DISCORD_BOT_TOKEN,
    DISCORD_APPLICATION_ID: Bun.env.DISCORD_APPLICATION_ID,

    //Groq
    GROQ_API_KEY: Bun.env.GROQ_API_KEY,
    GROQ_MODEL: 'llama-3.2-90b-text-preview',
    OTHER_GROQ_MODELS: [
        "gemma2-9b-it",
        "gemma-7b-it",
        "llama3-grog-70b-8192-tool-use-preview",
        "llama3-groq-8b-8192-tool-use-preview",
        "llama-3.1-70b-versatile",
        "llama-3.1-8b-instant",
        "llama-3.2-1b-preview",
        "llama-3.2-3b-preview",
        "llama-3.2-11b-vision-preview",
        "llama-3.2-90b-vision-preview",
        "llama-guard-3-8b",
        "llama3-70b-8192",
        "llama3-8b-8192",
        "mixtral-8x7b-32768"
    ],

    //Note system
    MAX_NOTES: 5,

    //Errors
    ERRORS: {
        CONTENT_VIOLATION: {
            REASONS: [
                "content violation",
                "harmful",
                "disrespectful",
                "inhumane",
                "untolerated",
                "unallowed",
                "illegal",
                "abusive",
                "discriminative",
                "offensive",
                "toxic",
                "advertisement"
            ],
            ADDITIONAL_NOTE: "Advertisement in term of showing off their skills are allowed.",
            CODE: "ERROR_CONTENT_VIOLATION_(001)"
        }
    },

    //Help
    HELP_QUESTIONS: [
        // Command questions
        {
            QUESTION: "Command question - how do I use chat command?",
            REFERENCE: "COMMAND_CHAT"
        },
        {
            QUESTION: "Command question - how do I use note command?",
            REFERENCE: "COMMAND_NOTE"
        },
        {
            QUESTION: "Command question - how do I use ping command?",
            REFERENCE: "COMMAND_PING"
        },
        {
            QUESTION: "Command question - how do I use help command?",
            REFERENCE: "COMMAND_HELP"
        },
        {
            QUESTION: "Command question - how do I use rpg command?",
            REFERENCE: "COMMAND_RPG"
        },
        {
            QUESTION: "Command question - what are the available commands?",
            REFERENCE: "COMMAND_LIST"
        },
        // Bot info questions
        {
            QUESTION: "Bot info question - what is this bot about?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - what is the AI provider of this bot?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - is the bot open source and free to use?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - where is the source code of this bot?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - who is the creator of this bot?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - what is the version of this bot?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - what is the license of this bot?",
            REFERENCE: "FILE_README.md"
        },
        {
            QUESTION: "Bot info question - can I recieve the full information of this bot?",
            REFERENCE: "FILE_README.md"
        }
    ],

    // Default RPG settings schema
    DEFAULT_RPG_SETTINGS_SCHEMA: {
        type: 'object',
        properties: {
            character: { type: 'string' },
            class: { type: 'string' },
            appearance: { type: 'string' },
            backstory: { type: 'string' },
            stats: {
                type: 'object',
                properties: {
                    level: { type: 'integer' },
                    experience: { type: 'integer' },
                    health: { type: 'integer' },
                    mana: { type: 'integer' },
                    stamina: { type: 'integer' },
                    strength: { type: 'integer' },
                    magic: { type: 'integer' }
                },
                required: ['level', 'experience', 'health', 'mana', 'stamina', 'strength', 'magic']
            },
            inventory: {
                type: 'array',
                items: { type: 'string' }
            },
            skills: {
                type: 'array',
                items: { type: 'string' }
            },
            pets: {
                type: 'array',
                items: { type: 'string' }
            },
            unlocked_characters: {
                type: 'array',
                items: { type: 'string' }
            }
        },
        required: ['character', 'appearance', 'backstory', 'stats', 'inventory', 'skills', 'pets', 'unlocked_characters']
    }
}