
import Groq from "groq-sdk";
import config from "../../config";

export class GroqClient {
    private groq: Groq

    constructor() {
        const groq = new Groq({ apiKey: config.GROQ_API_KEY });
        this.groq = groq
    }

    public async chat(message: string, systemMessage: string) {
        const response = await this.groq.chat.completions.create({
            model: config.GROQ_MODEL,
            messages: [{
                role: 'user',
                content: message
            }, {
                role: 'system',
                content: systemMessage
            }],
            max_tokens: 300
        })
        return response.choices;
    }
}