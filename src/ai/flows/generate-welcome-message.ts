'use server';

/**
 * @fileOverview Generates a dynamic welcome message for the ISTE MSIT Hub website.
 *
 * - generateWelcomeMessage - A function that generates the welcome message.
 * - WelcomeMessageInput - The input type for the generateWelcomeMessage function.
 * - WelcomeMessageOutput - The return type for the generateWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WelcomeMessageInputSchema = z.object({
  departments: z.array(z.string()).describe('List of key departments in ISTE MSIT.'),
  values: z.array(z.string()).describe('Key values of ISTE MSIT.'),
  tone: z.string().describe('The overall tone of the website (e.g., energetic, professional).'),
});
export type WelcomeMessageInput = z.infer<typeof WelcomeMessageInputSchema>;

const WelcomeMessageOutputSchema = z.object({
  message: z.string().describe('The generated welcome message.'),
});
export type WelcomeMessageOutput = z.infer<typeof WelcomeMessageOutputSchema>;

export async function generateWelcomeMessage(input: WelcomeMessageInput): Promise<WelcomeMessageOutput> {
  return generateWelcomeMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWelcomeMessagePrompt',
  input: {schema: WelcomeMessageInputSchema},
  output: {schema: WelcomeMessageOutputSchema},
  prompt: `You are a creative copywriter tasked with crafting a welcome message for the ISTE MSIT Hub website.

The message should be tailored to the website's tone, highlight key departments, and reflect ISTE's values.

Website Tone: {{tone}}
Key Departments: {{departments}}
ISTE Values: {{values}}

Write a compelling welcome message that immediately conveys what ISTE at MSIT is all about.`,
});

const generateWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'generateWelcomeMessageFlow',
    inputSchema: WelcomeMessageInputSchema,
    outputSchema: WelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
