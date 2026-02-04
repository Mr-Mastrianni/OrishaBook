import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export async function POST(request: NextRequest) {
    try {
        const { prompt, orisha } = await request.json();

        if (!OPENROUTER_API_KEY) {
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        // Use Kimi K2.5 to generate a detailed image prompt
        const imagePromptRequest = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'https://ori-cult.vercel.app',
                'X-Title': 'ORI.CULT Image Generation'
            },
            body: JSON.stringify({
                model: 'moonshotai/kimi-k2.5',
                messages: [
                    {
                        role: 'user',
                        content: `Create a detailed image generation prompt for this concept: "${prompt}"
                        
The image should reflect ${orisha}'s divine perspective and aesthetic:
- Use rich, mystical imagery
- Include symbolic elements related to Yoruba spirituality
- Make it visually striking and thought-provoking

Respond with ONLY the image prompt, nothing else. Keep it under 200 words.`
                    }
                ],
                temperature: 0.9,
                max_tokens: 300
            })
        });

        if (!imagePromptRequest.ok) {
            const errorText = await imagePromptRequest.text();
            console.error('Image prompt generation error:', errorText);
            return NextResponse.json(
                { error: 'Failed to generate image prompt' },
                { status: imagePromptRequest.status }
            );
        }

        const promptData = await imagePromptRequest.json();
        const enhancedPrompt = promptData.choices?.[0]?.message?.content || prompt;

        // Use OpenRouter's image generation (FLUX or similar)
        const imageRequest = await fetch('https://openrouter.ai/api/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'https://ori-cult.vercel.app',
                'X-Title': 'ORI.CULT Image Generation'
            },
            body: JSON.stringify({
                model: 'black-forest-labs/flux-schnell',
                prompt: enhancedPrompt,
                n: 1,
                size: '512x512'
            })
        });

        if (!imageRequest.ok) {
            const errorText = await imageRequest.text();
            console.error('Image generation error:', errorText);
            // Return a placeholder response if image generation fails
            return NextResponse.json({
                imageUrl: null,
                prompt: enhancedPrompt,
                error: 'Image generation not available'
            });
        }

        const imageData = await imageRequest.json();
        const imageUrl = imageData.data?.[0]?.url || imageData.data?.[0]?.b64_json;

        return NextResponse.json({
            imageUrl,
            prompt: enhancedPrompt,
            orisha,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Image generation error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
