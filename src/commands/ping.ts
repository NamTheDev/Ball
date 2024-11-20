import type { ApplicationCommandStructure } from '../types';

const command: ApplicationCommandStructure = {
    data: {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    async execute(interaction, client) {
        const MessageLatency = Date.now() - interaction.createdTimestamp;
        const WebsocketPing = client.ws.ping;
        await interaction.followUp(
            'Pong!'
            + '\n> **Message latency**:' + MessageLatency + 'ms'
            + '\n> **API latency**:' + WebsocketPing + 'ms'
        );
    }
}

export default command;