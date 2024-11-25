import config from "../../config";
import GroqClient from "./GroqClient";

const Moderation = {
    async validateContent(content: string) {
        const reasons = config.ERRORS.CONTENT_VIOLATION.REASONS;
        const [{
            message: {
                content: violation
            }
        }] = await GroqClient.chat(content,
            {
                systemMessage:
                    `See if this content violate any of these reasons: ${reasons.join(', ')}\n` +
                    'Must include reasons in the response.\n' +
                    'Use only ABC characters and or comma and dot.\n' +
                    'Response must be as short as possible (serve like an error message).\n' +
                    'Additional note: ' + config.ERRORS.CONTENT_VIOLATION.ADDITIONAL_NOTE
            }
        );
        for (const reason of reasons) {
            if (violation?.toLowerCase().includes(reason))
                throw Error(violation + `\n\nCode: ${config.ERRORS.CONTENT_VIOLATION.CODE}`);
        }
    }
}

export default Moderation;