'use server';

/**
 * @fileOverview Generates a dynamic welcome message for the ISTE MSIT Hub website.
 *
 * - generateWelcomeMessage - A function that generates the welcome message.
 * - WelcomeMessageInput - The input type for the generateWelcomeMessage function.
 * - WelcomeMessageOutput - The return type for the generateWelcomeMessage function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input Schema
const WelcomeMessageInputSchema = z.object({
  departments: z.array(z.string()).describe('List of key departments in ISTE MSIT.'),
  values: z.array(z.string()).describe('Key values of ISTE MSIT.'),
  tone: z.string().describe('The overall tone of the website (e.g., energetic, professional).'),
});
export type WelcomeMessageInput = z.infer<typeof WelcomeMessageInputSchema>;

// Output Schema (3 parts instead of single message)
const WelcomeMessageOutputSchema = z.object({
  mainDescription: z.string().describe('The main welcome description of ISTE MSIT.'),
  societyHighlights: z.array(z.string()).describe('Key points about the society.'),
  additionalPerks: z.array(z.string()).describe('Additional perks of joining ISTE MSIT.'),
});
export type WelcomeMessageOutput = z.infer<typeof WelcomeMessageOutputSchema>;

export async function generateWelcomeMessage(input: WelcomeMessageInput): Promise<WelcomeMessageOutput> {
  return generateWelcomeMessageFlow(input);
}

// Prompt Definition
// Prompt Definition
const prompt = ai.definePrompt({
  name: 'generateWelcomeMessagePrompt',
  input: { schema: WelcomeMessageInputSchema },
  output: { schema: WelcomeMessageOutputSchema },
  prompt: `You are a creative copywriter tasked with crafting a concise and structured welcome message for the ISTE MSIT Hub website.

The message must be divided into 3 sections:

1. **Main Description**  
   - A single energetic and professional sentence.  
   - Briefly touch on departments: {{departments}}.  
   - Reflect ISTE values: {{values}}.

2. **Society Highlights**  
   - A list of 2 short, impactful points about what ISTE MSIT offers.

3. **Additional Perks**  
   - A list of 1–2 perks/benefits of joining ISTE MSIT.

Keep the tone clear, professional, and engaging. Avoid long explanations.` 
});


// Flow
const generateWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'generateWelcomeMessageFlow',
    inputSchema: WelcomeMessageInputSchema,
    outputSchema: WelcomeMessageOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
