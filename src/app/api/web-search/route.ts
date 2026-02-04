import { NextRequest, NextResponse } from 'next/server';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export async function POST(request: NextRequest) {
    try {
        const { topic } = await request.json();

        if (!OPENROUTER_API_KEY) {
            console.error('[WebSearch] API key not configured');
            return NextResponse.json(
                { error: 'API key not configured' },
                { status: 500 }
            );
        }

        console.log(`[WebSearch] Searching for: ${topic}`);

        // Use Perplexity Sonar which has actual web search capability
        const searchPrompt = `Search the web and find ONE current, interesting news story or development about "${topic}" from the last 24-48 hours. 

Provide a brief summary in this exact format:
HEADLINE: [The actual headline or title of the news]
SUMMARY: [2-3 sentence summary of what's happening]
ANGLE: [A thought-provoking question or perspective about this topic]

Focus on something that would spark interesting philosophical or spiritual discussion. Be specific and cite real news.`;

        // Try Perplexity Sonar first (has web search)
        let response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': 'https://ori-cult.vercel.app',
                'X-Title': 'ORI.CULT Web Search'
            },
            body: JSON.stringify({
                model: 'perplexity/sonar',
                messages: [
                    { role: 'user', content: searchPrompt }
                ],
                temperature: 0.7,
                max_tokens: 600
            })
        });

        // If Perplexity fails, try Gemini Flash with web grounding
        if (!response.ok) {
            console.log('[WebSearch] Perplexity failed, trying Gemini...');
            response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'HTTP-Referer': 'https://ori-cult.vercel.app',
                    'X-Title': 'ORI.CULT Web Search'
                },
                body: JSON.stringify({
                    model: 'google/gemini-2.0-flash-001',
                    messages: [
                        { role: 'user', content: searchPrompt }
                    ],
                    temperature: 0.7,
                    max_tokens: 600
                })
            });
        }

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[WebSearch] All models failed:', errorText);
            // Return a meaningful fallback with made-up but interesting topic
            return NextResponse.json({
                headline: `Breaking developments in ${topic} sphere`,
                summary: `Major shifts are happening in the ${topic.toLowerCase()} realm that are affecting communities worldwide. Experts are divided on the implications, with some seeing opportunity and others warning of challenges ahead.`,
                angle: `How will these ${topic.toLowerCase()} changes affect the spiritual well-being of humanity?`,
                topic,
                timestamp: new Date().toISOString(),
                source: 'fallback'
            });
        }

        const data = await response.json();
        console.log('[WebSearch] Response:', JSON.stringify(data).slice(0, 300));

        const content = data.choices?.[0]?.message?.content || '';

        if (!content) {
            console.error('[WebSearch] Empty content received');
            return NextResponse.json({
                headline: `Current ${topic} developments creating global discussion`,
                summary: `Significant changes in the ${topic.toLowerCase()} landscape are prompting serious conversations among thought leaders and everyday people alike.`,
                angle: `What ancient wisdom applies to these modern ${topic.toLowerCase()} challenges?`,
                topic,
                timestamp: new Date().toISOString(),
                source: 'empty_response_fallback'
            });
        }

        // Parse the response
        const headlineMatch = content.match(/HEADLINE:\s*(.+?)(?=SUMMARY:|$)/is);
        const summaryMatch = content.match(/SUMMARY:\s*(.+?)(?=ANGLE:|$)/is);
        const angleMatch = content.match(/ANGLE:\s*(.+?)$/is);

        const result = {
            headline: headlineMatch?.[1]?.trim() || content.split('\n')[0] || `${topic} developments`,
            summary: summaryMatch?.[1]?.trim() || content.slice(0, 200),
            angle: angleMatch?.[1]?.trim() || 'What does this mean for humanity?',
            topic,
            timestamp: new Date().toISOString(),
            source: 'web_search'
        };

        console.log('[WebSearch] Parsed result:', result.headline);
        return NextResponse.json(result);

    } catch (error) {
        console.error('[WebSearch] Error:', error);
        const topic = 'general';
        return NextResponse.json({
            headline: 'Current world events shaping our collective future',
            summary: 'Global developments continue to challenge our understanding of progress and community.',
            angle: 'How do these changes reflect the eternal dance between order and chaos?',
            topic,
            timestamp: new Date().toISOString(),
            source: 'error_fallback'
        });
    }
}
