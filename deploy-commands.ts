import { REST, Routes } from 'discord.js';
import { readdirSync } from 'fs';
import config from './config';
const { DISCORD_APPLICATION_ID: clientId, DISCORD_BOT_TOKEN: token } = config;

// Validate required environment variables
if (!clientId || !token) {
    console.error('Error: Missing DISCORD_APPLICATION_ID or DISCORD_TOKEN in environment variables.');
    process.exit(1);
}

// Define the structure for commands
interface Command {
    data: {
        toJSON: () => object;
    };
    execute: Function;
}

// Initialize the commands array
const commands: object[] = [];
const commandsPath = 'src/commands';
const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

// Load all command files
for (const file of commandFiles) {
    const filePath = `./${commandsPath}/${file}`;
    const command: Command = require(filePath).default;

    if (command && 'data' in command && 'execute' in command) {
        commands.push(command.data);
    } else {
        console.warn(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

// Initialize REST client
const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        // Clear existing commands
        await rest.put(Routes.applicationCommands(clientId), { body: [] });

        // Register new commands
        await rest.put(Routes.applicationCommands(clientId), { body: commands });

        console.log(`Successfully reloaded application (/) commands.`);
    } catch (error) {
        console.error('Error refreshing application commands:', error);
    }
})();
