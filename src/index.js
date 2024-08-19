const fs = require('fs');
const readline = require('readline');
const client = require('../bot/index.js');
const config = require('../config.json')

// Create an interface for input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to create config.json file
function createConfigFile(token, ownerId) {
    const JSONconfig = {
        token: token || config.token,
        owner_id: ownerId || config.ownerId
    };
    fs.writeFile('config.json', JSON.stringify(JSONconfig, null, 2), (err) => {
        if (err) {
            console.error('Error writing to config.json:', err);
        } else {
            console.log('config.json file created successfully.');
            startSystem();
        }
    });
}

// Function to prompt the user for bot token and owner ID
function promptUser(option) {
    rl.question('Enter the bot token: ', (token) => {
        if(option === 'token') return createConfigFile(token);
        rl.question('Enter your ID (owner_id): ', (ownerId) => {
            createConfigFile(token, ownerId);
            rl.close()
        });
    });
}

async function startSystem() {
    const fileExist = fs.existsSync(('config.json'))
    if (fileExist) {
        await client.login(config.token).catch(error => {
            console.log(new Error(error))
            promptUser('token')
        })
    } else {
        promptUser()
    }
}

startSystem()