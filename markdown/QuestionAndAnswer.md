# **General Questions**

**Q1: What is Ball?**  
**A1:** Ball is a versatile Discord bot designed to enhance your server experience with a variety of commands and functionalities. It allows users to manage notes, interact through chat, check the bot's responsiveness, and more, providing a seamless and efficient solution for Discord server management.

**Q2: Is Ball free to use?**  
**A2:** Yes, Ball is completely open source and free to use. There are no plans or subscriptions required.

**Q3: Where can I find the source code for Ball?**  
**A3:** The source code for Ball is available on GitHub at [GitHub Repository](https://github.com/NamTheDev/Ball).

**Q4: Who developed Ball?**  
**A4:** Ball was developed by Nam. You can view more about Nam at [Nam's Profile](https://namthedev.github.io/profile/).

**Q5: Under what license is Ball distributed?**  
**A5:** Ball is licensed under the Apache License, Version 2.0.

**Q6: What programming language is Ball written in?**  
**A6:** Ball is written in TypeScript.

**Q7: What is the primary AI provider used by Ball?**  
**A7:** Ball uses Groq as its primary AI provider, specifically the `groq/llama-3.2-90b-text-preview` model.

**Q8: Does Ball support multiple AI models?**  
**A8:** Yes, Ball supports multiple AI models. The default model is `llama-3.2-90b-text-preview`, and additional models like "gemma2-9b-it", "llama3-grog-70b-8192-tool-use-preview", and others are available for use.

**Q9: What are the main features of Ball?**  
**A9:** Ball offers features such as chat interactions, note management (create, edit, view, delete notes), help commands, and a ping command to check responsiveness. It also includes content moderation using AI.

**Q10: Is Ball compatible with the latest version of Discord?**  
**A10:** Yes, Ball is built using `discord.js` version `^14.16.3`, which is compatible with the latest Discord API.

---

# **Installation and Setup**

**Q11: How do I install Ball?**  
**A11:** To install Ball, clone the repository from GitHub, install the necessary dependencies using `bun install`, and set up the required environment variables as specified in the `config.ts` file.

**Q12: What runtime environment does Ball use?**  
**A12:** Ball uses Bun as its runtime environment.

**Q13: How do I install the dependencies for Ball?**  
**A13:** Navigate to the project directory and run `bun install` to install all required dependencies as listed in the `package.json` file.

**Q14: What environment variables are required to run Ball?**  
**A14:** Ball requires the following environment variables:
- `DISCORD_BOT_TOKEN`
- `DISCORD_APPLICATION_ID`
- `GROQ_API_KEY`

These should be set in your environment or defined in a `.env` file.

**Q15: How do I set up environment variables for Ball?**  
**A15:** You can set up environment variables by creating a `.env` file in the root directory of the project and defining the required variables as follows:
```
DISCORD_BOT_TOKEN=your_discord_bot_token
DISCORD_APPLICATION_ID=your_discord_application_id
GROQ_API_KEY=your_groq_api_key
```

**Q16: How do I deploy Ball's commands to Discord?**  
**A16:** To deploy Ball's commands, run the script `bun deploy-commands.ts` using the command `bun dep-cmd`.

**Q17: What is the purpose of the `deploy-commands.ts` script?**  
**A17:** The `deploy-commands.ts` script registers or updates the bot's slash commands with the Discord API, ensuring that all commands are available and up-to-date in your Discord server.

**Q18: How do I start Ball in development mode?**  
**A18:** To start Ball in development mode with automatic reloading, use the command `bun dev`.

**Q19: How do I start Ball for production?**  
**A19:** To start Ball in production mode, use the command `bun start`.

**Q20: What is the purpose of the `setup.ts` script mentioned in `package.json`?**  
**A20:** The `setup.ts` script is intended for initial setup tasks such as preparing the environment, initializing databases, or other preparatory steps required before running the bot. (Note: The actual implementation details of `setup.ts` are not provided in the provided files.)

---

# **Configuration**

**Q21: Where are the configuration settings for Ball defined?**  
**A21:** Configuration settings for Ball are defined in the `config.ts` file and the `.aider.conf.yml` file.

**Q22: What is the purpose of the `.aider.conf.yml` file?**  
**A22:** The `.aider.conf.yml` file contains specific configuration settings for the Aider tool used within Ball, including model selection, chat mode, language settings, and display preferences like dark mode.

**Q23: How can I change the AI model used by Ball?**  
**A23:** You can change the AI model by modifying the `GROQ_MODEL` value in the `config.ts` file. Additionally, users can select different models when using the `/chat` command by specifying the desired model as an option.

**Q24: What does the `yes-always` setting in `.aider.conf.yml` do?**  
**A24:** The `yes-always: true` setting likely configures the Aider tool to automatically respond affirmatively without requiring explicit confirmation. (Note: Specific behavior depends on the implementation details of Aider.)

**Q25: How do I enable or disable dark mode in Ball?**  
**A25:** Dark mode can be enabled or disabled by setting the `dark-mode` property in the `.aider.conf.yml` file to `true` or `false` respectively.

**Q26: Can I change the language used by Ball?**  
**A26:** Yes, you can change the language by modifying the `chat-language` property in the `.aider.conf.yml` file. The default language is set to English (`en`).

**Q27: What is the maximum number of notes a user can create in Ball?**  
**A27:** The maximum number of notes a user can create is defined by the `MAX_NOTES` property in the `config.ts` file, which is set to `5` by default.

**Q28: How do I add more AI models to Ball?**  
**A28:** To add more AI models, update the `OTHER_GROQ_MODELS` array in the `config.ts` file with the names of the additional models you wish to include.

**Q29: Where are the bot's commands defined?**  
**A29:** The bot's commands are defined in the `src/commands` directory, with each command having its own `.ts` file (e.g., `chat.ts`, `help.ts`, `note.ts`, `ping.ts`).

**Q30: How is the bot's behavior customized through configuration files?**  
**A30:** The bot's behavior is customized through various configuration files such as `config.ts` for core settings, `.aider.conf.yml` for Aider-specific settings, and `package.json` for dependency and script configurations.

---

# **Bot Commands**

**Q31: What commands does Ball support?**  
**A31:** Ball supports several commands, including:
- `/chat`: Engage in a chat with the bot.
- `/help`: Get help or ask questions about the bot.
- `/note`: Manage your personal notes (create, edit, view, delete, list).
- `/ping`: Check the bot's responsiveness.

**Q32: How do I use the `/chat` command?**  
**A32:** To use the `/chat` command, type `/chat` followed by your message. You can also specify the AI model by using the `model` option. For example:
```
/chat message: "Hello, how are you?" model: "llama-3.2-90b-text-preview"
```

**Q33: What options are available with the `/chat` command?**  
**A33:** The `/chat` command has two options:
- `message` (String, required): Your message to the bot.
- `model` (String, optional): The AI model to use for the response. This field supports autocomplete with available models.

**Q34: How does the autocomplete feature work for the `/chat` command's model option?**  
**A34:** When typing the `/chat` command, the `model` option provides autocomplete suggestions based on the `OTHER_GROQ_MODELS` defined in the `config.ts` file, allowing users to easily select from available AI models.

**Q35: How do I use the `/help` command?**  
**A35:** To use the `/help` command, type `/help` followed by your question. The command supports autocomplete for predefined questions. For example:
```
/help question: "How do I use the chat command?"
```

**Q36: What can I do with the `/help` command?**  
**A36:** The `/help` command allows you to ask questions about the bot's functionalities, commands, source code, licensing, and more. It provides detailed answers based on predefined questions and references.

**Q37: How do I create a new note using the `/note` command?**  
**A37:** To create a new note, use the `/note` command with the `create` subcommand, specifying a `title` and `content`. For example:
```
/note create title: "Meeting Notes" content: "Discuss project milestones."
```

**Q38: How do I edit an existing note's title using the `/note` command?**  
**A38:** To edit a note's title, use the `/note` command with the `edit` subcommand, selecting `title` and providing the current and new titles. For example:
```
/note edit title title: "Old Title" new-title: "New Title"
```

**Q39: How do I edit a note's content using the `/note` command?**  
**A39:** To edit a note's content, use the `/note` command with the `edit` subcommand, selecting `content` and providing the `title` and new `content`. For example:
```
/note edit content title: "Meeting Notes" content: "Updated discussion points."
```

**Q40: How do I view a specific note using the `/note` command?**  
**A40:** To view a specific note, use the `/note` command with the `view` subcommand and specify the `title`. For example:
```
/note view title: "Meeting Notes"
```

**Q41: How do I show a note publicly using the `/note` command?**  
**A41:** To show a note publicly in the channel, use the `/note` command with the `show` subcommand and specify the `title`. For example:
```
/note show title: "Meeting Notes"
```
This will display the note's content as an embedded message in the channel.

**Q42: How do I delete a note using the `/note` command?**  
**A42:** To delete a note, use the `/note` command with the `delete` subcommand and specify the `title`. For example:
```
/note delete title: "Meeting Notes"
```

**Q43: How do I list all my notes using the `/note` command?**  
**A43:** To list all your notes, use the `/note` command with the `list` subcommand. For example:
```
/note list
```
This will display a numbered list of all your notes.

**Q44: What is the purpose of the `/ping` command?**  
**A44:** The `/ping` command checks the bot's responsiveness and provides latency information, including message latency and API (websocket) latency.

**Q45: How do I use the `/ping` command?**  
**A45:** Simply type `/ping` in the Discord chat, and the bot will respond with "Pong!" along with latency details.

**Q46: Can I customize the maximum number of notes I can create?**  
**A46:** Yes, the maximum number of notes is configurable via the `MAX_NOTES` property in the `config.ts` file. By default, it is set to `5`, but you can increase or decrease this limit as needed.

**Q47: What happens if I exceed the maximum number of notes?**  
**A47:** If you attempt to create more notes than the allowed maximum, the bot will throw an error message stating, "You have reached the maximum number of notes."

**Q48: Are there any restrictions on note titles?**  
**A48:** Yes, when creating or editing a note, the title must be between 5 and 15 characters long. Additionally, titles cannot contain URLs.

**Q49: Are there any restrictions on note content?**  
**A49:** Yes, the content of a note cannot exceed 2000 characters and must not contain any URLs.

**Q50: Can I use URLs in my notes?**  
**A50:** No, URLs are not allowed in notes. Attempting to include URLs in the title or content will result in an error.

---

# **Note System**

**Q51: How does the note system work in Ball?**  
**A51:** Ball's note system allows users to create, edit, view, show, delete, and list personal notes. Each user can manage their notes independently, with a maximum limit set in the configuration.

**Q52: Where are the notes stored?**  
**A52:** Notes are stored in the `database/notes/{userID}/` directory, with each note saved as a separate `.txt` file named after the note's title.

**Q53: How are notes organized for each user?**  
**A53:** Each user has a unique directory based on their Discord user ID within the `database/notes/` folder. All notes for that user are stored as `.txt` files in their respective directory.

**Q54: Can I view my notes privately?**  
**A54:** Yes, using the `/note view` command displays your note's content as an embedded message visible only to you.

**Q55: Can I display my notes publicly in the channel?**  
**A55:** Yes, using the `/note show` command will display your note's content as an embedded message in the public channel, making it visible to all members.

**Q56: How do I ensure my notes remain private?**  
**A56:** By using the `/note view` command instead of `/note show`, your notes are displayed only to you, maintaining privacy.

**Q57: What happens if I try to create a note with an existing title?**  
**A57:** The bot will throw an error stating, "Note already exists," preventing duplicate note titles.

**Q58: How do I rename a note's title?**  
**A58:** Use the `/note edit title` subcommand, providing the current title and the new desired title. For example:
```
/note edit title title: "Old Title" new-title: "New Title"
```

**Q59: How do I update the content of an existing note?**  
**A59:** Use the `/note edit content` subcommand, specifying the note's title and the new content. For example:
```
/note edit content title: "Meeting Notes" content: "Updated discussion points."
```

**Q60: Can I delete all my notes at once?**  
**A60:** Currently, Ball does not support deleting all notes at once. You would need to delete each note individually using the `/note delete` command.

**Q61: How do I retrieve a list of all my notes?**  
**A61:** Use the `/note list` command to receive a numbered list of all your existing notes.

**Q62: What format are the notes saved in?**  
**A62:** Notes are saved as plain text files with a `.txt` extension.

**Q63: Is there a limit to the length of a note's content?**  
**A63:** Yes, the content of a note is limited to 2000 characters to ensure manageability and prevent abuse.

**Q64: How does Ball handle note titles with special characters?**  
**A64:** Note titles are sanitized to exclude URLs and must be between 5 and 15 characters long. Special characters outside these constraints may not be supported or could lead to errors.

**Q65: Can multiple users have notes with the same title?**  
**A65:** Yes, since each user's notes are stored in separate directories based on their user ID, multiple users can have notes with identical titles without conflict.

**Q66: How secure is the note storage system?**  
**A66:** Notes are stored locally in the server's filesystem under `database/notes/{userID}/`. Access is restricted based on user IDs, but ensure that the server's file permissions are properly configured to maintain security.

**Q67: What happens to my notes if the bot is restarted?**  
**A67:** Notes are stored persistently in the filesystem, so they remain intact even if the bot is restarted.

**Q68: Can I export my notes from Ball?**  
**A68:** Currently, Ball does not have a built-in feature to export notes. However, since notes are stored as `.txt` files, you can manually access and export them from the `database/notes/{userID}/` directory.

**Q69: How does Ball prevent unauthorized access to my notes?**  
**A69:** Each user's notes are stored in a directory unique to their Discord user ID, and commands are designed to only access notes belonging to the requesting user. Proper file permissions on the server further ensure that notes are not accessible to others.

**Q70: What happens if I attempt to view a non-existent note?**  
**A70:** The bot will throw an error stating, "Note does not exist," indicating that the specified note title was not found.

---

# **AI Integration and Chat Functionality**

**Q71: How does the chat functionality work in Ball?**  
**A71:** The `/chat` command allows users to interact with Ball using AI-powered responses. When a user sends a message, Ball uses the specified or default AI model from Groq to generate a response based on the input message and a predefined system prompt.

**Q72: What AI models are available for the `/chat` command?**  
**A72:** Ball supports multiple AI models, including but not limited to:
- `llama-3.2-90b-text-preview`
- `gemma2-9b-it`
- `gemma-7b-it`
- `llama3-grog-70b-8192-tool-use-preview`
- `llama3-groq-8b-8192-tool-use-preview`
- `llama-3.1-70b-versatile`
- `llama-3.1-8b-instant`
- `llama-3.2-1b-preview`
- `llama-3.2-3b-preview`
- `llama-3.2-11b-vision-preview`
- `llama-3.2-90b-vision-preview`
- `llama-guard-3-8b`
- `llama3-70b-8192`
- `llama3-8b-8192`
- `mixtral-8x7b-32768`

**Q73: Can I specify a different AI model for each chat interaction?**  
**A73:** Yes, when using the `/chat` command, you can specify the AI model by using the `model` option. If no model is specified, Ball uses the default model defined in the configuration.

**Q74: How does Ball handle AI-generated content moderation?**  
**A74:** Ball uses a moderation system that validates the content of user messages and AI responses. It checks for content violations based on predefined reasons and prevents inappropriate content from being processed or displayed.

**Q75: What happens if the AI generates content that violates the moderation rules?**  
**A75:** If the AI-generated content includes violations, Ball throws an error with a specific error code (e.g., `ERROR_CONTENT_VIOLATION_(001)`), preventing the content from being sent to the user.

**Q76: How are code blocks handled in AI responses?**  
**A76:** Ball extracts code blocks from the AI's response and converts them into embedded messages for better readability. The original message replaces the code blocks with references like `REFERENCE: CODE_BLOCK_1`.

**Q77: Can I customize the system prompt used by the AI?**  
**A77:** Yes, the system prompt can be customized in the `chat.ts` command file. By default, it instructs the AI to act as an assistant that provides small, simple, and quick tasks with limited character length.

**Q78: How does Ball ensure the AI responses are concise?**  
**A78:** The system prompt in the `chat.ts` command instructs the AI to keep responses short, limited to a few hundred characters, and focused on providing simple and quick tasks.

**Q79: What should I do if the AI does not respond?**  
**A79:** If the AI does not provide a response, Ball throws an error stating, "No response from the bot." You can try reissuing the command or checking the bot's logs for more details.

**Q80: How does Ball handle multiple code blocks in AI responses?**  
**A80:** For each code block detected, Ball creates a separate embed with a title like `CODE_BLOCK_1`, `CODE_BLOCK_2`, etc., and replaces the original code block in the message with a reference to its embed.

---

# **Help Command and Documentation**

**Q81: What kind of questions can I ask using the `/help` command?**  
**A81:** The `/help` command allows you to ask various questions about the bot, including how to use specific commands (`chat`, `note`, `ping`, `help`), information about the AI provider, source code location, open-source status, pricing, and available commands.

**Q82: How does the autocomplete feature work for the `/help` command?**  
**A82:** When using the `/help` command, the `question` option provides autocomplete suggestions based on predefined questions listed in the `config.ts` file. This helps users quickly select and ask relevant questions.

**Q83: Can I ask custom questions not listed in the predefined list?**  
**A83:** The `/help` command primarily supports predefined questions for consistent and accurate responses. Custom questions outside this list may not yield expected results.

**Q84: Where does the `/help` command retrieve its answers from?**  
**A84:** The `/help` command retrieves answers by referencing predefined questions in the `config.ts` file and fetching relevant information from files like `README.md` and `QuestionAndAnswer.md`.

**Q85: How is the `QuestionAndAnswer.md` file used in the `/help` command?**  
**A85:** The `QuestionAndAnswer.md` file contains detailed answers to common questions, which the `/help` command references to provide comprehensive responses to user inquiries.

**Q86: Can the help documentation be updated?**  
**A86:** Yes, you can update the help documentation by modifying the `QuestionAndAnswer.md` file and the `README.md` file to include new information or update existing content.

**Q87: What is the role of the `HELP.QUESTIONS` array in `config.ts`?**  
**A87:** The `HELP.QUESTIONS` array defines the list of questions that the `/help` command can autocomplete and respond to, along with references to where the answers can be found.

**Q88: How does Ball ensure that help responses are accurate?**  
**A88:** Ball uses predefined references and system prompts to generate accurate responses. The moderation system also validates the content to ensure compliance with guidelines.

**Q89: Can I suggest new questions to be added to the help system?**  
**A89:** Yes, you can add new questions by updating the `HELP.QUESTIONS` array in the `config.ts` file and providing corresponding answers in the `QuestionAndAnswer.md` or `README.md` files.

**Q90: What should I do if the `/help` command doesn't answer my question?**  
**A90:** If the `/help` command doesn't provide an answer, ensure that your question is listed in the `HELP.QUESTIONS` array. If it's not, consider adding it or contacting the bot developer for support.

---

# **Development and Contribution**

**Q91: How can I contribute to the Ball project?**  
**A91:** You can contribute by submitting issues, proposing enhancements, or contributing code via pull requests on the [GitHub Repository](https://github.com/NamTheDev/Ball).

**Q92: What development tools are used in Ball?**  
**A92:** Ball is developed using TypeScript, with Bun as the runtime environment. It utilizes `discord.js` for Discord interactions and `groq-sdk` for AI functionalities.

**Q93: How is the project structured?**  
**A93:** The project follows a structured directory layout with separate folders for commands (`src/commands`), events (`src/events`), utilities (`src/utils`), and configuration files. This modular structure facilitates maintainability and scalability.

**Q94: How are new commands added to Ball?**  
**A94:** To add a new command, create a new `.ts` file in the `src/commands` directory following the existing command structure. Define the command's data, autocomplete (if applicable), and execute function. Then, deploy the commands using `bun deploy-commands.ts`.

**Q95: How does Ball handle command registration?**  
**A95:** Ball reads all command files from the `src/commands` directory, collects their data, and registers them with Discord using the `deploy-commands.ts` script. This ensures that all commands are available and up-to-date.

**Q96: What coding standards are followed in Ball?**  
**A96:** Ball follows strict TypeScript coding standards, enabled by the `tsconfig.json` settings. It uses strict type checking, module resolution, and other best practices to ensure code quality and reliability.

**Q97: How are events handled in Ball?**  
**A97:** Events are managed through the `src/events` directory. Each event file listens for specific Discord events (e.g., `interactionCreate`, `ready`) and defines how the bot should respond to them.

**Q98: Can I customize the bot's activity status?**  
**A98:** Yes, you can customize the bot's activity status in the `ready.ts` event file. The current status is set to "Watching coding tutorials," but you can modify it to display any activity you prefer.

**Q99: How does Ball manage dependencies?**  
**A99:** Ball manages dependencies through the `package.json` file, specifying required packages under `dependencies` and `devDependencies`. Dependencies are installed using Bun's package manager.

**Q100: How can I report bugs or request features for Ball?**  
**A100:** You can report bugs or request new features by opening an issue on the [GitHub Repository](https://github.com/NamTheDev/Ball). Provide detailed information to help the maintainers understand and address your concerns effectively.