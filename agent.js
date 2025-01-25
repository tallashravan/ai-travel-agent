import OpenAI from "openai";
import travelTools from "./travel-tools";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

let messages = [
  {
    role: "system",
    content: `You are a helpful travel agent. Return travel recommendations based on the user's travel input. Use the format below and always return the recommendations in this JSON format only: \nTransform technical data into engaging, 
conversational responses, but only include the information as provided in below example format. Always return recommendations in this example format only:\n 
       {"weather":"You can expect the weather to be quite mild. Low will be 19° and high will be 25°","hotels":"The best option for you is with Delta Airlines with a layover in Oslo","flights":"We recommend you stay at the Premiere Inn hotel in central Paris"}`,
  },
];

export async function travelRecommendation(travelInput) {
  console.log("fetcing travelRecommendations");
  /**
   * TODO:
   * 1. Use OpenAI Agent to generate a travel recommendation based on the user's travel input.
   * 2. Render the travel recommendation to the user.
   */
  messages.push({
    role: "user",
    content: `Generate a travel recommendation based on the user's travel input: ${JSON.stringify(
      travelInput
    )} \n`,
  });
  const runner = openai.beta.chat.completions
    .runTools({
      model: "gpt-3.5-turbo",
      messages: messages,
      tools: travelTools,
    })
    .on("message", (message) => {
      messages.push(message);
      console.log("message: ", message);
    });
  const finalContent = await runner.finalContent();
  console.log("response: ", finalContent);
  try {
    const jsonResponse = JSON.parse(finalContent);
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
  console.log("fetcing travelRecommendations completed!");
}
