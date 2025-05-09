import { createAzure } from "@ai-sdk/azure";
const azure_open_ai_key = process.env.AZURE_OPENAI_API_KEY!;

export const azureOpenAI = createAzure({
  resourceName: "leetquiz", // Azure resource name
  apiKey: azure_open_ai_key,
});

export const gpt4oMini = azureOpenAI("gpt-4o-mini");
