module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/openclaw-orisha2/ori-cult/src/app/api/web-search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/server.js [app-route] (ecmascript)");
;
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
async function POST(request) {
    try {
        const { topic } = await request.json();
        if (!OPENROUTER_API_KEY) {
            console.error('[WebSearch] API key not configured');
            return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'API key not configured'
            }, {
                status: 500
            });
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
                    {
                        role: 'user',
                        content: searchPrompt
                    }
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
                        {
                            role: 'user',
                            content: searchPrompt
                        }
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error('[WebSearch] Error:', error);
        const topic = 'general';
        return __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            headline: 'Current world events shaping our collective future',
            summary: 'Global developments continue to challenge our understanding of progress and community.',
            angle: 'How do these changes reflect the eternal dance between order and chaos?',
            topic,
            timestamp: new Date().toISOString(),
            source: 'error_fallback'
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8cdc97c7._.js.map