export default {
    //Discord
    DISCORD_BOT_TOKEN: Bun.env.DISCORD_BOT_TOKEN,
    DISCORD_APPLICATION_ID: Bun.env.DISCORD_APPLICATION_ID,

    //Groq
    GROQ_API_KEY: Bun.env.GROQ_API_KEY,
    GROQ_MODEL: 'llama-3.2-90b-text-preview',

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
    }
}