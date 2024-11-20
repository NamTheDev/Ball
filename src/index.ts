import { ActivityType, Client } from "discord.js";
import config from "../config";

const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages",
        "MessageContent",
        "GuildMembers",
        "GuildIntegrations",
        "DirectMessages"
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`)
    client.user?.setActivity('with botmanager', { type: ActivityType.Watching, state: 'you' });
})

client.login(config.DISCORD_BOT_TOKEN);