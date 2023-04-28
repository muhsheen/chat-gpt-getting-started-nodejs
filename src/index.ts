import {OpenAIApi, Configuration} from "openai";
import * as dotenv from "dotenv";

(async () => {

  dotenv.config();

  const configuration = new Configuration({apiKey: process.env.OPEN_AI_KEY});
  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "what is the fastest land animal?"}]
  });

  const messages = response.data.choices
    .map(choice => choice.message?.content || "")
    .join("\n");
  console.log(messages);

})();
