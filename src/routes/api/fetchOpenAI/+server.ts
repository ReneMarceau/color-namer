import { json, type RequestEvent } from '@sveltejs/kit';

import OpenAI from 'openai';
import type { ChatCompletion, ChatCompletionCreateParams } from 'openai/resources/chat';

import { env } from '$env/dynamic/private';

interface ResponseType {
    status: number;
    error?: string;
}

export async function POST(event: RequestEvent) {
    try {
        // Extract the prompt from the request body
        const { prompt } = await event.request.json();

        // Configure the OpenAI client
        const openai = new OpenAI({
            apiKey: env.OPENAI_API_KEY
        });
        const chatGptModel: string = "gpt-3.5-turbo";
        const systemRole: string = "Professional colorist";
        const question: string = "Give is the color name for " + prompt + " . Don't give me anything else. Just the color name!";

        const messageRequest: ChatCompletionCreateParams = {
            model: chatGptModel,
            messages: [
                {
                    "role": "system",
                    "content": systemRole
                },
                {
                    "role": "user",
                    "content": question
                },
            ],
        };

        // Generate the chat completion
        const completion: ChatCompletion = await openai.chat.completions.create(messageRequest);
        const result: string = completion.choices[0].message.content || "No result";

        return json(result);
    } catch (error) {
        console.error(error);
        const response: ResponseType = {
            status: 500
        };
        if (error instanceof Error) {
            response.error = error.message;
        }
        return json(response);
    }
}