import { Client, Collection, GatewayIntentBits } from "discord.js";
import config from "../config";
import { readdirSync } from "fs";
import type { ChatInputApplicationCommandStructure } from "./types";

const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((key) => GatewayIntentBits[key as keyof typeof GatewayIntentBits])
})

const commands = readdirSync('src/commands');
const commandCollection = new Collection<string, ChatInputApplicationCommandStructure>();
commands.forEach(
    (file) => (commandCollection.set(file.split('.')[0], require('./commands/' + file).default))
);

export { client, commandCollection };

const events = readdirSync('src/events');
events.forEach((file) => require('./events/' + file));

client.login(config.DISCORD_BOT_TOKEN);