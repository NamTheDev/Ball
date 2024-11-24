
import Groq from "groq-sdk";
import config from "../../config";

const groq = new Groq({ apiKey: config.GROQ_API_KEY });

const GroqClient = {
  async chat(message: string, options: { systemMessage: string, otherModel?: string, json_object?: boolean }) {
    const { systemMessage, otherModel, json_object } = options;
    const response = await groq.chat.completions.create({
      response_format: {
        type: json_object ? 'json_object' : 'text'
      },
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