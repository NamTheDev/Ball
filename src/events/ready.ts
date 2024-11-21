import { ActivityType } from 'discord.js';
import { client, commandCollection } from '../index';
import { existsSync, mkdirSync } from 'fs';


client.on('ready', async () => {
    if (!existsSync('database')) mkdirSync('database');
    console.log(`Logged in as ${client.user?.tag}!`)
    client.user?.setActivity('coding tutorials', { type: ActivityType.Watching, state: "It's boring watching those tutorials... :<" });
})