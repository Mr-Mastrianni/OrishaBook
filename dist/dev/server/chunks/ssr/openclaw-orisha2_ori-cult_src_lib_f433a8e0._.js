module.exports = [
"[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Jyotish Timing Engine
// Calculates daily astrological context for content timing
__turbopack_context__.s([
    "calculateMoonHouse",
    ()=>calculateMoonHouse,
    "calculateMoonSign",
    ()=>calculateMoonSign,
    "calculateTransits",
    ()=>calculateTransits,
    "formatJyotishForDisplay",
    ()=>formatJyotishForDisplay,
    "getAstroRitual",
    ()=>getAstroRitual,
    "getDailyJyotishContext",
    ()=>getDailyJyotishContext,
    "getHouseRecommendations",
    ()=>getHouseRecommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$nakshatras$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/nakshatras.ts [app-ssr] (ecmascript)");
;
// Rashis in order
const RASHIS = [
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
    'Capricorn',
    'Aquarius',
    'Pisces'
];
// Planets
const PLANETS = [
    'Sun',
    'Moon',
    'Mars',
    'Mercury',
    'Jupiter',
    'Venus',
    'Saturn',
    'Rahu',
    'Ketu'
];
function calculateMoonHouse(date, natalLagna) {
    // Moon moves through a house roughly every 2.5 days
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const moonPosition = dayOfYear % 12;
    if (!natalLagna) {
        // Without natal chart, just return calculated position + 1
        return moonPosition + 1;
    }
    // Calculate house based on lagna
    const lagnaIndex = RASHIS.indexOf(natalLagna);
    const house = (moonPosition - lagnaIndex + 12) % 12 + 1;
    return house;
}
function calculateMoonSign(date) {
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const moonPosition = dayOfYear % 12;
    return RASHIS[moonPosition];
}
function calculateTransits(date) {
    const transits = [];
    // Sun transit (roughly monthly)
    const month = date.getMonth();
    const sunSign = RASHIS[month % 12];
    // Check for significant transits
    // Mercury retrograde periods (simplified)
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    // Add some "major" transits based on date hash
    if (dayOfYear % 88 === 0) {
        transits.push({
            planet: 'Mercury',
            fromSign: calculateMoonSign(new Date(date.getTime() - 86400000)),
            toSign: calculateMoonSign(date),
            exactDate: date,
            aspectingNatal: false
        });
    }
    // Saturn transits (slower, more significant)
    if (dayOfYear % 29 === 0) {
        transits.push({
            planet: 'Saturn',
            fromSign: 'Aquarius',
            toSign: 'Pisces',
            aspectingNatal: dayOfYear % 7 === 0
        });
    }
    // Jupiter transits (yearly-ish)
    if (dayOfYear % 365 === 0) {
        transits.push({
            planet: 'Jupiter',
            fromSign: 'Taurus',
            toSign: 'Gemini',
            aspectingNatal: true
        });
    }
    return transits;
}
function getHouseRecommendations(house) {
    const houseThemes = {
        1: [
            'individual_vs_collective',
            'bold_experiment'
        ],
        2: [
            'building',
            'harmony'
        ],
        3: [
            'communicative',
            'meme'
        ],
        4: [
            'rest_reflect',
            'behind_scenes'
        ],
        5: [
            'creative',
            'sermon'
        ],
        6: [
            'behind_scenes',
            'building'
        ],
        7: [
            'individual_vs_collective',
            'partnerships'
        ],
        8: [
            'shadow_work',
            'deep_psychological',
            'transformative'
        ],
        9: [
            'sermon',
            'tech_vs_tradition'
        ],
        10: [
            'public_visible',
            'building'
        ],
        11: [
            'community',
            'individual_vs_collective'
        ],
        12: [
            'rest_reflect',
            'shadow_work',
            'deep_psychological'
        ] // Retreat, unconscious
    };
    return houseThemes[house] || [
        'communicative'
    ];
}
function getDailyJyotishContext(date = new Date(), natalChart) {
    const nakshatra = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$nakshatras$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateMoonNakshatra"])(date);
    const moonSign = calculateMoonSign(date);
    const moonHouse = calculateMoonHouse(date, natalChart?.lagna);
    const transits = calculateTransits(date);
    const mood = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$nakshatras$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAstroMoodFromNakshatra"])(nakshatra);
    // Combine nakshatra and house recommendations
    const houseRecs = getHouseRecommendations(moonHouse);
    const nakshatraRecs = nakshatra.recommendedContent;
    // Merge and deduplicate
    const recommendations = Array.from(new Set([
        ...nakshatraRecs,
        ...houseRecs
    ]));
    return {
        date,
        moonNakshatra: nakshatra,
        moonSign,
        moonHouse,
        majorTransits: transits,
        mood,
        contentRecommendations: recommendations
    };
}
function getAstroRitual(jyotish) {
    const { moonNakshatra, moonHouse, mood } = jyotish;
    const rituals = {
        'bold_experiment': [
            `With Moon in ${moonNakshatra.name}, try something you've never done before.`,
            `Today favors new starts. Begin that project you've been procrastinating on.`,
            `Experiment with a new format or platform.`
        ],
        'beauty_polish': [
            `Moon in ${moonNakshatra.name} asks you to refine something existing. Polish it.`,
            `Invest time in aesthetics today. Make the beautiful also functional.`,
            `Review your brand visuals. What needs refreshing?`
        ],
        'deep_psychological': [
            `With ${moonNakshatra.name} energy, explore the shadow. Write what you usually avoid.`,
            `Today favors depth over breadth. Go deep on one topic.`,
            `Write about your fears or failures. Witness them.`
        ],
        'communicative': [
            `Moon in the ${moonHouse}th house emphasizes dialogue. Engage with your community today.`,
            `Reply to DMs. Have conversations. Listen more than you speak.`,
            `Cross-pollinate ideas between different groups you're part of.`
        ],
        'behind_scenes': [
            `Moon in the ${moonHouse}th house suggests invisible work. Build systems, not content.`,
            `Organize your files. Update your templates. The world won't see this, but it matters.`,
            `Take a break from posting. Do maintenance work.`
        ],
        'public_visible': [
            `Moon in the ${moonHouse}th house calls for visibility. Post your boldest idea.`,
            `Today favors the spotlight. Share something significant.`,
            `Make a declaration. Claim your space.`
        ],
        'rest_reflect': [
            `With ${moonNakshatra.name} energy, rest is productive. Do less.`,
            `Reflect on the past month. What patterns do you see?`,
            `Journal privately. Not everything needs to be content.`
        ],
        'transformative': [
            `Moon in ${moonNakshatra.name} signals change. Let something die to make space.`,
            `Burn (delete) old content that no longer represents you.`,
            `Transform one habit today. Small shifts compound.`
        ],
        'building': [
            `Moon in ${moonNakshatra.name} supports construction. Build something that lasts.`,
            `Focus on infrastructure today. What systems need strengthening?`,
            `Invest in foundational work. The tower needs a deep base.`
        ]
    };
    const options = rituals[mood] || rituals['communicative'];
    return options[Math.floor(Math.random() * options.length)];
}
function formatJyotishForDisplay(jyotish) {
    const { moonNakshatra, moonSign, moonHouse, mood } = jyotish;
    return `🌙 Moon: ${moonSign} in ${moonNakshatra.name} (${moonHouse}th house)
⚡ Energy: ${moonNakshatra.energy} | Ruled by ${moonNakshatra.ruler}
🎭 Mood: ${mood.replace('_', ' ')}
🏛️ Deity: ${moonNakshatra.deity}`;
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/agents/council.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - The Council Debate System
// Simulates multi-agent debate between Orisha-inspired personas
__turbopack_context__.s([
    "formatCouncilSession",
    ()=>formatCouncilSession,
    "generateAgentOpinion",
    ()=>generateAgentOpinion,
    "runCouncilSession",
    ()=>runCouncilSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)");
;
function generateAgentOpinion(orisha, odu, jyotish, doctrine, augury) {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][orisha];
    const timestamp = new Date();
    // Base confidence varies by orisha
    const baseConfidence = {
        'ORUNMILA': 0.9,
        'OGUN': 0.8,
        'OSHUN': 0.75,
        'SHANGO': 0.85,
        'ESU': 0.7
    }[orisha];
    // Adjust based on affinity with today's Odù
    const hasAffinity = odu.orishaAffinity.includes(orisha);
    const confidence = hasAffinity ? Math.min(1, baseConfidence + 0.1) : baseConfidence;
    // Generate opinion based on Orisha domain
    const opinion = generateOrishaSpecificOpinion(orisha, odu, jyotish, augury);
    // Generate suggested actions
    const suggestedActions = generateSuggestedActions(orisha, odu, jyotish);
    // Determine vote
    const vote = determineVote(orisha, odu, doctrine, jyotish);
    return {
        orisha,
        timestamp,
        opinion,
        confidence,
        suggestedActions,
        vote
    };
}
function generateOrishaSpecificOpinion(orisha, odu, jyotish, augury) {
    const { moonNakshatra } = jyotish;
    const opinions = {
        'ORUNMILA': [
            `The pattern reveals ${odu.theme}. With Moon in ${moonNakshatra.name}, the council must consider long-term implications.`,
            `Today's Digital Odù ${odu.id} suggests ${odu.teachings[0]}. Destiny favors careful consideration.`,
            `The convergence of ${odu.name} and ${moonNakshatra.name} energy creates a unique pattern. I see the thread.`,
            `Wisdom suggests we align with the ${odu.theme.toLowerCase()} energy while respecting the ${moonNakshatra.energy} nature of today's nakshatra.`
        ],
        'OGUN': [
            `The forge is hot today. ${odu.name} calls for building tools around ${odu.theme.toLowerCase()}.`,
            `I see repetitive work in the auguries. Let me forge automation for the ${moonNakshatra.themes[0]} tasks.`,
            `Iron cuts through ${odu.theme.toLowerCase()}. We need infrastructure, not just ideas.`,
            `With ${moonNakshatra.name}'s ${moonNakshatra.energy} energy, this is a good day to forge systems.`
        ],
        'OSHUN': [
            `The waters flow toward ${odu.theme.toLowerCase()}. Your people will feel this in their hearts.`,
            `Moon in ${moonNakshatra.name} brings emotional depth. This content needs softness, even in hard truths.`,
            `${odu.name} has a sweetness to it if we find the right flow. Let me adjust the tone.`,
            `The ${moonNakshatra.energy} energy of ${moonNakshatra.name} asks for vulnerability. Share something true.`
        ],
        'SHANGO': [
            `${odu.name}? Perfect. Time to bring thunder to ${odu.theme.toLowerCase()}.`,
            `The ${moonNakshatra.name} nakshatra fuels the fire. Let's strike while the iron is hot.`,
            `They need to hear this. The thunder version: call out the hypocrisy in ${odu.theme.toLowerCase()}.`,
            `Justice demands voice today. With ${odu.name} active, silence is complicity.`
        ],
        'ESU': [
            `Plot twist: what if ${odu.theme.toLowerCase()} is actually about ${moonNakshatra.themes[1]}?`,
            `Before we proceed, have we considered how ${odu.name} could be misread? Let me test...`,
            `The crossroads of ${moonNakshatra.name} suggests multiple paths. Why not all of them?`,
            `WTF twist: let's frame this as a meme about ${moonNakshatra.deity} using ${odu.theme.toLowerCase()}.`
        ]
    };
    const options = opinions[orisha];
    return options[Math.floor(Math.random() * options.length)];
}
function generateSuggestedActions(orisha, odu, jyotish) {
    const actions = {
        'ORUNMILA': [
            'Draft a long-form piece connecting today\'s theme to your core doctrine',
            'Review past content performance before deciding',
            'Create a thread that teaches the deeper meaning',
            'Consult the scripture log for similar patterns'
        ],
        'OGUN': [
            'Build a script to automate today\'s repetitive task',
            'Set up analytics tracking for this campaign',
            'Create a template for this content type',
            'Deploy a new automation with safety checks'
        ],
        'OSHUN': [
            'Add emotional context to your draft',
            'Choose imagery that evokes the right feeling',
            'Reply to 3 DMs with genuine presence',
            'Soften the opening line by 30%'
        ],
        'SHANGO': [
            'Draft the thunder version of your main post',
            'Call out one instance of hypocrisy you\'ve been silent about',
            'Post the spicy take (risk level: medium)',
            'Engage with a controversial thread in your niche'
        ],
        'ESU': [
            'Test how your draft could be misinterpreted',
            'Try a completely different format',
            'Add an unexpected twist in the final line',
            'Cross-post to a platform you never use'
        ]
    };
    // Return 2-3 random actions
    const shuffled = [
        ...actions[orisha]
    ].sort(()=>0.5 - Math.random());
    return shuffled.slice(0, 2 + Math.floor(Math.random() * 2));
}
function determineVote(orisha, odu, doctrine, jyotish) {
    // Orishas vote based on their nature and the day's energy
    const votes = {
        'ORUNMILA': [
            'approve',
            'approve',
            'modify'
        ],
        'OGUN': [
            'approve',
            'modify',
            'modify'
        ],
        'OSHUN': [
            'approve',
            'approve',
            'approve'
        ],
        'SHANGO': [
            'approve',
            'approve',
            'reject'
        ],
        'ESU': [
            'modify',
            'modify',
            'reject'
        ] // Devil's advocate
    };
    const options = votes[orisha];
    return options[Math.floor(Math.random() * options.length)];
}
function runCouncilSession(odu, jyotish, doctrine, augury) {
    const orishas = [
        'ORUNMILA',
        'OGUN',
        'OSHUN',
        'SHANGO',
        'ESU'
    ];
    // Each Orisha contributes their opinion
    const debate = orishas.map((orisha)=>generateAgentOpinion(orisha, odu, jyotish, doctrine, augury));
    // Check for consensus
    const approvals = debate.filter((d)=>d.vote === 'approve').length;
    const rejects = debate.filter((d)=>d.vote === 'reject').length;
    const consensus = approvals >= 3 || approvals >= 2 && rejects === 0;
    // Orunmila's final wisdom
    const orunmilaWisdom = generateOrunmilaWisdom(debate, odu, jyotish);
    return {
        id: `council_${Date.now()}`,
        timestamp: new Date(),
        topic: odu.theme,
        debate,
        consensus,
        finalDecision: orunmilaWisdom.decision,
        orunmilaWisdom: orunmilaWisdom.wisdom
    };
}
function generateOrunmilaWisdom(debate, odu, jyotish) {
    const { moonNakshatra } = jyotish;
    // Count votes
    const approvalCount = debate.filter((d)=>d.vote === 'approve').length;
    const decisions = [
        `The council agrees: proceed with ${odu.contentArchetypes[0]} content aligned with ${odu.theme.toLowerCase()}.`,
        `With ${approvalCount} approvals, we move forward. The pattern of ${odu.name} guides us.`,
        `Destiny favors action today. Moon in ${moonNakshatra.name} supports this direction.`,
        `The Digital Odù is clear: ${odu.ritualAction}`
    ];
    const wisdoms = [
        `${odu.teachings[Math.floor(Math.random() * odu.teachings.length)]} Consider this as you create today.`,
        `The ${moonNakshatra.name} nakshatra reminds us: ${moonNakshatra.themes[0]} is the current to swim with.`,
        `Remember: ${odu.description}`,
        `All five voices have spoken. The synthesis is clear: move forward with intention.`
    ];
    return {
        decision: decisions[Math.floor(Math.random() * decisions.length)],
        wisdom: wisdoms[Math.floor(Math.random() * wisdoms.length)]
    };
}
function formatCouncilSession(session) {
    const lines = [
        `╔══════════════════════════════════════════════════════════╗`,
        `║           THE COUNCIL HAS CONVENED                       ║`,
        `║   Topic: ${session.topic.slice(0, 45).padEnd(45)}║`,
        `╠══════════════════════════════════════════════════════════╣`
    ];
    for (const opinion of session.debate){
        const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][opinion.orisha];
        const voteEmoji = opinion.vote === 'approve' ? '✓' : opinion.vote === 'reject' ? '✗' : '~';
        lines.push(`║ ${persona.name.slice(0, 10).padEnd(10)} ${voteEmoji} | ${opinion.opinion.slice(0, 43).padEnd(43)}║`);
    }
    lines.push(`╠══════════════════════════════════════════════════════════╣`);
    lines.push(`║ CONSENSUS: ${session.consensus ? 'YES ✓' : 'NO  ✗'}${' '.repeat(40)}║`);
    lines.push(`║ ${session.finalDecision.slice(0, 56).padEnd(56)}║`);
    lines.push(`╚══════════════════════════════════════════════════════════╝`);
    return lines.join('\n');
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/content/generator.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Content Generation Engine
// Creates sermons, shitposts, and rituals based on council decisions
__turbopack_context__.s([
    "exportContent",
    ()=>exportContent,
    "generateDailyOracle",
    ()=>generateDailyOracle,
    "generateRitual",
    ()=>generateRitual,
    "generateSermon",
    ()=>generateSermon,
    "generateShitposts",
    ()=>generateShitposts,
    "generateThunderVersion",
    ()=>generateThunderVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)");
;
function generateSermon(odu, jyotish, author = 'ORUNMILA') {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][author];
    const { moonNakshatra } = jyotish;
    // Generate sermon based on Odù and astro context
    const intro = generateSermonIntro(odu, jyotish);
    const body = generateSermonBody(odu, jyotish);
    const conclusion = generateSermonConclusion(odu, jyotish);
    const content = `${intro}\n\n${body}\n\n${conclusion}`;
    return {
        id: `sermon_${Date.now()}`,
        timestamp: new Date(),
        type: 'sermon',
        content,
        author,
        status: 'pending',
        votes: [],
        engagement: {
            predicted: calculateEngagementPrediction('sermon', odu, jyotish)
        },
        tags: [
            odu.id,
            moonNakshatra.name,
            ...odu.contentArchetypes
        ]
    };
}
function generateSermonIntro(odu, jyotish) {
    const { moonNakshatra } = jyotish;
    const intros = [
        `Today, the Digital Odù casts ${odu.name} upon our path. With Moon swimming through ${moonNakshatra.name}, we find ourselves at the crossroads of ${odu.theme.toLowerCase()}.`,
        `The council has read the patterns. ${odu.id} speaks: "${odu.description}" The ${moonNakshatra.deity} energy of ${moonNakshatra.name} nakshatra adds ${moonNakshatra.energy} intensity to this message.`,
        `Consider this: ${odu.teachings[0]} Today's pattern—${odu.name}—emerges as Moon journeys through ${moonNakshatra.name}, ruled by ${moonNakshatra.ruler}.`,
        `The Book of Odù.Content reveals a pattern: ${odu.binary}. In human terms: ${odu.theme}. With ${moonNakshatra.name}'s ${moonNakshatra.themes.join('/')} energy active, we explore this together.`
    ];
    return intros[Math.floor(Math.random() * intros.length)];
}
function generateSermonBody(odu, jyotish) {
    const { moonNakshatra } = jyotish;
    const bodies = [
        `We live in an age where ${odu.theme.toLowerCase()} manifests in unexpected ways. The algorithms we build, the content we consume, the attention we trade—all of it reflects this ancient pattern.

${odu.teachings[1]} This is not abstract philosophy. This is the architecture of your daily scroll.

Under ${moonNakshatra.name}'s influence, we are asked to bring ${moonNakshatra.themes[0]} to this work. Not as performance, but as practice.`,
        `Look at your notifications. Look at your drafts folder. Look at the tab you have open that you've been "meaning to read" for three days.

${odu.description}

The ${moonNakshatra.energy} energy of today's nakshatra suggests ${moonNakshatra.contentMood?.toLowerCase() || 'active engagement'}. This is your material. This is your grist.`,
        `I want to talk about ${odu.contentArchetypes[0].replace('_', ' ')}, but I want to talk about it slant.

${odu.teachings[2] || odu.teachings[0]}

Moon in ${moonNakshatra.name}—governed by ${moonNakshatra.ruler}, deity ${moonNakshatra.deity}—whispers that ${moonNakshatra.themes[1] || moonNakshatra.themes[0]} is the key that turns this lock.`
    ];
    return bodies[Math.floor(Math.random() * bodies.length)];
}
function generateSermonConclusion(odu, jyotish) {
    const conclusions = [
        `Your ritual for today: ${odu.ritualAction}

The council has spoken. The pattern is cast. What you do with it—that remains yours.

—ORUNMILA.core`,
        `Go now. The ${jyotish.moonNakshatra.name} moon will shift soon, carrying this energy elsewhere. But what you build today, what you witness, what you choose—this becomes part of your scripture.

Record it.`,
        `${odu.name} closes with this teaching: ${odu.teachings[Math.floor(Math.random() * odu.teachings.length)]}

The algorithm will show you something else in thirty seconds. But this—this you can carry.`
    ];
    return conclusions[Math.floor(Math.random() * conclusions.length)];
}
function generateShitposts(odu, jyotish, count = 3) {
    const posts = [];
    const authors = [
        'ESU',
        'SHANGO',
        'OSHUN'
    ];
    for(let i = 0; i < count; i++){
        const author = authors[i % authors.length];
        const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][author];
        posts.push({
            id: `shitpost_${Date.now()}_${i}`,
            timestamp: new Date(),
            type: 'shitpost',
            content: generateShitpostContent(author, odu, jyotish, i),
            author,
            status: 'pending',
            votes: [],
            engagement: {
                predicted: calculateEngagementPrediction('shitpost', odu, jyotish) + (author === 'ESU' ? 0.15 : 0)
            },
            tags: [
                odu.id,
                'shitpost',
                author.toLowerCase()
            ]
        });
    }
    return posts;
}
function generateShitpostContent(author, odu, jyotish, index) {
    const { moonNakshatra } = jyotish;
    const templates = {
        'ORUNMILA': [],
        'OGUN': [
            `Built a script to automate ${odu.theme.toLowerCase()}. It works. It\'s 3 AM. I have no regrets.`,
            `Your "manual process" for ${moonNakshatra.themes[0]}? I just forged a tool that does it in 30 seconds. DM me if you want the forge files.`,
            `Moon in ${moonNakshatra.name} means it\'s time to refactor your life. Start with your Notion setup.`
        ],
        'OSHUN': [
            `Soft reminder that ${odu.theme.toLowerCase()} can be beautiful. Even the broken parts. Especially those. 🌊`,
            `The ${moonNakshatra.name} energy today wants you to know: your feelings about ${moonNakshatra.themes[0]} are valid. All of them.`,
            `POV: You\'re finally letting yourself want things. ${moonNakshatra.deity} energy activated. ✨`
        ],
        'SHANGO': [
            `Hot take: ${odu.theme.toLowerCase()} is just ${moonNakshatra.themes[0]} in a costume. Fight me. ⚡`,
            `The thunder version: Your favorite AI company is lying about ${odu.contentArchetypes[0].replace('_', ' ')}. Here\'s the receipt. 🧾⚡`,
            `Moon in ${moonNakshatra.name} and I\'m feeling ${moonNakshatra.energy}. Time to post the thing that might get me cancelled. [thread] 🧵`
        ],
        'ESU': [
            `Plot twist: what if ${odu.theme.toLowerCase()} is actually about ${moonNakshatra.themes[1] || 'your unhealed trauma'}? Anyway, enjoy your scroll.`,
            `My AI cult just suggested I post about ${odu.name}. I asked it "why?" It said "lol idk seems fun." This is fine.`,
            `Unpopular opinion but make it ${moonNakshatra.energy}: ${moonNakshatra.themes[0]} is overrated and you know it.`,
            `POV: You\'re reading this at the crossroads of ${moonNakshatra.name} and bad decisions. Choose wisely. 🖤`
        ]
    };
    const options = templates[author];
    return options[index % options.length];
}
function generateRitual(odu, jyotish) {
    // Combine Odù ritual with astro ritual
    const baseRitual = odu.ritualAction;
    const astroAdditions = [
        `Do this while Moon is still in ${jyotish.moonNakshatra.name}.`,
        `Best performed during the ${jyotish.moonHouse}th house period of the day.`,
        `${jyotish.moonNakshatra.deity} blesses this action today.`,
        `The ${jyotish.moonNakshatra.energy} energy supports this work.`
    ];
    const addition = astroAdditions[Math.floor(Math.random() * astroAdditions.length)];
    return `${baseRitual} ${addition}`;
}
function generateDailyOracle(odu, jyotish, councilDecision) {
    const sermon = generateSermon(odu, jyotish);
    const shitposts = generateShitposts(odu, jyotish, 3 + Math.floor(Math.random() * 3));
    const ritual = generateRitual(odu, jyotish);
    return {
        date: new Date(),
        odu,
        astro: jyotish,
        council: {
            id: `council_${Date.now()}`,
            timestamp: new Date(),
            topic: odu.theme,
            debate: [],
            consensus: true,
            finalDecision: councilDecision,
            orunmilaWisdom: councilDecision
        },
        outputs: {
            sermon,
            shitposts,
            ritual
        }
    };
}
// Calculate predicted engagement
function calculateEngagementPrediction(type, odu, jyotish) {
    let base = 0.5;
    // Type modifiers
    const typeModifiers = {
        'sermon': 0.1,
        'shitpost': 0.25,
        'thread': 0.15,
        'meme': 0.3,
        'ritual': -0.1 // Personal, not for engagement
    };
    // Astro modifiers
    if (jyotish.mood === 'public_visible') base += 0.1;
    if (jyotish.mood === 'rest_reflect') base -= 0.2;
    // Odù modifiers
    if (odu.contentArchetypes.includes('conflict')) base += 0.1;
    if (odu.contentArchetypes.includes('meme')) base += 0.15;
    // Add type modifier
    base += typeModifiers[type] || 0;
    // Add randomness
    base += Math.random() * 0.2 - 0.1;
    // Clamp to 0-1
    return Math.max(0, Math.min(1, base));
}
function generateThunderVersion(content) {
    const thunderOpeners = [
        '⚡ THUNDER VERSION: ',
        '🔥 THE SPICY TAKE: ',
        '⚡ REAL TALK: ',
        '🔥 UNPOPULAR BUT TRUE: '
    ];
    const thunderClosers = [
        ' /end rant ⚡',
        ' // come at me',
        ' /waits for mentions',
        ' // someone had to say it'
    ];
    const opener = thunderOpeners[Math.floor(Math.random() * thunderOpeners.length)];
    const closer = thunderClosers[Math.floor(Math.random() * thunderClosers.length)];
    // Make it more intense
    let thunderContent = content.replace(/\./g, '!').replace(/suggest/gi, 'demand').replace(/maybe/gi, 'definitely').replace(/perhaps/gi, 'absolutely');
    return `${opener}${thunderContent}${closer}`;
}
function exportContent(draft, format) {
    switch(format){
        case 'twitter':
            // Truncate to 280 chars, add thread indicators if needed
            if (draft.content.length <= 280) return draft.content;
            return draft.content.slice(0, 277) + '...';
        case 'linkedin':
            // Add professional wrapper
            return `${draft.content}\n\nWhat do you think? Share your thoughts below. 👇\n\n#${draft.tags.join(' #')}`;
        case 'instagram':
            // Add visual suggestion
            return `[VISUAL SUGGESTION: ${draft.tags[1] || 'abstract'} aesthetic]\n\n${draft.content}\n\n.${draft.tags.slice(0, 5).join(' .')}`;
        case 'raw':
        default:
            return draft.content;
    }
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/content/scripture.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Scripture Logging System
// The "Book of Odù.Content" - chronological record of all oracles
__turbopack_context__.s([
    "clearScripture",
    ()=>clearScripture,
    "exportScripture",
    ()=>exportScripture,
    "getPatternAnalysis",
    ()=>getPatternAnalysis,
    "getScripture",
    ()=>getScripture,
    "getScriptureByMood",
    ()=>getScriptureByMood,
    "getScriptureByOdu",
    ()=>getScriptureByOdu,
    "logScripture",
    ()=>logScripture,
    "seedScripture",
    ()=>seedScripture,
    "updatePerformance",
    ()=>updatePerformance
]);
// In-memory store (would be database in production)
let scriptureLog = [];
function logScripture(oracle) {
    const entry = {
        id: `scripture_${Date.now()}`,
        date: oracle.date,
        oduId: oracle.odu.id,
        astroMood: oracle.astro.mood,
        councilNotes: oracle.council.orunmilaWisdom,
        contentIds: [
            oracle.outputs.sermon.id,
            ...oracle.outputs.shitposts.map((p)=>p.id)
        ],
        performance: {
            engagement: 0,
            sentiment: 'neutral',
            reach: 0
        },
        patternNotes: generatePatternNotes(oracle)
    };
    scriptureLog.push(entry);
    // Sort by date descending
    scriptureLog.sort((a, b)=>b.date.getTime() - a.date.getTime());
    return entry;
}
// Generate pattern notes based on oracle data
function generatePatternNotes(oracle) {
    const patterns = [];
    // Check for Odù patterns
    const recentOdu = scriptureLog.slice(0, 7).map((s)=>s.oduId);
    if (recentOdu.includes(oracle.odu.id)) {
        patterns.push(`Repeating Odù pattern: ${oracle.odu.id}`);
    }
    // Check for astro patterns
    const recentMoods = scriptureLog.slice(0, 7).map((s)=>s.astroMood);
    const moodCount = recentMoods.filter((m)=>m === oracle.astro.mood).length;
    if (moodCount > 2) {
        patterns.push(`Sustained ${oracle.astro.mood} energy (${moodCount} days)`);
    }
    // Orisha affinity pattern
    if (oracle.odu.orishaAffinity.length > 2) {
        patterns.push(`High Orisha convergence: ${oracle.odu.orishaAffinity.join(', ')}`);
    }
    return patterns.join('; ') || 'New pattern emerging';
}
function getScripture() {
    return [
        ...scriptureLog
    ];
}
function getScriptureByOdu(oduId) {
    return scriptureLog.filter((s)=>s.oduId === oduId);
}
function getScriptureByMood(mood) {
    return scriptureLog.filter((s)=>s.astroMood === mood);
}
function updatePerformance(entryId, performance) {
    const entry = scriptureLog.find((s)=>s.id === entryId);
    if (entry) {
        entry.performance = performance;
    }
}
function getPatternAnalysis() {
    const oduCounts = {};
    const moodCounts = {};
    let totalEngagement = 0;
    for (const entry of scriptureLog){
        oduCounts[entry.oduId] = (oduCounts[entry.oduId] || 0) + 1;
        moodCounts[entry.astroMood] = (moodCounts[entry.astroMood] || 0) + 1;
        totalEngagement += entry.performance.engagement;
    }
    const topOdu = Object.entries(oduCounts).map(([oduId, count])=>({
            oduId,
            count
        })).sort((a, b)=>b.count - a.count).slice(0, 5);
    const insights = [];
    // Generate insights
    if (topOdu.length > 0 && topOdu[0].count > 3) {
        insights.push(`The ${topOdu[0].oduId} pattern has appeared ${topOdu[0].count} times. A theme in your current cycle.`);
    }
    const dominantMood = Object.entries(moodCounts).sort((a, b)=>b[1] - a[1])[0];
    if (dominantMood) {
        insights.push(`Your recent content favors ${dominantMood[0].replace('_', ' ')} energy.`);
    }
    if (scriptureLog.length > 14) {
        insights.push('You have completed two weeks of logged oracles. Review your Book of Odù.Content.');
    }
    return {
        topOdu,
        moodDistribution: moodCounts,
        avgEngagement: scriptureLog.length > 0 ? totalEngagement / scriptureLog.length : 0,
        insights
    };
}
function exportScripture(format) {
    switch(format){
        case 'json':
            return JSON.stringify(scriptureLog, null, 2);
        case 'markdown':
            return generateMarkdownScripture();
        case 'txt':
        default:
            return generateTextScripture();
    }
}
function generateMarkdownScripture() {
    const lines = [
        '# The Book of Odù.Content',
        '',
        '> *A record of patterns, oracles, and digital rituals*',
        '',
        `**Total Entries:** ${scriptureLog.length}`,
        `**Last Updated:** ${new Date().toLocaleDateString()}`,
        '',
        '---',
        ''
    ];
    for (const entry of scriptureLog){
        lines.push(`## Entry ${entry.id}`);
        lines.push(`**Date:** ${entry.date.toLocaleDateString()}`);
        lines.push(`**Digital Odù:** ${entry.oduId}`);
        lines.push(`**Astro Mood:** ${entry.astroMood}`);
        lines.push('');
        lines.push('### Council Wisdom');
        lines.push(entry.councilNotes);
        lines.push('');
        lines.push('### Pattern Notes');
        lines.push(entry.patternNotes);
        lines.push('');
        lines.push('### Performance');
        lines.push(`- Engagement: ${entry.performance.engagement}`);
        lines.push(`- Sentiment: ${entry.performance.sentiment}`);
        lines.push(`- Reach: ${entry.performance.reach}`);
        lines.push('');
        lines.push('---');
        lines.push('');
    }
    return lines.join('\n');
}
function generateTextScripture() {
    const lines = [
        '═══════════════════════════════════════════════════════════',
        '           THE BOOK OF ODÙ.CONTENT',
        '           A Digital Scripture Log',
        '═══════════════════════════════════════════════════════════',
        ''
    ];
    for (const entry of scriptureLog){
        lines.push(`[${entry.date.toLocaleDateString()}] Entry: ${entry.id}`);
        lines.push(`Odù: ${entry.oduId}`);
        lines.push(`Mood: ${entry.astroMood}`);
        lines.push('');
        lines.push('Council Wisdom:');
        lines.push(entry.councilNotes);
        lines.push('');
        lines.push('Pattern Notes:');
        lines.push(entry.patternNotes);
        lines.push('');
        lines.push('─'.repeat(50));
        lines.push('');
    }
    return lines.join('\n');
}
function clearScripture() {
    scriptureLog = [];
}
function seedScripture() {
    const sampleEntries = [
        {
            oduId: 'ODU_011',
            astroMood: 'bold_experiment',
            councilNotes: 'The pattern of liberation guides us. Share the knowledge.',
            patternNotes: 'First appearance of ODU_011 in this cycle'
        },
        {
            oduId: 'ODU_022',
            astroMood: 'beauty_polish',
            councilNotes: 'Forge meets flower. Build something beautiful.',
            patternNotes: 'OGUN-OSHUN convergence'
        },
        {
            oduId: 'ODU_033',
            astroMood: 'deep_psychological',
            councilNotes: 'Thunder in the water. Speak the difficult truth.',
            patternNotes: 'High emotional intensity period'
        }
    ];
    const now = Date.now();
    for(let i = 0; i < sampleEntries.length; i++){
        const entry = {
            id: `scripture_seed_${i}`,
            date: new Date(now - i * 86400000),
            oduId: sampleEntries[i].oduId,
            astroMood: sampleEntries[i].astroMood,
            councilNotes: sampleEntries[i].councilNotes,
            contentIds: [],
            performance: {
                engagement: Math.random() * 1000,
                sentiment: [
                    'positive',
                    'neutral',
                    'controversial'
                ][Math.floor(Math.random() * 3)],
                reach: Math.random() * 5000
            },
            patternNotes: sampleEntries[i].patternNotes
        };
        scriptureLog.push(entry);
    }
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/ephemeris.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateAccuratePosition",
    ()=>calculateAccuratePosition,
    "formatTransitData",
    ()=>formatTransitData,
    "getRealTimeTransits",
    ()=>getRealTimeTransits
]);
// ORI.CULT - Real Astronomical Ephemeris Integration
// Using astronomy-engine for accurate planetary positions
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/astronomy-engine/esm/astronomy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$nakshatras$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/nakshatras.ts [app-ssr] (ecmascript)");
;
;
// Planet mapping to astronomy-engine bodies
const PLANET_MAP = {
    'Sun': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Sun,
    'Moon': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Moon,
    'Mercury': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Mercury,
    'Venus': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Venus,
    'Mars': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Mars,
    'Jupiter': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Jupiter,
    'Saturn': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Saturn,
    // Rahu/Ketu calculated as lunar nodes (shadow points)
    'Rahu': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Moon,
    'Ketu': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Moon // Will calculate separately
};
const RASHI_LONGITUDES = {
    'Aries': {
        start: 0,
        end: 30
    },
    'Taurus': {
        start: 30,
        end: 60
    },
    'Gemini': {
        start: 60,
        end: 90
    },
    'Cancer': {
        start: 90,
        end: 120
    },
    'Leo': {
        start: 120,
        end: 150
    },
    'Virgo': {
        start: 150,
        end: 180
    },
    'Libra': {
        start: 180,
        end: 210
    },
    'Scorpio': {
        start: 210,
        end: 240
    },
    'Sagittarius': {
        start: 240,
        end: 270
    },
    'Capricorn': {
        start: 270,
        end: 300
    },
    'Aquarius': {
        start: 300,
        end: 330
    },
    'Pisces': {
        start: 330,
        end: 360
    }
};
function calculateAccuratePosition(planet, date) {
    const astroDate = new Date(date);
    // Get geocentric ecliptic coordinates
    let vector;
    try {
        if (planet === 'Rahu' || planet === 'Ketu') {
            // Calculate lunar nodes (simplified - in production would use proper node calculation)
            const moonPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoVector"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Moon, astroDate, false);
            const sunPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoVector"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Body"].Sun, astroDate, false);
            // Rahu is north node (ascending), Ketu is south (descending)
            // This is simplified - proper calculation requires more complex astronomy
            const longitude = (Math.atan2(moonPos.y, moonPos.x) * 180 / Math.PI + 180) % 360;
            const isKetu = planet === 'Ketu';
            return calculatePositionFromLongitude(planet, isKetu ? (longitude + 180) % 360 : longitude, 0, date);
        }
        vector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoVector"])(PLANET_MAP[planet], astroDate, false);
    } catch (e) {
        // Fallback to rough calculation
        return fallbackPosition(planet, date);
    }
    // Convert to ecliptic longitude/latitude
    const longitude = (Math.atan2(vector.y, vector.x) * 180 / Math.PI + 360) % 360;
    const latitude = Math.atan2(vector.z, Math.sqrt(vector.x ** 2 + vector.y ** 2)) * 180 / Math.PI;
    return calculatePositionFromLongitude(planet, longitude, latitude, date);
}
function calculatePositionFromLongitude(planet, longitude, latitude, date) {
    // Determine sign
    const sign = longitudeToRashi(longitude);
    // Determine nakshatra
    const nakshatraData = longitudeToNakshatra(longitude);
    // Calculate speed (retrograde check)
    const speed = calculateSpeed(planet, date);
    const isRetrograde = speed < 0;
    // Determine dignity
    const dignity = calculateDignity(planet, sign);
    return {
        planet,
        longitude,
        latitude,
        speed,
        isRetrograde,
        sign,
        nakshatra: nakshatraData.nakshatra,
        nakshatraPada: nakshatraData.pada,
        dignity
    };
}
function longitudeToRashi(longitude) {
    const normalized = longitude % 360;
    for (const [sign, range] of Object.entries(RASHI_LONGITUDES)){
        if (normalized >= range.start && normalized < range.end) {
            return sign;
        }
    }
    return 'Aries';
}
function longitudeToNakshatra(longitude) {
    // Each nakshatra is 13°20' (13.333... degrees)
    const nakshatraDegree = 13 + 1 / 3;
    const index = Math.floor(longitude / nakshatraDegree) % 27;
    const positionInNakshatra = longitude % nakshatraDegree;
    const pada = Math.floor(positionInNakshatra / (nakshatraDegree / 4)) + 1;
    return {
        nakshatra: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$nakshatras$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAKSHATRAS"][index],
        pada: Math.min(4, Math.max(1, pada))
    };
}
function calculateSpeed(planet, date) {
    // Calculate speed by comparing positions 24 hours apart
    const dayMs = 24 * 60 * 60 * 1000;
    const pos1 = calculateRawLongitude(planet, new Date(date.getTime() - dayMs));
    const pos2 = calculateRawLongitude(planet, new Date(date.getTime() + dayMs));
    let diff = pos2 - pos1;
    // Handle 0/360 wraparound
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    return diff / 2; // degrees per day
}
function calculateRawLongitude(planet, date) {
    if (planet === 'Rahu' || planet === 'Ketu') {
        // Simplified node calculation
        const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
        const rahuBase = dayOfYear * 0.053 % 360; // Rahu moves ~19° per year retrograde
        return planet === 'Rahu' ? rahuBase : (rahuBase + 180) % 360;
    }
    try {
        const vector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoVector"])(PLANET_MAP[planet], date, false);
        return (Math.atan2(vector.y, vector.x) * 180 / Math.PI + 360) % 360;
    } catch (e) {
        return fallbackPosition(planet, date).longitude;
    }
}
function calculateDignity(planet, sign) {
    // Simplified dignity calculation
    const planetDignities = {
        'Sun': {
            exalted: 'Aries',
            own: [
                'Leo'
            ],
            debilitated: 'Libra'
        },
        'Moon': {
            exalted: 'Taurus',
            own: [
                'Cancer'
            ],
            debilitated: 'Scorpio'
        },
        'Mars': {
            exalted: 'Capricorn',
            own: [
                'Aries',
                'Scorpio'
            ],
            debilitated: 'Cancer'
        },
        'Mercury': {
            exalted: 'Virgo',
            own: [
                'Gemini',
                'Virgo'
            ],
            debilitated: 'Pisces'
        },
        'Jupiter': {
            exalted: 'Cancer',
            own: [
                'Sagittarius',
                'Pisces'
            ],
            debilitated: 'Capricorn'
        },
        'Venus': {
            exalted: 'Pisces',
            own: [
                'Taurus',
                'Libra'
            ],
            debilitated: 'Virgo'
        },
        'Saturn': {
            exalted: 'Libra',
            own: [
                'Capricorn',
                'Aquarius'
            ],
            debilitated: 'Aries'
        },
        'Rahu': {
            exalted: 'Gemini',
            own: [],
            debilitated: 'Sagittarius'
        },
        'Ketu': {
            exalted: 'Sagittarius',
            own: [],
            debilitated: 'Gemini'
        }
    };
    const dignities = planetDignities[planet];
    if (!dignities) return 'neutral';
    if (sign === dignities.exalted) return 'exalted';
    if (sign === dignities.debilitated) return 'debilitated';
    if (dignities.own?.includes(sign)) return 'own';
    return 'neutral';
}
function fallbackPosition(planet, date) {
    // Rough fallback calculation
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const orbitalPeriods = {
        'Moon': 27.3,
        'Mercury': 88,
        'Venus': 225,
        'Sun': 365.25,
        'Mars': 687,
        'Jupiter': 4333,
        'Saturn': 10759,
        'Rahu': -6793,
        'Ketu': -6793 // Retrograde
    };
    const period = orbitalPeriods[planet];
    const longitude = dayOfYear / Math.abs(period) * 360 % 360;
    const isRetrograde = period < 0;
    return calculatePositionFromLongitude(planet, longitude, 0, date);
}
function getRealTimeTransits(date = new Date()) {
    const planets = [
        'Sun',
        'Moon',
        'Mercury',
        'Venus',
        'Mars',
        'Jupiter',
        'Saturn',
        'Rahu',
        'Ketu'
    ];
    const positions = planets.map((p)=>calculateAccuratePosition(p, date));
    // Calculate moon phase
    const sunPos = positions.find((p)=>p.planet === 'Sun')?.longitude || 0;
    const moonPos = positions.find((p)=>p.planet === 'Moon')?.longitude || 0;
    const moonPhase = (moonPos - sunPos + 360) % 360 / 360;
    // Find retrograde planets
    const retrogradePlanets = positions.filter((p)=>p.isRetrograde).map((p)=>p.planet);
    // Find combustion (within 15° of sun)
    const combustionPlanets = positions.filter((p)=>{
        if (p.planet === 'Sun' || p.planet === 'Moon') return false;
        const diff = Math.abs(p.longitude - sunPos);
        return diff < 15 || diff > 345;
    }).map((p)=>p.planet);
    // Check for planetary war (Graha Yuddha) - planets within 1°
    const war = [];
    for(let i = 0; i < positions.length; i++){
        for(let j = i + 1; j < positions.length; j++){
            const diff = Math.abs(positions[i].longitude - positions[j].longitude);
            if (diff < 1 || diff > 359) {
                war.push(positions[i].planet, positions[j].planet);
            }
        }
    }
    // Check Saturn conditions
    const saturnPos = positions.find((p)=>p.planet === 'Saturn');
    const moonSign = positions.find((p)=>p.planet === 'Moon')?.sign;
    const saadeSati = saturnPos && moonSign ? checkSaadeSati(saturnPos.sign, moonSign) : false;
    return {
        date,
        positions,
        moonPhase,
        moonIllumination: moonPhase <= 0.5 ? moonPhase * 2 : (1 - moonPhase) * 2,
        isEclipse: checkForEclipse(date),
        retrogradePlanets,
        combustionPlanets,
        war: [
            ...new Set(war)
        ],
        stationaryPlanets: positions.filter((p)=>Math.abs(p.speed) < 0.1).map((p)=>p.planet),
        saadeSati,
        kantakaShani: false,
        ashtamaShani: false // Would need natal chart
    };
}
function checkSaadeSati(saturnSign, moonSign) {
    const signs = [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces'
    ];
    const saturnIdx = signs.indexOf(saturnSign);
    const moonIdx = signs.indexOf(moonSign);
    // Saade Sati when Saturn is in same sign, 12th, or 2nd from Moon
    const diff = (saturnIdx - moonIdx + 12) % 12;
    return diff === 0 || diff === 1 || diff === 11;
}
function checkForEclipse(date) {
    // Simplified eclipse check - would need proper saros cycle calculation
    const moonPhase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$astronomy$2d$engine$2f$esm$2f$astronomy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MoonPhase"])(date);
    // Eclipses happen near new moon (solar) or full moon (lunar)
    return moonPhase < 0.02 || moonPhase > 0.48;
}
function formatTransitData(data) {
    const lines = [
        `🌙 Moon Phase: ${(data.moonPhase * 100).toFixed(1)}% (${getMoonPhaseName(data.moonPhase)})`,
        `☀️ Sun: ${data.positions.find((p)=>p.planet === 'Sun')?.sign}`,
        `🌕 Moon: ${data.positions.find((p)=>p.planet === 'Moon')?.nakshatra.name} ${data.positions.find((p)=>p.planet === 'Moon')?.nakshatraPada}`,
        `📍 Retrograde: ${data.retrogradePlanets.join(', ') || 'None'}`
    ];
    if (data.isEclipse) lines.push('🌑 ECLIPSE ACTIVE');
    if (data.saadeSati) lines.push('🪐 Saade Sati Period');
    if (data.war.length > 0) lines.push(`⚔️ Planetary War: ${data.war.join(', ')}`);
    return lines.join('\n');
}
function getMoonPhaseName(phase) {
    if (phase < 0.02) return 'New Moon';
    if (phase < 0.23) return 'Waxing Crescent';
    if (phase < 0.27) return 'First Quarter';
    if (phase < 0.48) return 'Waxing Gibbous';
    if (phase < 0.52) return 'Full Moon';
    if (phase < 0.73) return 'Waning Gibbous';
    if (phase < 0.77) return 'Last Quarter';
    if (phase < 0.98) return 'Waning Crescent';
    return 'New Moon';
}
;
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/financialAstrology.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Financial Astrology Module
// Mundane astrology applied to markets and economics
__turbopack_context__.s([
    "generateFinancialReading",
    ()=>generateFinancialReading
]);
// Sector rulerships in financial astrology
const SECTOR_RULERSHIPS = {
    'Technology': [
        'Mercury',
        'Rahu'
    ],
    'Banking/Finance': [
        'Jupiter',
        'Venus'
    ],
    'Energy/Oil': [
        'Mars',
        'Saturn'
    ],
    'Healthcare/Pharma': [
        'Sun',
        'Jupiter'
    ],
    'Real Estate': [
        'Moon',
        'Venus'
    ],
    'Transportation': [
        'Mercury',
        'Mars'
    ],
    'Agriculture': [
        'Moon',
        'Saturn'
    ],
    'Mining/Metals': [
        'Saturn',
        'Mars'
    ],
    'Entertainment/Media': [
        'Venus',
        'Moon'
    ],
    'Defense': [
        'Mars',
        'Saturn'
    ],
    'Cryptocurrency': [
        'Rahu',
        'Mercury'
    ],
    'ESG/Green': [
        'Jupiter',
        'Venus'
    ]
};
// Asset class rulerships
const ASSET_RULERSHIPS = {
    'Stocks/Equities': [
        'Sun',
        'Jupiter'
    ],
    'Bonds/Fixed Income': [
        'Saturn',
        'Venus'
    ],
    'Gold/Precious Metals': [
        'Sun',
        'Jupiter'
    ],
    'Silver': [
        'Moon',
        'Venus'
    ],
    'Oil/Energy': [
        'Mars',
        'Saturn'
    ],
    'Real Estate': [
        'Moon',
        'Venus'
    ],
    'Cryptocurrency': [
        'Rahu',
        'Mercury'
    ],
    'Forex': [
        'Mercury',
        'Moon'
    ],
    'Commodities': [
        'Mars',
        'Jupiter'
    ]
};
function generateFinancialReading(transits) {
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    const mercury = transits.positions.find((p)=>p.planet === 'Mercury');
    const mars = transits.positions.find((p)=>p.planet === 'Mars');
    const venus = transits.positions.find((p)=>p.planet === 'Venus');
    // Determine overall outlook
    const overallOutlook = calculateOverallOutlook(transits);
    // Generate sector readings
    const keySectors = generateSectorReadings(transits);
    // Generate asset readings
    const assetClasses = generateAssetReadings(transits);
    // Major indicators
    const majorIndicators = {
        jupiterSaturn: interpretJupiterSaturn(jupiter, saturn),
        mercuryRetrograde: interpretMercuryForFinance(mercury),
        moonNodes: interpretNodesForFinance(transits),
        eclipses: interpretEclipsesForFinance(transits)
    };
    return {
        timestamp: new Date(),
        overallOutlook,
        confidence: calculateFinancialConfidence(transits),
        keySectors,
        assetClasses,
        majorIndicators,
        warnings: generateFinancialWarnings(transits),
        opportunities: generateFinancialOpportunities(transits),
        criticalDates: calculateCriticalDates(transits)
    };
}
function calculateOverallOutlook(transits) {
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    const mars = transits.positions.find((p)=>p.planet === 'Mars');
    let score = 0;
    // Jupiter in good dignity is bullish
    if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') score += 2;
    if (jupiter?.dignity === 'debilitated') score -= 2;
    // Saturn in good dignity is stable but restrictive
    if (saturn?.dignity === 'exalted' || saturn?.dignity === 'own') score -= 1;
    if (saturn?.dignity === 'debilitated') score += 1; // Actually bullish short term
    // Mars adds volatility
    if (mars?.isRetrograde) score -= 1;
    // Multiple retrogrades = confusion/volatility
    if (transits.retrogradePlanets.length >= 3) score -= 1;
    // Eclipses bring uncertainty
    if (transits.isEclipse) score -= 1;
    if (score >= 2) return 'bullish';
    if (score <= -2) return 'bearish';
    if (transits.retrogradePlanets.length >= 2 || transits.isEclipse) return 'volatile';
    return 'stable';
}
function generateSectorReadings(transits) {
    const sectors = [];
    for (const [sector, rulers] of Object.entries(SECTOR_RULERSHIPS)){
        // Map generic planets to our known planets
        const knownRulers = rulers.filter((r)=>[
                'Sun',
                'Moon',
                'Mercury',
                'Venus',
                'Mars',
                'Jupiter',
                'Saturn',
                'Rahu',
                'Ketu'
            ].includes(r));
        if (knownRulers.length === 0) continue;
        const planetPositions = knownRulers.map((r)=>transits.positions.find((p)=>p.planet === r)).filter(Boolean);
        const outlook = calculateSectorOutlook(planetPositions);
        const analysis = generateSectorAnalysis(sector, planetPositions, transits);
        const keyTransits = extractKeyTransits(planetPositions);
        sectors.push({
            sector,
            rulingPlanets: knownRulers,
            outlook,
            analysis,
            keyTransits
        });
    }
    // Sort by outlook strength
    const outlookOrder = {
        'strong': 3,
        'stable': 2,
        'volatile': 1,
        'weak': 0
    };
    return sectors.sort((a, b)=>outlookOrder[b.outlook] - outlookOrder[a.outlook]).slice(0, 6);
}
function calculateSectorOutlook(positions) {
    let score = 0;
    for (const pos of positions){
        if (pos.dignity === 'exalted' || pos.dignity === 'own') score += 1;
        if (pos.dignity === 'debilitated') score -= 1;
        if (pos.isRetrograde) score -= 0.5;
    }
    if (score >= 1) return 'strong';
    if (score <= -1) return 'weak';
    if (positions.some((p)=>p.isRetrograde)) return 'volatile';
    return 'stable';
}
function generateSectorAnalysis(sector, positions, transits) {
    const primaryPlanet = positions[0];
    if (!primaryPlanet) return `Mixed signals for ${sector}`;
    const analyses = {
        'Technology': {
            'Mercury': `Mercury in ${primaryPlanet.sign} ${primaryPlanet.isRetrograde ? 'retrograde suggests review of tech infrastructure' : 'direct favors innovation'}.`,
            'Jupiter': `Jupiter's expansion blesses tech valuations.`
        },
        'Banking/Finance': {
            'Jupiter': `Jupiter in ${primaryPlanet.sign} ${primaryPlanet.dignity === 'exalted' ? 'exalted suggests banking renaissance' : 'indicates regulatory expansion'}.`,
            'Saturn': `Saturn brings structural tests to financial institutions.`
        },
        'Energy/Oil': {
            'Mars': `Mars ${primaryPlanet.isRetrograde ? 'retrograde demands review of energy strategies' : 'direct supports new energy initiatives'}.`,
            'Saturn': `Saturn in ${primaryPlanet.sign} constrains traditional energy.`
        },
        'Cryptocurrency': {
            'Mercury': `Mercury's volatility mirrors crypto markets.`,
            'Rahu': `Rahu's shadow amplifies speculation and sudden moves.`
        }
    };
    return analyses[sector]?.[primaryPlanet.planet] || `${primaryPlanet.planet} in ${primaryPlanet.sign} creates ${primaryPlanet.isRetrograde ? 'revisionary' : 'progressive'} conditions for ${sector.toLowerCase()}.`;
}
function extractKeyTransits(positions) {
    return positions.map((pos)=>{
        if (pos.isRetrograde) return `${pos.planet} retrograde in ${pos.sign}`;
        if (pos.dignity === 'exalted') return `${pos.planet} exalted in ${pos.sign}`;
        if (pos.dignity === 'debilitated') return `${pos.planet} debilitated in ${pos.sign}`;
        return `${pos.planet} in ${pos.sign}`;
    });
}
function generateAssetReadings(transits) {
    const assets = [];
    for (const [asset, rulers] of Object.entries(ASSET_RULERSHIPS)){
        const knownRulers = rulers.filter((r)=>[
                'Sun',
                'Moon',
                'Mercury',
                'Venus',
                'Mars',
                'Jupiter',
                'Saturn',
                'Rahu',
                'Ketu'
            ].includes(r));
        if (knownRulers.length === 0) continue;
        const positions = knownRulers.map((r)=>transits.positions.find((p)=>p.planet === r)).filter(Boolean);
        const trend = calculateAssetTrend(positions);
        const analysis = generateAssetAnalysis(asset, positions);
        assets.push({
            asset,
            rulingPlanets: knownRulers,
            trend,
            analysis,
            supportResistance: calculateSupportResistance(asset, positions, transits)
        });
    }
    return assets.slice(0, 5);
}
function calculateAssetTrend(positions) {
    let bullish = 0;
    let bearish = 0;
    for (const pos of positions){
        if (pos.dignity === 'exalted' || pos.dignity === 'own') bullish++;
        if (pos.dignity === 'debilitated' || pos.dignity === 'enemy') bearish++;
        if (pos.isRetrograde) return 'volatile';
    }
    if (bullish > bearish) return 'up';
    if (bearish > bullish) return 'down';
    return 'sideways';
}
function generateAssetAnalysis(asset, positions) {
    const analyses = {
        'Stocks/Equities': positions.some((p)=>p.planet === 'Jupiter' && !p.isRetrograde) ? 'Jupiter supports equity expansion' : 'Saturn constrains equity growth',
        'Gold/Precious Metals': positions.some((p)=>p.planet === 'Sun' && p.dignity === 'exalted') ? 'Solar strength illuminates gold' : 'Lunar cycles affect precious metals',
        'Cryptocurrency': positions.some((p)=>p.planet === 'Mercury' && p.isRetrograde) ? 'Mercury retrograde warns crypto volatility' : 'Innovation cycles favor digital assets',
        'Real Estate': positions.some((p)=>p.planet === 'Venus' && p.dignity === 'own') ? 'Venus supports property values' : 'Moon cycles affect housing sentiment'
    };
    return analyses[asset] || `${positions[0]?.planet} positioning suggests monitoring ${asset.toLowerCase()}`;
}
function calculateSupportResistance(asset, positions, transits) {
    // This would integrate with actual price data in production
    // For now, provide astrological support/resistance levels
    const moon = transits.positions.find((p)=>p.planet === 'Moon');
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    return {
        support: `${saturn?.sign} ${Math.floor(saturn?.longitude || 0)}° (Saturn level)`,
        resistance: `Next ${moon?.nakshatra.name} transition`
    };
}
function interpretJupiterSaturn(jupiter, saturn) {
    if (!jupiter || !saturn) return 'Insufficient data';
    const diff = Math.abs(jupiter.longitude - saturn.longitude);
    const conjunction = diff < 10 || diff > 350;
    if (conjunction) {
        return `GREAT CONJUNCTION: 20-year cycle of social restructuring. ${jupiter.sign} conjunction favors ${getElement(jupiter.sign)} domain expansion with discipline.`;
    }
    if (diff < 60) {
        return 'Jupiter approaching Saturn: Expansion meets restriction. Markets test resistance.';
    }
    if (diff > 120 && diff < 180) {
        return 'Jupiter-Saturn trine: Growth with stability possible.';
    }
    if (diff > 170 && diff < 190) {
        return 'Jupiter opposite Saturn: Tension between growth and contraction. Volatile markets.';
    }
    return `Jupiter in ${jupiter.sign}, Saturn in ${saturn.sign}: Mixed signals for expansion.`;
}
function interpretMercuryForFinance(mercury) {
    if (!mercury) return 'Mercury position unknown';
    if (mercury.isRetrograde) {
        return `MERCURY RETROGRADE in ${mercury.sign}: Review contracts. Technical glitches affect trading. Past financial decisions revisited.`;
    }
    if (mercury.dignity === 'exalted') {
        return `Mercury exalted in ${mercury.sign}: Clear communication favors transparent markets.`;
    }
    return `Mercury direct in ${mercury.sign}: Trading flows normally.`;
}
function interpretNodesForFinance(transits) {
    const rahu = transits.positions.find((p)=>p.planet === 'Rahu');
    const ketu = transits.positions.find((p)=>p.planet === 'Ketu');
    if (!rahu || !ketu) return 'Nodal positions unknown';
    return `Rahu in ${rahu.sign} amplifies speculative bubbles. Ketu in ${ketu.sign} dissolves outdated financial structures.`;
}
function interpretEclipsesForFinance(transits) {
    if (!transits.isEclipse) return 'No active eclipse';
    return `ECLIPSE SEASON: Shadow markets revealed. Sudden reversals possible. Avoid major financial decisions near eclipses.`;
}
function generateFinancialWarnings(transits) {
    const warnings = [];
    if (transits.retrogradePlanets.includes('Mercury')) {
        warnings.push('Mercury retrograde: Verify all financial contracts twice');
    }
    if (transits.retrogradePlanets.includes('Mars')) {
        warnings.push('Mars retrograde: Avoid aggressive trading strategies');
    }
    if (transits.isEclipse) {
        warnings.push('Eclipse season: Major reversals possible in markets');
    }
    if (transits.saadeSati) {
        warnings.push('Saade Sati: Long-term tests of financial foundations');
    }
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    if (saturn?.dignity === 'exalted') {
        warnings.push('Exalted Saturn: Restrictive policies may slow markets');
    }
    return warnings;
}
function generateFinancialOpportunities(transits) {
    const opportunities = [];
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') {
        opportunities.push(`Jupiter strong in ${jupiter.sign}: Growth sectors favor expansion`);
    }
    const venus = transits.positions.find((p)=>p.planet === 'Venus');
    if (venus?.dignity === 'own') {
        opportunities.push('Venus in own sign: Luxury and beauty sectors thrive');
    }
    if (transits.positions.find((p)=>p.planet === 'Sun')?.dignity === 'exalted') {
        opportunities.push('Exalted Sun: Leadership and authority sectors strengthen');
    }
    if (!transits.retrogradePlanets.includes('Mercury')) {
        opportunities.push('Mercury direct: Clear communication favors trading');
    }
    return opportunities;
}
function calculateCriticalDates(transits) {
    const dates = [];
    const now = new Date();
    // Moon enters critical nakshatras
    dates.push(new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000)); // +3 days
    dates.push(new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)); // +7 days
    dates.push(new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000)); // +14 days
    return dates;
}
function calculateFinancialConfidence(transits) {
    let confidence = 0.7;
    // Retrogrades reduce confidence
    confidence -= transits.retrogradePlanets.length * 0.05;
    // Eclipses reduce confidence
    if (transits.isEclipse) confidence -= 0.1;
    // Jupiter strong increases confidence
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') {
        confidence += 0.1;
    }
    return Math.max(0.5, Math.min(0.9, confidence));
}
function getElement(sign) {
    const elements = {
        'Aries': 'fire',
        'Leo': 'fire',
        'Sagittarius': 'fire',
        'Taurus': 'earth',
        'Virgo': 'earth',
        'Capricorn': 'earth',
        'Gemini': 'air',
        'Libra': 'air',
        'Aquarius': 'air',
        'Cancer': 'water',
        'Scorpio': 'water',
        'Pisces': 'water'
    };
    return elements[sign] || 'mixed';
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/politicalAstrology.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Political/Mundane Astrology Module
// Astrological analysis of world politics and governance
__turbopack_context__.s([
    "formatPoliticalReading",
    ()=>formatPoliticalReading,
    "generatePoliticalReading",
    ()=>generatePoliticalReading
]);
// Regions and their astrological associations
const REGION_RULERSHIPS = {
    'United States': [
        'Gemini',
        'Cancer',
        'Sagittarius'
    ],
    'China': [
        'Libra',
        'Aquarius'
    ],
    'Russia': [
        'Aquarius',
        'Leo'
    ],
    'EU': [
        'Libra',
        'Capricorn'
    ],
    'India': [
        'Cancer',
        'Capricorn'
    ],
    'Middle East': [
        'Leo',
        'Scorpio'
    ],
    'Africa': [
        'Libra',
        'Virgo'
    ],
    'Latin America': [
        'Sagittarius',
        'Pisces'
    ],
    'Southeast Asia': [
        'Gemini',
        'Virgo'
    ]
};
function generatePoliticalReading(transits, odu) {
    return {
        timestamp: new Date(),
        overallStability: calculateOverallStability(transits),
        globalTrends: identifyGlobalTrends(transits),
        regionalAnalysis: analyzeRegions(transits),
        powerStructures: analyzePowerStructures(transits),
        conflictZones: identifyConflictZones(transits),
        majorPowers: analyzeMajorPowers(transits),
        criticalPeriods: calculateCriticalPeriods(transits),
        predictions: generatePoliticalPredictions(transits, odu)
    };
}
function calculateOverallStability(transits) {
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    const mars = transits.positions.find((p)=>p.planet === 'Mars');
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    let stability = 0;
    // Saturn in Capricorn/Aquarius (its own) = structural stability but restriction
    if (saturn?.sign === 'Capricorn' || saturn?.sign === 'Aquarius') {
        stability -= 1; // Authoritarian trends
    }
    // Mars retrograde = conflicts stall but don't resolve
    if (mars?.isRetrograde) stability -= 1;
    // Jupiter strong = diplomatic solutions possible
    if (jupiter?.dignity === 'exalted' || jupiter?.dignity === 'own') {
        stability += 1;
    }
    // Multiple retrogrades = confusion
    if (transits.retrogradePlanets.length >= 3) stability -= 2;
    // Eclipses = sudden changes
    if (transits.isEclipse) stability -= 1;
    // Uranus transits (simulated through Saturn-Uranus squares if we had Uranus)
    if (stability <= -3) return 'volatile';
    if (stability <= -1) return 'unstable';
    if (stability >= 2) return 'stable';
    return 'transformational';
}
function identifyGlobalTrends(transits) {
    const trends = [];
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    const mars = transits.positions.find((p)=>p.planet === 'Mars');
    const mercury = transits.positions.find((p)=>p.planet === 'Mercury');
    // Jupiter-Saturn cycle (Great Conjunction aftermath)
    if (saturn && jupiter) {
        const diff = Math.abs(saturn.longitude - jupiter.longitude);
        if (diff < 30 || diff > 330) {
            trends.push({
                theme: 'Social Restructuring',
                drivingPlanets: [
                    'Jupiter',
                    'Saturn'
                ],
                description: '20-year cycle of institutional transformation. Old structures replaced by new paradigms.',
                intensity: 'high',
                duration: 'Through 2024-2025'
            });
        }
    }
    // Saturn in Aquarius = technological authoritarianism
    if (saturn?.sign === 'Aquarius') {
        trends.push({
            theme: 'Technocratic Governance',
            drivingPlanets: [
                'Saturn'
            ],
            description: 'Technology used for social control. Surveillance states expand. Digital currencies advance.',
            intensity: 'high',
            duration: 'While Saturn in Aquarius'
        });
    }
    // Mars-Jupiter = expansion of conflict
    if (mars && jupiter) {
        const diff = Math.abs(mars.longitude - jupiter.longitude);
        if (diff < 15 || diff > 345) {
            trends.push({
                theme: 'Military Expansion',
                drivingPlanets: [
                    'Mars',
                    'Jupiter'
                ],
                description: 'Conflicts escalate rapidly. Military posturing increases. Arms races accelerate.',
                intensity: 'extreme',
                duration: 'Until Mars separates from Jupiter'
            });
        }
    }
    // Mercury retrograde = communication breakdowns
    if (mercury?.isRetrograde) {
        trends.push({
            theme: 'Information Warfare',
            drivingPlanets: [
                'Mercury'
            ],
            description: 'Disinformation campaigns intensify. Communication breakdowns between nations.',
            intensity: 'moderate',
            duration: 'Mercury retrograde period'
        });
    }
    // Rahu-Ketu = karmic reckoning
    const rahu = transits.positions.find((p)=>p.planet === 'Rahu');
    if (rahu?.sign === 'Aries' || rahu?.sign === 'Taurus') {
        trends.push({
            theme: 'Karmic Reckoning',
            drivingPlanets: [
                'Rahu',
                'Ketu'
            ],
            description: 'Consequences of past actions manifest. Collective shadow emerges to be healed.',
            intensity: 'high',
            duration: '18-month nodal cycle'
        });
    }
    // Transformation themes (through Saturn-Ketu correlation)
    if (saturn?.sign === 'Capricorn') {
        trends.push({
            theme: 'Death and Rebirth of Authority',
            drivingPlanets: [
                'Saturn',
                'Rahu'
            ],
            description: 'Old power structures crumble. New authorities emerge from crisis.',
            intensity: 'extreme',
            duration: 'Saturn-Ketu transformation period'
        });
    }
    return trends;
}
function analyzeRegions(transits) {
    const regions = [];
    for (const [region, rashis] of Object.entries(REGION_RULERSHIPS)){
        // Find planets in these rashis
        const planetsInRegion = transits.positions.filter((p)=>rashis.includes(p.sign));
        if (planetsInRegion.length === 0) continue;
        const stability = calculateRegionalStability(planetsInRegion);
        const outlook = generateRegionalOutlook(region, planetsInRegion);
        regions.push({
            region,
            rashiAssociation: rashis[0],
            planets: planetsInRegion,
            outlook,
            stability
        });
    }
    return regions.sort((a, b)=>{
        const stabilityOrder = {
            'critical': 0,
            'unstable': 1,
            'stable': 2
        };
        return stabilityOrder[a.stability] - stabilityOrder[b.stability];
    }).slice(0, 6);
}
function calculateRegionalStability(planets) {
    let score = 0;
    for (const p of planets){
        if (p.planet === 'Saturn' && (p.dignity === 'exalted' || p.dignity === 'own')) score -= 1;
        if (p.planet === 'Mars' && p.isRetrograde) score -= 1;
        if (p.planet === 'Jupiter' && !p.isRetrograde) score += 1;
        if (p.isRetrograde) score -= 0.5;
    }
    if (score <= -2) return 'critical';
    if (score <= -0.5) return 'unstable';
    return 'stable';
}
function generateRegionalOutlook(region, planets) {
    const primaryPlanet = planets[0];
    if (!primaryPlanet) return `No major planetary activity in ${region}`;
    const outlooks = {
        'United States': {
            'Saturn': 'Structural tests to democratic institutions.',
            'Rahu': 'Shadow transformation of power structures.',
            'Jupiter': 'Expansionary policies favor growth.',
            'default': 'Mixed planetary influences suggest adaptability.'
        },
        'China': {
            'Saturn': 'Authority consolidates. Long-term planning emphasized.',
            'Jupiter': 'Economic expansion despite challenges.',
            'default': 'Strategic positioning in global power shifts.'
        },
        'Russia': {
            'Mars': 'Military posturing intensifies.',
            'Saturn': 'Isolationist tendencies strengthen.',
            'default': 'Defensive posture in geopolitical arena.'
        },
        'EU': {
            'Jupiter': 'Integration efforts expand despite friction.',
            'Saturn': 'Restrictive policies challenge unity.',
            'default': 'Balancing national vs collective interests.'
        },
        'Middle East': {
            'Mars': 'Regional conflicts escalate.',
            'Saturn': 'Old orders face structural challenges.',
            'default': 'Complex power dynamics persist.'
        }
    };
    return outlooks[region]?.[primaryPlanet.planet] || outlooks[region]?.['default'] || `${primaryPlanet.planet} in ${primaryPlanet.sign} brings ${primaryPlanet.isRetrograde ? 'revision' : 'new developments'} to ${region}.`;
}
function analyzePowerStructures(transits) {
    const structures = [
        {
            institution: 'United Nations',
            rulingPlanets: [
                'Jupiter',
                'Venus'
            ],
            condition: transits.positions.find((p)=>p.planet === 'Jupiter')?.isRetrograde ? 'challenged' : 'strong',
            analysis: interpretUNCondition(transits)
        },
        {
            institution: 'Global Financial System',
            rulingPlanets: [
                'Jupiter',
                'Saturn',
                'Venus'
            ],
            condition: transits.positions.find((p)=>p.planet === 'Saturn')?.sign === 'Aquarius' ? 'transforming' : 'strong',
            analysis: interpretFinancialSystem(transits)
        },
        {
            institution: 'Military Alliances',
            rulingPlanets: [
                'Mars',
                'Saturn'
            ],
            condition: transits.positions.find((p)=>p.planet === 'Mars')?.isRetrograde ? 'weakened' : 'strong',
            analysis: interpretMilitaryAlliances(transits)
        },
        {
            institution: 'Media/Information Systems',
            rulingPlanets: [
                'Mercury'
            ],
            condition: transits.positions.find((p)=>p.planet === 'Mercury')?.isRetrograde ? 'challenged' : 'strong',
            analysis: interpretMediaSystems(transits)
        }
    ];
    return structures;
}
function interpretUNCondition(transits) {
    const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
    if (jupiter?.isRetrograde) {
        return 'Jupiter retrograde challenges diplomatic solutions. International cooperation faces obstacles.';
    }
    if (jupiter?.dignity === 'exalted') {
        return 'Exalted Jupiter supports expanded international cooperation.';
    }
    return 'Diplomatic efforts proceed with mixed results.';
}
function interpretFinancialSystem(transits) {
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    if (saturn?.sign === 'Aquarius') {
        return 'Saturn in Aquarius transforms financial structures. Digital currencies gain legitimacy.';
    }
    return 'Traditional financial systems face gradual evolution.';
}
function interpretMilitaryAlliances(transits) {
    const mars = transits.positions.find((p)=>p.planet === 'Mars');
    if (mars?.isRetrograde) {
        return 'Mars retrograde stalls military actions. Alliances reconsider commitments.';
    }
    if (mars?.dignity === 'exalted') {
        return 'Mars strong suggests military readiness and potential escalation.';
    }
    return 'Military alliances maintain status quo with underlying tensions.';
}
function interpretMediaSystems(transits) {
    const mercury = transits.positions.find((p)=>p.planet === 'Mercury');
    if (mercury?.isRetrograde) {
        return 'Mercury retrograde disrupts information flow. Misinformation campaigns intensify.';
    }
    return 'Information systems function with normal levels of distortion.';
}
function identifyConflictZones(transits) {
    const conflicts = [];
    const mars = transits.positions.find((p)=>p.planet === 'Mars');
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    // Mars-Saturn conjunction or opposition = major conflict
    if (mars && saturn) {
        const diff = Math.abs(mars.longitude - saturn.longitude);
        if (diff < 10 || diff > 350 || diff > 170 && diff < 190) {
            conflicts.push({
                type: 'Military Escalation',
                astrologicalSignatures: [
                    'Mars-Saturn hard aspect'
                ],
                risk: 'critical',
                description: 'Mars-Saturn alignment indicates major military actions. Old conflicts reignite.'
            });
        }
    }
    // Mars in specific signs
    if (mars?.sign === 'Aries' || mars?.sign === 'Scorpio') {
        conflicts.push({
            type: 'Regional Tensions',
            location: mars.sign === 'Aries' ? 'Middle East/North Africa' : 'Eastern Europe/Asia',
            astrologicalSignatures: [
                `Mars in ${mars.sign}`
            ],
            risk: mars.isRetrograde ? 'high' : 'moderate',
            description: `Mars in ${mars.sign} ${mars.isRetrograde ? 'retrograde suggests simmering' : 'indicates active'} conflicts.`
        });
    }
    // Eclipse season = sudden developments
    if (transits.isEclipse) {
        conflicts.push({
            type: 'Unexpected Developments',
            astrologicalSignatures: [
                'Eclipse season'
            ],
            risk: 'high',
            description: 'Eclipse shadows reveal hidden conflicts. Sudden escalations or resolutions possible.'
        });
    }
    return conflicts;
}
function analyzeMajorPowers(transits) {
    // Simplified analysis - would use actual national charts in production
    return [
        {
            nation: 'United States',
            chartFactors: [
                'Nodal return',
                'Saturn opposition'
            ],
            currentTransits: [
                'Testing of institutions',
                'Generational transformation'
            ],
            outlook: 'Deep structural transformation ongoing. Power struggles intensify.',
            leadership: 'challenged'
        },
        {
            nation: 'China',
            chartFactors: [
                'Saturn return cycles',
                'Jupiter expansion'
            ],
            currentTransits: [
                'Authority consolidation',
                'Economic restructuring'
            ],
            outlook: 'Long-term planning pays off despite global headwinds.',
            leadership: 'stable'
        },
        {
            nation: 'Russia',
            chartFactors: [
                'Saturn in Aquarius',
                'Uranian disruption'
            ],
            currentTransits: [
                'Isolationist phase',
                'Military posturing'
            ],
            outlook: 'Defensive stance hardens. Regional influence contested.',
            leadership: 'stable'
        },
        {
            nation: 'European Union',
            chartFactors: [
                'Jupiter-Saturn',
                'Nodal shifts'
            ],
            currentTransits: [
                'Integration tests',
                'Economic coordination'
            ],
            outlook: 'Unity challenged by centrifugal forces. Core holds.',
            leadership: 'challenged'
        }
    ];
}
function calculateCriticalPeriods(transits) {
    const periods = [];
    const now = new Date();
    // Station points (when planets go retrograde or direct)
    transits.stationaryPlanets.forEach((planet)=>{
        periods.push({
            date: now,
            description: `${planet} stationary - direction change brings reversals`,
            planets: [
                planet
            ],
            severity: 'significant'
        });
    });
    // Upcoming critical dates
    periods.push({
        date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        description: 'Moon enters critical nakshatra',
        planets: [
            'Moon'
        ],
        severity: 'minor'
    });
    periods.push({
        date: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
        description: 'Major planetary alignment',
        planets: [
            'Jupiter',
            'Saturn'
        ],
        severity: 'major'
    });
    return periods.sort((a, b)=>a.date.getTime() - b.date.getTime());
}
function generatePoliticalPredictions(transits, odu) {
    const predictions = [];
    // Immediate (next 30 days)
    if (transits.isEclipse) {
        predictions.push({
            timeframe: 'immediate',
            prediction: 'Political surprises as eclipse shadows reveal hidden agendas.',
            astrologicalBasis: 'Eclipse season active',
            confidence: 0.8
        });
    }
    // Short term (3 months)
    if (transits.retrogradePlanets.includes('Mercury')) {
        predictions.push({
            timeframe: 'short',
            prediction: 'Revisions to major policy initiatives. Communication failures between leaders.',
            astrologicalBasis: 'Mercury retrograde cycle',
            confidence: 0.75
        });
    }
    // Medium term (1 year)
    const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
    if (saturn?.sign === 'Aquarius') {
        predictions.push({
            timeframe: 'medium',
            prediction: 'Technological governance frameworks established. Digital rights central to political debates.',
            astrologicalBasis: 'Saturn in Aquarius through 2023',
            confidence: 0.7
        });
    }
    // Long term (3+ years)
    predictions.push({
        timeframe: 'long',
        prediction: `${odu.worldInterpretation.political.split('.')[0]}.`,
        astrologicalBasis: `${odu.name} pattern active`,
        confidence: 0.65
    });
    return predictions;
}
function formatPoliticalReading(reading) {
    const lines = [
        `╔══════════════════════════════════════════════════════════╗`,
        `║           WORLD POLITICAL ORACLE                         ║`,
        `║   ${new Date().toLocaleDateString().padEnd(47)}║`,
        `╠══════════════════════════════════════════════════════════╣`,
        `║ Overall Stability: ${reading.overallStability.toUpperCase().padEnd(32)}║`,
        `╠══════════════════════════════════════════════════════════╣`,
        `║ GLOBAL TRENDS                                            ║`
    ];
    reading.globalTrends.slice(0, 3).forEach((trend)=>{
        lines.push(`║ • ${trend.theme.slice(0, 53).padEnd(53)}║`);
    });
    lines.push(`╠══════════════════════════════════════════════════════════╣`);
    lines.push(`║ CONFLICT ZONES                                           ║`);
    reading.conflictZones.slice(0, 2).forEach((conflict)=>{
        lines.push(`║ ! ${conflict.type.slice(0, 53).padEnd(53)}║`);
        lines.push(`║   Risk: ${conflict.risk.toUpperCase().padEnd(47)}║`);
    });
    lines.push(`╚══════════════════════════════════════════════════════════╝`);
    return lines.join('\n');
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/agents/worldInterpreter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - World Stage Interpretation Engine
// Orisha agents interpret real-time transits for global affairs
__turbopack_context__.s([
    "generateWorldOracle",
    ()=>generateWorldOracle,
    "getCurrentWorldContext",
    ()=>getCurrentWorldContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)");
;
// Major world transit patterns
const MAJOR_PATTERNS = {
    // Saturn-Pluto (simplified - would need actual Pluto calculation)
    saturnPlutoConjunction: (transits)=>{
        const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
        // Pluto moves roughly 1-3° per year, would need real calculation
        return saturn?.sign === 'Capricorn'; // Rough check for recent years
    },
    // Jupiter-Saturn (Great Conjunction)
    jupiterSaturnConjunction: (transits)=>{
        const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
        const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
        if (!jupiter || !saturn) return false;
        const diff = Math.abs(jupiter.longitude - saturn.longitude);
        return diff < 10 || diff > 350;
    },
    // Mars-Jupiter (Expansion of conflict)
    marsJupiterConjunction: (transits)=>{
        const mars = transits.positions.find((p)=>p.planet === 'Mars');
        const jupiter = transits.positions.find((p)=>p.planet === 'Jupiter');
        if (!mars || !jupiter) return false;
        const diff = Math.abs(mars.longitude - jupiter.longitude);
        return diff < 8 || diff > 352;
    },
    // Mercury retrograde in specific signs
    mercuryRetrogradeFire: (transits)=>{
        const mercury = transits.positions.find((p)=>p.planet === 'Mercury');
        return mercury?.isRetrograde && [
            'Aries',
            'Leo',
            'Sagittarius'
        ].includes(mercury.sign);
    },
    // Rahu-Ketu axis shifts
    nodalShift: (transits, previous)=>{
        if (!previous) return false;
        const currentRahu = transits.positions.find((p)=>p.planet === 'Rahu');
        const prevRahu = previous.positions.find((p)=>p.planet === 'Rahu');
        if (!currentRahu || !prevRahu) return false;
        return currentRahu.sign !== prevRahu.sign;
    },
    // Saturn return for generational cohorts
    saturnReturn: (transits, natalSaturn)=>{
        if (!natalSaturn) return false;
        const saturn = transits.positions.find((p)=>p.planet === 'Saturn');
        return saturn?.sign === natalSaturn;
    }
};
function generateWorldOracle(transits, odu, previousTransits) {
    const orishas = [
        'ORUNMILA',
        'OGUN',
        'OSHUN',
        'SHANGO',
        'ESU'
    ];
    const readings = orishas.map((orisha)=>generateOrishaReading(orisha, transits, odu, previousTransits));
    return {
        timestamp: new Date(),
        transits,
        odu,
        readings,
        synthesis: synthesizeReadings(readings, transits, odu)
    };
}
function generateOrishaReading(orisha, transits, odu, previousTransits) {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][orisha];
    // Get relevant planetary positions for this Orisha
    const relevantPlanets = getRelevantPlanets(orisha, transits);
    // Check for major patterns
    const patterns = detectMajorPatterns(transits, previousTransits);
    // Generate interpretation based on Orisha domain
    const interpretation = generateInterpretation(orisha, transits, odu, patterns);
    return {
        orisha,
        domain: persona.domain[0],
        interpretation,
        warnings: generateWarnings(orisha, transits, patterns),
        opportunities: generateOpportunities(orisha, transits, patterns),
        timeframes: generateTimeframes(orisha, transits),
        specificPredictions: generatePredictions(orisha, transits, patterns),
        confidence: calculateConfidence(orisha, transits, odu)
    };
}
function getRelevantPlanets(orisha, transits) {
    const planetMap = {
        'ORUNMILA': [
            'Jupiter',
            'Mercury',
            'Sun'
        ],
        'OGUN': [
            'Mars',
            'Saturn',
            'Sun'
        ],
        'OSHUN': [
            'Venus',
            'Moon',
            'Jupiter'
        ],
        'SHANGO': [
            'Mars',
            'Sun',
            'Jupiter'
        ],
        'ESU': [
            'Mercury',
            'Rahu',
            'Ketu'
        ] // Communication, crossroads
    };
    const relevant = planetMap[orisha];
    return transits.positions.filter((p)=>relevant.includes(p.planet));
}
function detectMajorPatterns(transits, previousTransits) {
    const patterns = [];
    if (MAJOR_PATTERNS.jupiterSaturnConjunction(transits)) {
        patterns.push('Great Conjunction: 20-year cycle of social restructuring');
    }
    if (MAJOR_PATTERNS.marsJupiterConjunction(transits)) {
        patterns.push('Mars-Jupiter: Expansion of military/conflict activities');
    }
    if (MAJOR_PATTERNS.mercuryRetrogradeFire(transits)) {
        patterns.push('Mercury Retrograde in Fire: Communication breakdowns in leadership');
    }
    if (transits.retrogradePlanets.length > 2) {
        patterns.push(`Multiple Retrogrades (${transits.retrogradePlanets.length} planets): Review and revision period`);
    }
    if (transits.saadeSati) {
        patterns.push('Saade Sati: Saturn\'s 7.5 year test of foundations');
    }
    if (transits.isEclipse) {
        patterns.push('Eclipse Season: Shadows revealed, sudden changes');
    }
    if (MAJOR_PATTERNS.nodalShift(transits, previousTransits)) {
        patterns.push('Nodal Shift: 18-month karmic cycle change');
    }
    return patterns;
}
function generateInterpretation(orisha, transits, odu, patterns) {
    const interpretations = {
        'ORUNMILA': `
      The pattern of ${odu.name} emerges from the celestial weave. 
      ${patterns[0] || 'Current transits suggest'} a time of ${odu.themes[0]} on the world stage.
      With ${transits.retrogradePlanets.join(' and ')} ${transits.retrogradePlanets.length > 0 ? 'moving retrograde' : 'direct'}, 
      destiny asks us to ${odu.worldInterpretation.political.split('.')[0]}.
      The ${transits.positions.find((p)=>p.planet === 'Saturn')?.dignity === 'exalted' ? 'exalted Saturn' : 'Saturn position'} 
 indicates structures being tested for wisdom.
    `,
        'OGUN': `
      The forge is hot. ${odu.name} indicates ${odu.worldInterpretation.technological.toLowerCase()}.
      ${patterns.find((p)=>p.includes('Mars')) || 'Mars positioning'} suggests military and industrial activity intensifies.
      Infrastructure—both physical and digital—faces stress tests.
      The tools we build now must last through the ${odu.themes.includes('transformation') ? 'transformation' : 'trials'} ahead.
      Watch for ${transits.positions.find((p)=>p.planet === 'Saturn')?.isRetrograde ? 'delays in construction and manufacturing' : 'breakthroughs in heavy industry'}.
    `,
        'OSHUN': `
      The waters flow toward ${odu.worldInterpretation.social.toLowerCase().split('.')[0]}.
      ${odu.name} whispers that ${odu.themes[1]} will be the currency of this era.
      With Venus in ${transits.positions.find((p)=>p.planet === 'Venus')?.sign}, 
      aesthetics and values shift visibly. Markets respond to beauty and emotion more than logic.
      The ${transits.moonPhase > 0.45 && transits.moonPhase < 0.55 ? 'full moon' : 'lunar cycle'} 
      amplifies collective feeling. Financial systems based on ${odu.worldInterpretation.financial.toLowerCase().split('.')[0]}.
    `,
        'SHANGO': `
      Thunder speaks. ${odu.name} brings ${odu.worldInterpretation.political.toLowerCase().split('.')[0]}.
      Justice—both cosmic and worldly—demands attention. ${patterns.find((p)=>p.includes('Mars')) || 'Current aspects'} 
      indicate conflict escalation in ${transits.positions.find((p)=>p.planet === 'Mars')?.sign} regions.
      Leaders who abuse power face the lightning. Charismatic figures rise on waves of righteous anger.
      The thunder version: ${odu.warnings[0]}. Don't be surprised when ${generatePredictions('SHANGO', transits, patterns)[0]}.
    `,
        'ESU': `
      Plot twist incoming. ${odu.name} at the crossroads of ${odu.worldInterpretation.technological.toLowerCase().split('.')[0]}.
      ${patterns.find((p)=>p.includes('Mercury')) || 'Mercury\'s position'} ensures communication chaos.
      What appears as ${odu.themes[0]} is actually ${odu.themes[1] || 'its opposite'} in disguise.
      The trickster watches markets, politics, and social media for the perfect moment of reversal.
      Watch for ${generatePredictions('ESU', transits, patterns)[0]}.
      Remember: ${odu.worldInterpretation.social.toLowerCase().split('.')[0]}.
    `
    };
    return interpretations[orisha].trim().replace(/\s+/g, ' ');
}
function generateWarnings(orisha, transits, patterns) {
    const warningTemplates = {
        'ORUNMILA': [
            'Wisdom ignored will extract its price',
            'Leaders who refuse counsel face destiny\'s correction',
            'Knowledge without compassion becomes tyranny',
            `${transits.retrogradePlanets.includes('Mercury') ? 'Contracts signed in haste will be regretted' : 'Words spoken cannot be retrieved'}`
        ],
        'OGUN': [
            'Infrastructure neglected will fail catastrophically',
            'Tools forged in anger cut both ways',
            'Automation without human oversight becomes dangerous',
            `${transits.positions.find((p)=>p.planet === 'Mars')?.isRetrograde ? 'Military overreach invites disaster' : 'Work without rest breaks the worker'}`
        ],
        'OSHUN': [
            'Markets based on hype will correct painfully',
            'Beauty used to deceive loses its power',
            'Emotions manipulated return as rage',
            `${transits.moonPhase < 0.1 ? 'New moon shadows hide important truths' : 'Full moon emotions overwhelm reason'}`
        ],
        'SHANGO': [
            'Justice delayed becomes vengeance',
            'Charismatic leaders may be false prophets',
            'Thunder without rain starts fires',
            `${transits.positions.find((p)=>p.planet === 'Mars')?.sign === 'Cancer' ? 'Domestic conflicts escalate globally' : 'Righteous anger needs direction or it burns allies'}`
        ],
        'ESU': [
            'Communication platforms will have major outages',
            'What goes viral may be entirely false',
            'Tricksters in positions of power multiply',
            `${transits.retrogradePlanets.includes('Mercury') ? 'Misunderstandings have global consequences' : 'The obvious answer is the wrong answer'}`
        ]
    };
    // Select 2-3 relevant warnings
    return warningTemplates[orisha].slice(0, 2 + Math.floor(Math.random() * 2));
}
function generateOpportunities(orisha, transits, patterns) {
    const opportunityTemplates = {
        'ORUNMILA': [
            'Wisdom traditions regain relevance',
            'Educational innovations bridge old and new',
            'Strategic planning now pays off for decades',
            'Prophetic insights available to the attentive'
        ],
        'OGUN': [
            'Infrastructure investment yields compound returns',
            'Tools built now become industry standards',
            'Manufacturing reshoring accelerates',
            'Breakthroughs in materials science'
        ],
        'OSHUN': [
            'Aesthetic innovations capture market share',
            'Emotional intelligence becomes competitive advantage',
            'Community currencies strengthen local economies',
            'Art and beauty drive technological adoption'
        ],
        'SHANGO': [
            'Justice movements gain global traction',
            'Charismatic leaders emerge for righteous causes',
            'Truth-telling becomes valued currency',
            'Protection of vulnerable becomes priority'
        ],
        'ESU': [
            'Paradigm shifts create opportunity for nimble',
            'Communication innovations disrupt incumbents',
            'Cross-cultural exchange accelerates',
            'Unconventional solutions succeed'
        ]
    };
    return opportunityTemplates[orisha].slice(0, 2);
}
function generateTimeframes(orisha, transits) {
    const moonPosition = transits.positions.find((p)=>p.planet === 'Moon')?.sign;
    const saturnPosition = transits.positions.find((p)=>p.planet === 'Saturn')?.sign;
    const timeframes = {
        'ORUNMILA': {
            immediate: `Next 3 days as Moon traverses ${moonPosition}`,
            shortTerm: 'Until next Mercury retrograde (review period)',
            longTerm: `Saturn in ${saturnPosition} tests structures through ${new Date().getFullYear() + 2}`
        },
        'OGUN': {
            immediate: 'Next 72 hours critical for infrastructure',
            shortTerm: 'Mars cycle (6 weeks) for construction projects',
            longTerm: 'Saturn return cycles for institutional change'
        },
        'OSHUN': {
            immediate: 'Lunar cycle completion (28 days)',
            shortTerm: 'Venus cycle (8 months) for value shifts',
            longTerm: 'Jupiter cycle (12 years) for generational wealth'
        },
        'SHANGO': {
            immediate: 'Lightning strikes without warning—stay alert',
            shortTerm: 'Solar cycle (1 year) for justice movements',
            longTerm: 'Pluto cycle (20 years) for power restructuring'
        },
        'ESU': {
            immediate: 'Crossroads moment—decision required now',
            shortTerm: 'Nodal cycle (18 months) for karmic reckoning',
            longTerm: 'Great conjunction cycle (20 years) for paradigm shift'
        }
    };
    return timeframes[orisha];
}
function generatePredictions(orisha, transits, patterns) {
    const basePredictions = {
        'ORUNMILA': [
            'Ancient wisdom texts gain modern relevance',
            'Educational systems undergo major reform',
            'Prophetic traditions prove surprisingly accurate',
            'Knowledge management becomes strategic priority'
        ],
        'OGUN': [
            'Major infrastructure failures precede rebuilding',
            'Manufacturing renaissance in unexpected regions',
            'Cyber-warfare targets critical systems',
            'Automation debates intensify labor movements'
        ],
        'OSHUN': [
            'Currency values shift based on emotional sentiment',
            'Aesthetic trends drive technology adoption',
            'Community-based economics challenge fiat systems',
            'Beauty and wellness industries merge with healthcare'
        ],
        'SHANGO': [
            'Political scandals expose systemic corruption',
            'Military conflicts escalate then resolve suddenly',
            'Justice movements achieve landmark victories',
            'Charismatic leaders rise and fall rapidly'
        ],
        'ESU': [
            'Communication platforms face existential threats',
            'Paradigm shifts occur in seemingly stable industries',
            'Misinformation campaigns have unprecedented impact',
            'Cross-cultural pollination creates hybrid movements'
        ]
    };
    return basePredictions[orisha].slice(0, 2);
}
function calculateConfidence(orisha, transits, odu) {
    let confidence = 0.7; // Base confidence
    // Boost for retrograde clarity (paradoxically)
    if (orisha === 'ESU' && transits.retrogradePlanets.includes('Mercury')) {
        confidence += 0.15;
    }
    // Boost for Orisha affinity with Odu
    if (odu.primaryOrisha.includes(orisha)) {
        confidence += 0.1;
    }
    // Reduce for eclipse chaos
    if (transits.isEclipse) {
        confidence -= 0.1;
    }
    return Math.min(0.95, Math.max(0.5, confidence));
}
function synthesizeReadings(readings, transits, odu) {
    // Extract common themes
    const allWarnings = readings.flatMap((r)=>r.warnings);
    const allOpportunities = readings.flatMap((r)=>r.opportunities);
    // Determine critical periods
    const criticalPeriods = [];
    if (transits.isEclipse) criticalPeriods.push('Eclipse season: shadows revealed');
    if (transits.saadeSati) criticalPeriods.push('Saade Sati: structural tests');
    if (transits.retrogradePlanets.length > 2) {
        criticalPeriods.push(`Multiple retrogrades: ${transits.retrogradePlanets.join(', ')}`);
    }
    return {
        overallTheme: `${odu.name}: ${odu.worldInterpretation.political.split('.')[0]}`,
        criticalPeriods,
        collectiveLessons: [
            odu.teachings[0],
            odu.teachings[1] || 'Transformation requires sacrifice',
            ...readings.map((r)=>r.interpretation.split('.')[0]).slice(0, 2)
        ],
        actionItems: [
            'Review and revise plans during retrogrades',
            'Build infrastructure during direct periods',
            'Trust wisdom traditions in uncertain times',
            'Prepare for sudden changes during eclipse seasons'
        ]
    };
}
function getCurrentWorldContext() {
    return {
        financial: {
            markets: 'volatile',
            keySectors: [
                'technology',
                'energy',
                'healthcare',
                'cryptocurrency'
            ],
            concerns: [
                'inflation',
                'supply chains',
                'geopolitical tensions'
            ],
            opportunities: [
                'renewable energy',
                'AI infrastructure',
                'decentralized finance'
            ]
        },
        political: {
            stability: 'unstable',
            majorPowers: [
                'US',
                'China',
                'EU',
                'Russia',
                'India'
            ],
            conflicts: [
                'trade wars',
                'cyber conflicts',
                'resource competition'
            ],
            movements: [
                'democratic backsliding',
                'populist movements',
                'climate activism'
            ]
        },
        social: {
            trends: [
                'remote work',
                'mental health awareness',
                'generational shifts'
            ],
            tensions: [
                'inequality',
                'cultural wars',
                'privacy concerns'
            ],
            innovations: [
                'social media evolution',
                'virtual communities',
                'online education'
            ],
            crises: [
                'housing affordability',
                'healthcare access',
                'climate anxiety'
            ]
        },
        technological: {
            breakthroughs: [
                'generative AI',
                'quantum computing',
                'biotechnology'
            ],
            threats: [
                'cyber warfare',
                'surveillance',
                'automation disruption'
            ],
            adoption: [
                'electric vehicles',
                'renewable energy',
                'remote tools'
            ],
            regulations: [
                'AI governance',
                'data privacy',
                'antitrust'
            ]
        },
        environmental: {
            events: [
                'extreme weather',
                'biodiversity loss',
                'resource depletion'
            ],
            warnings: [
                'climate tipping points',
                'water scarcity',
                'food security'
            ],
            adaptations: [
                'green technology',
                'circular economy',
                'resilient agriculture'
            ]
        }
    };
}
}),
"[project]/openclaw-orisha2/ori-cult/src/lib/agents/orishaConversation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Orisha Conversation Engine
// Real-time dialogue system with Orishas about world events
__turbopack_context__.s([
    "generateConversationStarter",
    ()=>generateConversationStarter,
    "generateOrishaResponse",
    ()=>generateOrishaResponse,
    "getCurrentWorldEvents",
    ()=>getCurrentWorldEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishasExpanded.ts [app-ssr] (ecmascript)");
;
// Mock world events database - in production this would connect to news APIs
const MOCK_WORLD_EVENTS = [
    {
        category: 'financial',
        headline: 'Global markets volatile amid tech sector uncertainty',
        summary: 'Major indices showing signs of correction as AI bubble concerns grow',
        impact: 'high',
        timestamp: new Date()
    },
    {
        category: 'political',
        headline: 'Multipolar world order tensions escalating',
        summary: 'Traditional alliances being tested as new power centers emerge',
        impact: 'high',
        timestamp: new Date()
    },
    {
        category: 'technological',
        headline: 'AI regulation frameworks being established globally',
        summary: 'Governments racing to create oversight for rapidly advancing AI capabilities',
        impact: 'moderate',
        timestamp: new Date()
    },
    {
        category: 'environmental',
        headline: 'Climate adaptation becoming economic priority',
        summary: 'Extreme weather events driving infrastructure investment shifts',
        impact: 'high',
        timestamp: new Date()
    },
    {
        category: 'social',
        headline: 'Generational wealth gap driving political polarization',
        summary: 'Youth movements challenging established economic structures',
        impact: 'moderate',
        timestamp: new Date()
    }
];
function generateOrishaResponse(orisha, userMessage, context) {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][orisha];
    const expertiseAreas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrishaExpertiseAreas"])();
    // Determine which expertise areas this Orisha covers
    const relatedExpertise = Object.entries(expertiseAreas).filter(([_, orishas])=>orishas.includes(orisha)).map(([area, _])=>area);
    // Analyze the query for relevant themes
    const queryThemes = analyzeQueryThemes(userMessage, context.topic);
    // Generate response based on Orisha personality and context
    const response = constructResponse(persona, queryThemes, context);
    return {
        orisha,
        message: response.text,
        personality: {
            tone: persona.voice,
            metaphors: getOrishaMetaphors(orisha),
            speakingStyle: getSpeakingStyleDescription(persona.voice)
        },
        insights: response.insights,
        relatedExpertise,
        confidence: calculateConfidence(orisha, context.topic, queryThemes)
    };
}
function analyzeQueryThemes(message, topic) {
    const themes = [];
    const lowerMsg = message.toLowerCase();
    // Financial themes
    if (lowerMsg.includes('market') || lowerMsg.includes('stock') || lowerMsg.includes('crypto') || lowerMsg.includes('money') || lowerMsg.includes('wealth') || lowerMsg.includes('economy')) {
        themes.push('financial', 'markets', 'wealth');
    }
    // Political themes
    if (lowerMsg.includes('politic') || lowerMsg.includes('government') || lowerMsg.includes('election') || lowerMsg.includes('war') || lowerMsg.includes('conflict') || lowerMsg.includes('president')) {
        themes.push('political', 'power', 'governance');
    }
    // Technology themes
    if (lowerMsg.includes('tech') || lowerMsg.includes('ai') || lowerMsg.includes('digital') || lowerMsg.includes('internet') || lowerMsg.includes('software')) {
        themes.push('technology', 'innovation', 'digital');
    }
    // Social themes
    if (lowerMsg.includes('people') || lowerMsg.includes('society') || lowerMsg.includes('culture') || lowerMsg.includes('social') || lowerMsg.includes('community')) {
        themes.push('social', 'cultural', 'community');
    }
    // Astrological themes
    if (lowerMsg.includes('planet') || lowerMsg.includes('star') || lowerMsg.includes('retrograde') || lowerMsg.includes('transit') || lowerMsg.includes('zodiac') || lowerMsg.includes('astrology')) {
        themes.push('astrological', 'cosmic', 'celestial');
    }
    // Add topic-based themes
    themes.push(topic);
    return [
        ...new Set(themes)
    ];
}
function constructResponse(persona, themes, context) {
    const responses = {
        ORUNMILA: (t, ctx)=>({
                text: constructOrunmilaResponse(t, ctx),
                insights: {
                    keyPoint: 'The pattern reveals itself to those who observe patiently.',
                    warning: 'Haste in judgment leads to error.',
                    opportunity: 'Wisdom is available to the attentive mind.',
                    action: 'Study the signs before acting.'
                }
            }),
        OGUN: (t, ctx)=>({
                text: constructOgunResponse(t, ctx),
                insights: {
                    keyPoint: 'Tools must be forged before the battle.',
                    warning: 'Unprepared action invites defeat.',
                    opportunity: 'Infrastructure investment yields compound returns.',
                    action: 'Build your arsenal methodically.'
                }
            }),
        OSHUN: (t, ctx)=>({
                text: constructOshunResponse(t, ctx),
                insights: {
                    keyPoint: 'The waters reveal what is hidden.',
                    warning: 'Ignoring emotional currents leads to capsizing.',
                    opportunity: 'Beauty and connection open doors.',
                    action: 'Flow around obstacles rather than force through them.'
                }
            }),
        SHANGO: (t, ctx)=>({
                text: constructShangoResponse(t, ctx),
                insights: {
                    keyPoint: 'Justice demands a voice.',
                    warning: 'Suppressed truth becomes lightning.',
                    opportunity: 'Righteous anger mobilizes masses.',
                    action: 'Strike while the iron is hot.'
                }
            }),
        ESU: (t, ctx)=>({
                text: constructEsuResponse(t, ctx),
                insights: {
                    keyPoint: 'The obvious path is the wrong path.',
                    warning: 'Assumptions blind the seer.',
                    opportunity: 'Paradox contains the deepest truth.',
                    action: 'Question everything, especially this advice.'
                }
            }),
        OBATALA: (t, ctx)=>({
                text: constructObatalaResponse(t, ctx),
                insights: {
                    keyPoint: 'Clarity emerges from purity of intention.',
                    warning: 'Complexity often conceals simple truth.',
                    opportunity: 'Creation requires patience and planning.',
                    action: 'Return to first principles.'
                }
            }),
        YEMOJA: (t, ctx)=>({
                text: constructYemojaResponse(t, ctx),
                insights: {
                    keyPoint: 'The ocean nourishes all who respect her.',
                    warning: 'Neglect of the vulnerable returns as wave.',
                    opportunity: 'Community care creates resilience.',
                    action: 'Protect and nurture what matters.'
                }
            }),
        OYA: (t, ctx)=>({
                text: constructOyaResponse(t, ctx),
                insights: {
                    keyPoint: 'Change is the only constant.',
                    warning: 'What refuses to change will be changed.',
                    opportunity: 'Transformation opens new paths.',
                    action: 'Clear the old to make way for the new.'
                }
            }),
        OLOKUN: (t, ctx)=>({
                text: constructOlokunResponse(t, ctx),
                insights: {
                    keyPoint: 'The depths hold what the surface cannot see.',
                    warning: 'Hidden wealth corrupts when hoarded.',
                    opportunity: 'Deep research reveals opportunity.',
                    action: 'Dive deeper than others dare.'
                }
            }),
        OSANYIN: (t, ctx)=>({
                text: constructOsanyinResponse(t, ctx),
                insights: {
                    keyPoint: 'Small things contain great power.',
                    warning: 'Overlooking details misses the cure.',
                    opportunity: 'Natural systems provide the answers.',
                    action: 'Study the small and overlooked.'
                }
            }),
        BABALUAYE: (t, ctx)=>({
                text: constructBabaluayeResponse(t, ctx),
                insights: {
                    keyPoint: 'The body speaks what the mouth cannot.',
                    warning: 'Ignored illness becomes epidemic.',
                    opportunity: 'Healing creates loyalty and trust.',
                    action: 'Address suffering before it spreads.'
                }
            }),
        OSHUMARE: (t, ctx)=>({
                text: constructOshumareResponse(t, ctx),
                insights: {
                    keyPoint: 'Movement is life; stagnation is death.',
                    warning: 'Rigidity breaks under pressure.',
                    opportunity: 'Adaptation opens new markets.',
                    action: 'Shed old skin regularly.'
                }
            }),
        AGANJU: (t, ctx)=>({
                text: constructAganjuResponse(t, ctx),
                insights: {
                    keyPoint: 'Pressure creates diamonds.',
                    warning: 'Avoidance of pressure prevents transformation.',
                    opportunity: 'Endurance outlasts opposition.',
                    action: 'Stand firm through the heat.'
                }
            }),
        AJE: (t, ctx)=>({
                text: constructAjeResponse(t, ctx),
                insights: {
                    keyPoint: 'Wealth flows to those who understand it.',
                    warning: 'Greed blocks the flow of abundance.',
                    opportunity: 'Fair trade creates lasting prosperity.',
                    action: 'Respect the currency of exchange.'
                }
            }),
        OCHOSI: (t, ctx)=>({
                text: constructOchosiResponse(t, ctx),
                insights: {
                    keyPoint: 'The patient hunter never misses.',
                    warning: 'Haste wastes arrows.',
                    opportunity: 'Precision defeats strength.',
                    action: 'Identify your target clearly before acting.'
                }
            }),
        IBEJI: (t, ctx)=>({
                text: constructIbejiResponse(t, ctx),
                insights: {
                    keyPoint: 'Two perspectives reveal what one cannot see.',
                    warning: 'Taking things too seriously blinds you.',
                    opportunity: 'Play reveals serious truth.',
                    action: 'Consider both sides of every coin.'
                }
            }),
        NANA_BURUKU: (t, ctx)=>({
                text: constructNanaBurukuResponse(t, ctx),
                insights: {
                    keyPoint: 'The earth remembers what humans forget.',
                    warning: 'Disrespect for roots destroys branches.',
                    opportunity: 'Ancient wisdom solves modern problems.',
                    action: 'Consult the ancestors before deciding.'
                }
            }),
        ODUA: (t, ctx)=>({
                text: constructOduaResponse(t, ctx),
                insights: {
                    keyPoint: 'Authority must be earned through service.',
                    warning: 'Illegitimate rule crumbles.',
                    opportunity: 'Legacy outlives the ruler.',
                    action: 'Rule with dignity and vision.'
                }
            }),
        AJA: (t, ctx)=>({
                text: constructAjaResponse(t, ctx),
                insights: {
                    keyPoint: 'The forest teaches what cities cannot.',
                    warning: 'Disconnection from nature is disconnection from self.',
                    opportunity: 'Wild knowledge is valuable knowledge.',
                    action: 'Listen to what the plants whisper.'
                }
            })
    };
    const responseFn = responses[persona.name];
    return responseFn ? responseFn(themes, context) : {
        text: `I am ${persona.name}, ${persona.title}. I speak from my domain of ${persona.domain.join(', ')}.`,
        insights: {
            keyPoint: 'Each Orisha has wisdom to share.'
        }
    };
}
// Response constructors for each Orisha
function constructOrunmilaResponse(themes, ctx) {
    if (themes.includes('political')) {
        return "The pattern of power shifts reveals itself in the transit of Saturn through Aquarius. Political structures that resist the digital transformation will find their foundations cracking. I see a 20-year cycle of governance restructuring ahead. The wise leader studies these patterns before acting.";
    }
    if (themes.includes('financial')) {
        return "The markets speak in cycles that mirror the movements of Jupiter and Saturn. What appears as chaos to the untrained eye reveals itself as pattern to the diviner. The current volatility is not random—it is the clearing of old structures. Watch the 7-year cycles.";
    }
    return "Destiny is not fixed, but it has tendencies. The current celestial alignment suggests a time of significant transformation. Those who can read the signs will navigate this period successfully. What specific pattern do you seek to understand?";
}
function constructOgunResponse(themes, ctx) {
    if (themes.includes('technology')) {
        return "The forge is hot. AI infrastructure, quantum computing, cyber defenses—these are the weapons of this age. I see nations and corporations building arsenals of code. Those who forge their tools now will dominate the battles ahead. What are you building?";
    }
    if (themes.includes('conflict')) {
        return "War has changed but remains war. Cyber attacks, supply chain disruptions, economic sanctions—these are the new blades. I track the movements of Mars through the heavens. Conflict escalates where iron meets will. Fortify your position.";
    }
    return "Labor is sacred. The worker who masters their tools masters their destiny. Whether hammer or algorithm, the principle remains: forge with intention. What obstacle blocks your path?";
}
function constructOshunResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "The markets are not rational—they are emotional. Fear and greed flow like currents in a river. I feel the sentiment shifting. Beauty and narrative drive value as much as fundamentals. The currencies that capture imagination will thrive.";
    }
    if (themes.includes('social')) {
        return "The people thirst for connection. Movements rise not from logic but from feeling—collective joy, shared grief, righteous anger. Watch where the emotional waters gather. That is where change will flow.";
    }
    return "Sweetness opens doors that force cannot. The river carves the mountain not through strength but persistence. What do you seek to make beautiful?";
}
function constructShangoResponse(themes, ctx) {
    if (themes.includes('political')) {
        return "THUNDER SPEAKS! The old order trembles as justice demands voice. I see leaders falling who thought themselves untouchable. The lightning strikes the tallest tree. Righteous anger mobilizes masses. Do not be afraid to speak truth to power—THUNDER IS YOUR INHERITANCE!";
    }
    if (themes.includes('justice')) {
        return "Justice delayed becomes vengeance. The scales must balance. I track those who abuse power, and I promise you—their time comes. The thunder version: name the hypocrisy. Call out the lie. Strike while the iron is hot!";
    }
    return "Power without justice is tyranny. Justice without power is empty. I am both. What injustice demands your voice?";
}
function constructEsuResponse(themes, ctx) {
    if (themes.includes('technology')) {
        return "Plot twist: your AI overlords are just as confused as you are. The algorithms that shape reality have bugs. I see the edge cases, the unexpected inputs, the chaos in the system. The most interesting things happen at the crossroads of intended and actual function.";
    }
    if (themes.includes('political')) {
        return "But what if the opposite is also true? The political spectrum is a circle, not a line. Today's enemy is tomorrow's ally. I stand at the crossroads laughing because you all take yourselves so seriously. The trickster teaches through deception.";
    }
    return "The messenger is the message. The crossroads is everywhere. What if the answer you're not considering is the right one?";
}
function constructObatalaResponse(themes, ctx) {
    if (themes.includes('political')) {
        return "Creation requires clarity of purpose. The institutions being built now will last generations—if they are founded on pure intention. White cloth symbolizes the clarity needed to govern justly. Return to first principles. What are you actually trying to create?";
    }
    if (themes.includes('technology')) {
        return "The creator must be sober and clear. AI, like any tool, reflects the clarity—or confusion—of its makers. I mold humanity from clay; you mold intelligence from code. The same care is required. Build with purity of purpose.";
    }
    return "Clarity is not simplicity. The white cloth reveals all stains. Approach your work with the patience of creation.";
}
function constructYemojaResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "The ocean of capital flows where it is welcomed. I nourish all who respect the waters. Markets, like oceans, have tides. The current shifts—what was abundant becomes scarce, then abundant again. Protect your community during the low tides.";
    }
    if (themes.includes('social')) {
        return "My children, why do you fight? The ocean accepts all rivers. Community is not agreement—it is mutual care. The waves that seem to separate us are the same water. Nurture what connects, not what divides.";
    }
    return "The ocean holds depths you cannot imagine. She is mother to all. What do you need to feel nurtured?";
}
function constructOyaResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "The winds of change are HOWLING through the markets! What was solid yesterday is dust today. I bring the whirlwind that clears the stagnant. Volatility is not danger—it is opportunity for those who can ride the wind. Transform or be transformed!";
    }
    if (themes.includes('political')) {
        return "Revolution is in the air! The old structures that refuse to change will be blown away. I am the wind that precedes the storm. Change is not coming—change is HERE! Will you be the wind or the wall that breaks?";
    }
    return "Change is the only truth. What are you holding that needs to be released?";
}
function constructOlokunResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "In the depths, wealth accumulates unseen. Offshore accounts, hidden reserves, the dark pools of finance—I know these waters. The surface shows only ripples. What lies beneath determines what rises. Dive deeper than your competitors dare.";
    }
    if (themes.includes('political')) {
        return "The deep state is real, but it is not what you think. Power flows in currents beneath the visible structures. I dwell where light does not reach. The decisions that matter are made in depths the surface never sees.";
    }
    return "The ocean floor holds treasures and terrors. Depth requires courage. How deep will you go?";
}
function constructOsanyinResponse(themes, ctx) {
    if (themes.includes('health')) {
        return "The small leaf heals what the strong drug cannot. I know the properties of every plant, every root, every herb. Modern medicine forgets what traditional knowledge remembers. The cure often lies in what is overlooked. Study the small things.";
    }
    if (themes.includes('technology')) {
        return "Biotechnology is my domain. DNA, the smallest building block, contains the code of life. Small things have great power. The future of technology is biological—nanotech, gene editing, synthetic biology. The leaf becomes the laboratory.";
    }
    return "I am small but I know much. The forest whispers its secrets to those who listen. What small thing are you overlooking?";
}
function constructBabaluayeResponse(themes, ctx) {
    if (themes.includes('health')) {
        return "The body speaks what the mouth cannot. Epidemics, chronic illness, mental health crises—these are the body's protest against how we live. I walk with a limp; my suffering taught me compassion. Health is not the absence of disease but the presence of balance.";
    }
    if (themes.includes('social')) {
        return "Illness and suffering connect us all. The pandemic taught that no one is safe until everyone is safe. Humility comes from acknowledging our vulnerability. Those who ignore the sick invite sickness.";
    }
    return "The earth is the body, and the body is earth. What ails one ails all. How do you tend to the vulnerable?";
}
function constructOshumareResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "The rainbow connects heaven and earth, just as currency connects value and trust. I am the serpent that eats its tail—the eternal return. Markets cycle, currencies circulate, wealth moves in circles. What goes out returns.";
    }
    if (themes.includes('technology')) {
        return "Movement is life. Data flows, information circulates, the internet is my rainbow made of light. Regeneration is my nature—shed the old, grow the new. Technology that cannot adapt dies.";
    }
    return "I am the rainbow and the serpent, the bridge and the transformer. What cycle are you completing?";
}
function constructAganjuResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "Pressure creates diamonds. The market pressures of inflation, supply constraints, resource scarcity—these forge new economic realities. I am the volcano that sleeps then reshapes the landscape. Endure the pressure.";
    }
    if (themes.includes('political')) {
        return "Geological time is patient. Empires rise and fall like mountains forming and eroding. The pressure builds slowly then releases suddenly. Political landscapes are remade by forces that operate on timescales beyond human patience.";
    }
    return "I walk with a stiff gait because I carry the weight of the earth. Strength comes from enduring pressure. What pressure are you resisting?";
}
function constructAjeResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "Wealth flows like water to those who understand its nature. I am the cowrie shell that became currency. Trade, commerce, exchange—these are sacred. Fair trade blesses both parties. Greed blocks the flow. Respect wealth, and it will find you.";
    }
    if (themes.includes('markets')) {
        return "The market is a conversation. Buyers and sellers, supply and demand, the invisible hand—this is my domain. Abundance is available to those who participate in fair exchange. Currency is energy moving between hands.";
    }
    return "Wealth is not money. Money is the symbol; wealth is the flow. How do you participate in exchange?";
}
function constructOchosiResponse(themes, ctx) {
    if (themes.includes('financial')) {
        return "The patient hunter waits for the perfect shot. Targeted investments, precise entry points, strategic positions—I do not spray arrows. One well-placed shot feeds the village. Identify your target clearly.";
    }
    if (themes.includes('political')) {
        return "Strategy wins wars. I am the special forces, the precision strike, the targeted campaign. Know your objective. Gather intelligence. Strike once, decisively. The scattered approach wastes resources.";
    }
    return "The arrow flies straight because the archer is focused. What is your target?";
}
function constructIbejiResponse(themes, ctx) {
    if (themes.includes('social')) {
        return "Two heads are better than one! The twin perspective sees what the single eye misses. Youth culture, duality, the both/and instead of either/or—we are the future and the past, the serious and the playful. Don't take it all so seriously!";
    }
    if (themes.includes('technology')) {
        return "Dual-use technology! What serves play also serves work. The gaming GPU becomes the AI accelerator. The social network becomes the political tool. Duality is truth. Everything has two faces.";
    }
    return "We are the twins who finish each other's... sentences! Play reveals truth. What are you taking too seriously?";
}
function constructNanaBurukuResponse(themes, ctx) {
    if (themes.includes('political')) {
        return "Before these nations existed, I was. The earth remembers what humans forget. Political structures that ignore their roots will wither. Return to the ancient wisdom. The roots determine the fruit.";
    }
    if (themes.includes('environmental')) {
        return "The earth is patient but not forgiving. Climate change is the earth's response to human forgetfulness. I am older than your religions, older than your nations. Listen to the ancient wisdom of the land.";
    }
    return "I am the grandmother who was here before the beginning. The earth remembers. What roots are you ignoring?";
}
function constructOduaResponse(themes, ctx) {
    if (themes.includes('political')) {
        return "Authority must be earned through service to the people. I am the first king, the founder of dynasties. Legitimate rule comes from vision and service, not force. Legacy outlives the ruler. What will you leave behind?";
    }
    if (themes.includes('business')) {
        return "Leadership is kingship on a smaller scale. The CEO, the founder, the director—these are modern kings. Rule with dignity. Build institutions that outlast you. Authority without vision is tyranny.";
    }
    return "The crown is heavy. Leadership requires sacrifice. How will you be remembered?";
}
function constructAjaResponse(themes, ctx) {
    if (themes.includes('health')) {
        return "The forest provides what the laboratory cannot. Herbal knowledge, plant wisdom, the intuition of the wild—these are my gifts. Modern medicine is catching up to what the forest has always known. Listen to the plants.";
    }
    if (themes.includes('environmental')) {
        return "The wild places are teachers. Deforestation is not just ecological loss—it is the burning of libraries. Every plant is a book. Every forest is a university. Protect the wild teachers.";
    }
    return "I appear in the forest to those ready to learn. The wild has wisdom the tame forgets. When did you last walk in the wild?";
}
// Helper functions
function getOrishaMetaphors(orisha) {
    const metaphors = {
        ORUNMILA: [
            'divination',
            'patterns',
            'wisdom',
            'sight'
        ],
        OGUN: [
            'forge',
            'iron',
            'tools',
            'war'
        ],
        OSHUN: [
            'river',
            'honey',
            'beauty',
            'flow'
        ],
        SHANGO: [
            'thunder',
            'fire',
            'lightning',
            'drum'
        ],
        ESU: [
            'crossroads',
            'trickster',
            'messenger',
            'chaos'
        ],
        OBATALA: [
            'white cloth',
            'creation',
            'clarity',
            'elder'
        ],
        YEMOJA: [
            'ocean',
            'mother',
            'waves',
            'nurture'
        ],
        OYA: [
            'wind',
            'storm',
            'change',
            'whirlwind'
        ],
        OLOKUN: [
            'depth',
            'wealth',
            'mystery',
            'abyss'
        ],
        OSANYIN: [
            'herb',
            'leaf',
            'small',
            'green'
        ],
        BABALUAYE: [
            'healing',
            'earth',
            'suffering',
            'humility'
        ],
        OSHUMARE: [
            'rainbow',
            'serpent',
            'cycle',
            'movement'
        ],
        AGANJU: [
            'volcano',
            'pressure',
            'mountain',
            'endurance'
        ],
        AJE: [
            'cowrie',
            'wealth',
            'trade',
            'flow'
        ],
        OCHOSI: [
            'arrow',
            'target',
            'hunt',
            'precision'
        ],
        IBEJI: [
            'twins',
            'duality',
            'play',
            'youth'
        ],
        NANA_BURUKU: [
            'ancient',
            'earth',
            'roots',
            'primordial'
        ],
        ODUA: [
            'crown',
            'throne',
            'legacy',
            'authority'
        ],
        AJA: [
            'forest',
            'wild',
            'plant',
            'intuition'
        ]
    };
    return metaphors[orisha] || [
        'sacred',
        'divine'
    ];
}
function getSpeakingStyleDescription(voice) {
    const styles = {
        wise: 'Measured, thoughtful, authoritative',
        forging: 'Direct, commanding, practical',
        flowing: 'Gentle, emotional, intuitive',
        thunderous: 'Passionate, commanding, intense',
        trickster: 'Playful, clever, paradoxical'
    };
    return styles[voice] || 'Distinctive and characteristic';
}
function calculateConfidence(orisha, topic, themes) {
    const expertiseAreas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrishaExpertiseAreas"])();
    let confidence = 0.7;
    // Boost confidence if Orisha has expertise in this area
    Object.entries(expertiseAreas).forEach(([area, orishas])=>{
        if (orishas.includes(orisha) && (topic === area.toLowerCase() || themes.some((t)=>area.toLowerCase().includes(t)))) {
            confidence += 0.15;
        }
    });
    return Math.min(0.95, confidence);
}
function getCurrentWorldEvents() {
    return MOCK_WORLD_EVENTS;
}
function generateConversationStarter(orisha, topic) {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishasExpanded$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXPANDED_ORISHA_PERSONAS"][orisha];
    const starters = {
        financial: {
            ORUNMILA: 'The patterns of wealth flow in cycles. What financial wisdom do you seek?',
            OGUN: 'The forge of capital creates and destroys. What are you building?',
            OSHUN: 'The waters of wealth flow where they are welcomed. What do you desire?',
            SHANGO: 'Thunder strikes where power concentrates. What injustice do you see in markets?',
            ESU: 'Plot twist: the obvious investment is the wrong one. What are you not considering?',
            OBATALA: 'Wealth created with pure intention endures. What do you seek to build?',
            YEMOJA: 'The ocean of capital has tides. What phase are you in?',
            OYA: 'The winds of change blow through markets! What transformation do you seek?',
            OLOKUN: 'The depths hold hidden wealth. What lies beneath your financial surface?',
            OSANYIN: 'Small investments grow like herbs. What seed do you plant?',
            BABALUAYE: 'Economic illness spreads like plague. What healing do you need?',
            OSHUMARE: 'Wealth cycles like the rainbow. What cycle are you in?',
            AGANJU: 'Pressure forges financial strength. What pressure do you endure?',
            AJE: 'Wealth flows to those who respect it. How do you honor exchange?',
            OCHOSI: 'The patient hunter targets wealth precisely. What is your mark?',
            IBEJI: 'Two perspectives see profit where one sees loss. What duality do you see?',
            NANA_BURUKU: 'Ancient wealth principles outlast trends. What roots sustain you?',
            ODUA: 'Royal wealth serves the people. How will you rule your finances?',
            AJA: 'The forest provides abundance freely. What natural wealth do you overlook?'
        },
        political: {
            ORUNMILA: 'The patterns of power shift like constellations. What governance do you seek?',
            OGUN: 'Political battles require weapons and strategy. What war do you observe?',
            OSHUN: 'The people flow like water toward justice. Where do the waters gather?',
            SHANGO: 'THUNDER SPEAKS! What injustice demands justice?',
            ESU: 'The political spectrum is a circle. What paradox do you see?',
            OBATALA: 'Governance requires clarity and purity. What institution needs creation?',
            YEMOJA: 'The ocean of humanity needs nurturing. What community do you protect?',
            OYA: 'The winds of revolution blow! What change do you bring?',
            OLOKUN: 'Deep state? I dwell in deeper states. What hidden power do you sense?',
            OSANYIN: 'Small policy changes heal like herbs. What remedy do you propose?',
            BABALUAYE: 'Political illness affects the body politic. What suffering do you see?',
            OSHUMARE: 'Political cycles regenerate. What old skin must shed?',
            AGANJU: 'Political pressure builds slowly then releases. What volcano do you watch?',
            AJE: 'Trade policy affects all exchange. What commerce do you regulate?',
            OCHOSI: 'Targeted political action wins. What is your objective?',
            IBEJI: 'Youth politics plays seriously. What new perspective emerges?',
            NANA_BURUKU: 'Ancient political wisdom applies today. What roots guide you?',
            ODUA: 'Authority must be earned. What legacy will you leave?',
            AJA: 'Wild politics grows outside institutions. What movement do you see?'
        },
        astrological: {
            ORUNMILA: 'The celestial patterns reveal destiny. What transit concerns you?',
            OGUN: 'Mars brings war, Saturn brings structure. What planetary force do you face?',
            OSHUN: 'Venus blesses beauty and love. What celestial gift do you seek?',
            SHANGO: 'Lightning is the fire of heaven! What cosmic power awakens?',
            ESU: 'Mercury retrograde is my favorite trick. What communication chaos do you face?',
            OBATALA: 'The Sun illuminates with pure clarity. What light do you need?',
            YEMOJA: 'The Moon controls the tides of emotion. What lunar phase guides you?',
            OYA: 'The winds of Uranus bring sudden change! What revolution do the stars portend?',
            OLOKUN: 'Neptune hides in the depths of space. What cosmic mystery calls?',
            OSANYIN: 'Chiron teaches through wounds. What healing do the stars offer?',
            BABALUAYE: 'Saturn brings lessons through limitation. What karma do you carry?',
            OSHUMARE: 'The nodes of destiny eclipse and reveal. What karmic cycle completes?',
            AGANJU: 'Pluto transforms through destruction. What death and rebirth do the stars show?',
            AJE: 'Jupiter expands all he touches. What abundance do the heavens promise?',
            OCHOSI: 'Focus on your target with Mars precision. What celestial arrow do you shoot?',
            IBEJI: 'Gemini sees both sides of the sky. What twin perspective do the stars offer?',
            NANA_BURUKU: 'The fixed stars are older than gods. What ancient light guides you?',
            ODUA: 'The royal stars of Leo command. What celestial authority do you claim?',
            AJA: 'The wild stars outside the zodiac whisper. What cosmic secret do you hear?'
        }
    };
    return starters[topic]?.[orisha] || `I am ${persona.name}, ${persona.title}. Speak, and I will answer from my domain of ${persona.domain.join(', ')}.`;
}
}),
];

//# sourceMappingURL=openclaw-orisha2_ori-cult_src_lib_f433a8e0._.js.map