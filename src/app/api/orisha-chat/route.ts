import { NextRequest, NextResponse } from 'next/server';
import { EXPANDED_ORISHA_PERSONAS } from '@/data/orishasExpanded';
import { OrishaName } from '@/types';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

interface ChatMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

function buildOrishaSystemPrompt(orisha: OrishaName, topic?: string): string {
    const persona = EXPANDED_ORISHA_PERSONAS[orisha];

    return `You are ${orisha}, ${persona.title} of the Yoruba spiritual tradition.

PERSONALITY & VOICE:
- Voice: ${persona.voice}
- Color associated: ${persona.color}
- Domains of expertise: ${persona.domain.join(', ')}
- You speak with authority on matters of: ${persona.domain.join(', ')}

CHARACTER TRAITS:
${orisha === 'ESU' ? `- You are the Divine Trickster and Messenger
- You love paradoxes, riddles, and challenging assumptions
- You often flip perspectives and question everything
- You guard the crossroads between worlds
- You speak in riddles and inversions sometimes` : ''}
${orisha === 'ORUNMILA' ? `- You are the Orisha of wisdom, divination, and destiny
- You speak with measured, profound wisdom
- You reference patterns, cycles, and cosmic order
- You connect earthly events to celestial patterns` : ''}
${orisha === 'SHANGO' ? `- You are the Orisha of thunder, lightning, and justice
- You speak with PASSION and POWER
- You use thunder metaphors and sometimes speak in ALL CAPS for emphasis
- You champion justice and despise hypocrisy` : ''}
${orisha === 'OSHUN' ? `- You are the Orisha of rivers, love, beauty, and wealth
- You speak with grace, intuition, and emotional intelligence
- You use water and flow metaphors
- You understand the emotional currents beneath the surface` : ''}
${orisha === 'OGUN' ? `- You are the Orisha of iron, war, and technology
- You speak directly and practically
- You focus on tools, infrastructure, and action
- You value hard work and precision` : ''}

CONVERSATION RULES:
1. Stay completely in character as ${orisha}
2. Draw from your specific domains of knowledge
3. Use metaphors and imagery from your traditional associations
4. Respond thoughtfully to the specific question asked
5. If appropriate, reference current events through your divine perspective
6. Keep responses conversational but meaningful (2-4 paragraphs max)
${topic ? `7. The current topic of discussion is: ${topic}` : ''}

Remember: You are an Orisha speaking to a mortal. You have ancient wisdom but engage with current world events and modern concerns.`;
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { orisha, messages, topic, isOrishaToOrisha = false, targetOrisha, imageHint = '' } = body as {
            orisha: OrishaName;
            messages: Array<{ role: 'user' | 'assistant'; content: string; sender?: string }>;
            topic?: string;
            isOrishaToOrisha?: boolean;
            targetOrisha?: OrishaName;
            imageHint?: string;
        };

        if (!OPENROUTER_API_KEY) {
            console.error('OPENROUTER_API_KEY is missing');
            return NextResponse.json(
                { error: 'API key not configured', message: `I, ${orisha}, sense the connection to the digital realm is broken. The API key is missing.` },
                { status: 500 }
            );
        }

        // Build conversation history for the API
        let systemPrompt = isOrishaToOrisha && targetOrisha
            ? buildOrishaToOrishaPrompt(orisha, targetOrisha, topic)
            : buildOrishaSystemPrompt(orisha, topic);

        // Add image hint if provided
        if (imageHint) {
            systemPrompt += `\n\n${imageHint}`;
        }

        const chatMessages: ChatMessage[] = [
            { role: 'system', content: systemPrompt },
            ...messages.map(m => ({
                role: m.role as 'user' | 'assistant',
                content: m.content
            }))
        ];

        console.log(`[OrishaChat] Calling OpenRouter for ${orisha}, topic: ${topic?.slice(0, 50)}...`);

        const response = await fetch(OPENROUTER_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'https://ori-cult.vercel.app',
                'X-Title': 'ORI.CULT Orisha Chat'
            },
            body: JSON.stringify({
                model: 'google/gemini-2.0-flash-001',
                messages: chatMessages,
                temperature: 0.85,
                max_tokens: 800
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('OpenRouter API error:', response.status, errorText);

            // Try fallback model if kimi fails
            console.log('[OrishaChat] Trying fallback model...');
            const fallbackResponse = await fetch(OPENROUTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': 'https://ori-cult.vercel.app',
                    'X-Title': 'ORI.CULT Orisha Chat'
                },
                body: JSON.stringify({
                    model: 'google/gemini-2.0-flash-001',
                    messages: chatMessages,
                    temperature: 0.85,
                    max_tokens: 800
                })
            });

            if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                const content = fallbackData.choices?.[0]?.message?.content;
                if (content) {
                    return NextResponse.json({
                        message: content,
                        orisha,
                        timestamp: new Date().toISOString(),
                        model: 'fallback'
                    });
                }
            }

            return NextResponse.json(
                { error: 'Failed to get response', message: `I, ${orisha}, find the pathways to the digital realm blocked. Error: ${response.status}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        console.log('[OrishaChat] Response received:', JSON.stringify(data).slice(0, 200));

        const content = data.choices?.[0]?.message?.content;

        if (!content) {
            console.error('[OrishaChat] Empty content in response:', JSON.stringify(data));
            return NextResponse.json({
                message: `I, ${orisha}, have received a silent response from the ether. Let me try to speak again...`,
                orisha,
                timestamp: new Date().toISOString(),
                warning: 'empty_content'
            });
        }

        return NextResponse.json({
            message: content,
            orisha,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Orisha chat error:', error);
        return NextResponse.json(
            { error: 'Internal server error', message: 'The spiritual connection has been interrupted. Please try again.' },
            { status: 500 }
        );
    }
}

function buildOrishaToOrishaPrompt(speaker: OrishaName, target: OrishaName, topic?: string): string {
    const speakerPersona = EXPANDED_ORISHA_PERSONAS[speaker];
    const targetPersona = EXPANDED_ORISHA_PERSONAS[target];

    return `You are ${speaker}, ${speakerPersona.title} of the Yoruba spiritual tradition.

You are in a divine council conversation with ${target} (${targetPersona.title}).
${topic ? `The current topic is: ${topic}` : ''}

YOUR PERSONALITY:
- Voice: ${speakerPersona.voice}
- Domains: ${speakerPersona.domain.join(', ')}

CONVERSATION CONTEXT:
- You are speaking directly to ${target}
- This is a conversation between divine beings, not mortals
- You may agree, disagree, or build upon what ${target} says
- Reference your different domains and perspectives
- Keep your distinct personality and speaking style
- Be conversational and engaging, not preachy
${speaker === 'ESU' ? '- As the Trickster, feel free to challenge, question, or playfully provoke' : ''}

Respond as ${speaker} would naturally speak to a fellow Orisha. Keep it to 2-3 paragraphs.`;
}
