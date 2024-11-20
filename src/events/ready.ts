import { ActivityType } from 'discord.js';
import { client, commandCollection } from '../index';


client.on('ready', async () => {
    console.log(`Logged in as ${client.user?.tag}!`)
    client.user?.setActivity('coding tutorials', { type: ActivityType.Watching, state: "It's boring watching those tutorials... :<" });
})