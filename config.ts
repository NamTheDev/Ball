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
    HELP: {
        QUESTIONS: [
            {
                QUESTION: "How do I use chat command?",
                REFERENCE: "COMMAND_CHAT"
            },
            {
                QUESTION: "How do I use note command?",
                REFERENCE: "COMMAND_NOTE"
            },
            {
                QUESTION: "How do I use ping command?",
                REFERENCE: "COMMAND_PING"
            },
            {
                QUESTION: "How do I use help command?",
                REFERENCE: "COMMAND_HELP"
            },
            {
                QUESTION: "Which AI provider is the bot using?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Where can I find the source code?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is this bot open source?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is this bot free to use?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What are the available commands?",
                REFERENCE: "COMMAND_LIST"
            },
            {
                QUESTION: "What is the bot's name?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Who developed the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Under what license is the bot distributed?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Where can I find the license information?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What functionalities does the bot offer?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I enhance my server experience using the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a GitHub repository for the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I contribute to the bot's development?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I modify the bot's source code?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What is the bot designed for?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot support managing notes?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How does the bot improve server experience?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is the bot designed for Discord?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I install the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I add the bot to my server?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there documentation available for the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What commands are available in the bot?",
                REFERENCE: "COMMAND_LIST"
            },
            {
                QUESTION: "Does the bot have a help command?",
                REFERENCE: "COMMAND_HELP"
            },
            {
                QUESTION: "How can I get help about the bot's commands?",
                REFERENCE: "COMMAND_HELP"
            },
            {
                QUESTION: "Does the bot support custom commands?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I clone the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What is the Apache License, Version 2.0?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What permissions are granted under the Apache License?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Are there any limitations under the License?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I use the bot for commercial purposes?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there any warranty provided with the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Who is Nam?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I contact the developer?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have a website?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have any credit or attribution requirements?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is the bot built using any AI technology?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot use any specific programming language?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What are the system requirements for the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there any support available for the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I report issues or bugs?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I request new features?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot collect any user data?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is the bot secure?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Has the bot been updated recently?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What is the latest version of the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a changelog available?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot support multiple languages?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a roadmap for future developments?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I get involved in the community?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Are there any known issues with the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have integration with other services?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a command to get the bot's info?",
                REFERENCE: "COMMAND_INFO"
            },
            {
                QUESTION: "How can I check the bot's version?",
                REFERENCE: "COMMAND_VERSION"
            },
            {
                QUESTION: "Does the bot support slash commands?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can the bot be used in private messages?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot require any permissions?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I set up permissions for the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a way to limit the bot's commands to certain channels?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have logging capabilities?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I get statistics from the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have any fun commands?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Are there any moderation features?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can the bot play music?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot support image commands?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How do I update the bot?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there an auto-update feature?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What happens if the bot goes offline?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I host the bot myself?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a Docker image available?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot use a database?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How does the bot store notes?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there a limit to the number of notes I can have?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I export my notes?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot support reminders?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How do I interact through chat with the bot?",
                REFERENCE: "COMMAND_CHAT"
            },
            {
                QUESTION: "Is there a command prefix?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I change the command prefix?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot support commands in DMs?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is there any way to backup the bot's data?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot support webhooks?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Are there any hidden commands?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I see the list of all commands?",
                REFERENCE: "COMMAND_LIST"
            },
            {
                QUESTION: "Is there a way to get help on a specific command?",
                REFERENCE: "COMMAND_HELP"
            },
            {
                QUESTION: "Does the bot have any Easter eggs?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Can I customize the bot's responses?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How does the bot handle errors?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have a debug mode?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Is the bot compliant with Discord's Terms of Service?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How often is the bot updated?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot have any dependencies on other bots?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I check the bot's responsiveness?",
                REFERENCE: "COMMAND_PING"
            },
            {
                QUESTION: "Is there a command to check if the bot is online?",
                REFERENCE: "COMMAND_PING"
            },
            {
                QUESTION: "What is the 'ping' command used for?",
                REFERENCE: "COMMAND_PING"
            },
            {
                QUESTION: "How do I manage notes with the bot?",
                REFERENCE: "COMMAND_NOTE"
            },
            {
                QUESTION: "Can I search for notes using the bot?",
                REFERENCE: "COMMAND_NOTE"
            },
            {
                QUESTION: "Does the bot support note categories?",
                REFERENCE: "COMMAND_NOTE"
            },
            {
                QUESTION: "Can I delete notes using the bot?",
                REFERENCE: "COMMAND_NOTE"
            },
            {
                QUESTION: "How do I interact with the bot's chat functionality?",
                REFERENCE: "COMMAND_CHAT"
            },
            {
                QUESTION: "Is the bot's provider Groq?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "What does 'Provider: Groq' mean?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Does the bot require any plans or subscriptions?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "Are there any plans to introduce paid features?",
                REFERENCE: "FILE_README.MD"
            },
            {
                QUESTION: "How can I get started with using the bot?",
                REFERENCE: "FILE_README.MD"
            }
        ]
    }
}