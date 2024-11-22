
import Groq from "groq-sdk";
import config from "../../config";

const groq = new Groq({ apiKey: config.GROQ_API_KEY });

const GroqClient = {
  async chat(message: string, systemMessage: string, otherModel?: string) {
    const response = await groq.chat.completions.create({
        model: otherModel || config.GROQ_MODEL,
      messages: [
        {
          role: 'user',
          content: message
        }, {
          role: 'system',
          content: systemMessage
}
      ]
    });
    return response.choices;
  },
};

export default GroqClient;