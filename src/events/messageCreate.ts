import { client } from "..";
import { GroqClient } from "../utils/GroqClient";

client.on('messageCreate', async (message) => {
    const mistral = new GroqClient();
    if (
        !client.isReady() ||
        message.author.bot ||
        message.channelId !== '1308710521205162005'
    ) return;

    const input = message.content;
    const responses = await mistral.chat(input, 'Just chat normally and try not to hallucinate.');
    if (!responses) return;
    for (const data of responses) {
        if (!data.message || !data.message.content) continue;
        const content = data.message.content as string;
        await message.reply({
            content: content,
            allowedMentions: {
                repliedUser: false
            }
        })
    }
});