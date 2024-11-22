export default {
    //Discord
    DISCORD_BOT_TOKEN: Bun.env.DISCORD_BOT_TOKEN,
    DISCORD_APPLICATION_ID: Bun.env.DISCORD_APPLICATION_ID,

    //Groq
    GROQ_API_KEY: Bun.env.GROQ_API_KEY,
    GROQ_MODEL: 'llama-3.2-90b-text-preview',
    OTHER_GROQ_MODELS: [
        "distil-whisper-large-v3-en",
        "gemma2-9b-it",
        "gemma-7b-it",
        "llama3-grog-70b-8192-tool-use-preview",
        "llama3-groq-8b-8192-tool-use-preview",
        "llama-3.1-70b-versatile",
        "llama-3.1-70b-specdec",
        "llama-3.1-8b-instant",
        "llama-3.2-1b-preview",
        "llama-3.2-3b-preview",
        "llama-3.2-11b-vision-preview",
        "llama-3.2-90b-vision-preview",
        "llama-guard-3-8b",
        "llama3-70b-8192",
        "llama3-8b-8192",
        "mixtral-8x7b-32768",
        "whisper-large-v3",
        "whisper-large-v3-turbo",
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
        },
        
    }
}