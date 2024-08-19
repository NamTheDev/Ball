const { Client, GatewayIntentBits } = require('discord.js');

// Dynamically get all GatewayIntentBits keys
const gatewayIntentBitsArray = Object.keys(GatewayIntentBits)

// Create a new client instance
const client = new Client({ intents: gatewayIntentBitsArray });

// Event handler for when the bot is ready
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Export the client instance for use in other files
module.exports = client;