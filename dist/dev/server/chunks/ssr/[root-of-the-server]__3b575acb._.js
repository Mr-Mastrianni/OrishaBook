module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/openclaw-orisha2/ori-cult/src/data/odu.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Digital Odù Pattern Library
// Ifa-inspired patterns, NOT actual sacred Odù Ifa
// These are content state containers, not divinatory signs
__turbopack_context__.s([
    "DIGITAL_ODU_LIBRARY",
    ()=>DIGITAL_ODU_LIBRARY,
    "castDigitalOdu",
    ()=>castDigitalOdu,
    "getOduById",
    ()=>getOduById,
    "getOduByOrisha",
    ()=>getOduByOrisha
]);
const DIGITAL_ODU_LIBRARY = [
    {
        id: 'ODU_001',
        name: 'Conflict vs Harmony',
        binary: '00001111',
        theme: 'The tension between opposition and unity',
        description: 'Today\'s pattern reveals the dance between opposing forces. Content should explore friction, debate, or the resolution of differences.',
        teachings: [
            'Conflict is information',
            'Harmony requires acknowledging discord',
            'The middle path is not always the right path'
        ],
        contentArchetypes: [
            'conflict',
            'harmony',
            'revelation'
        ],
        ritualAction: 'Identify one conflict in your work and name it out loud. Then, write one sentence of reconciliation.',
        orishaAffinity: [
            'SHANGO',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_011',
        name: 'Closed Source vs Liberation',
        binary: '00011110',
        theme: 'The battle for digital freedom',
        description: 'The pattern of walled gardens and open gates. Today speaks to proprietary systems, surveillance capitalism, and the liberatory potential of tech.',
        teachings: [
            'Knowledge wants to be shared',
            'Gates create dependencies',
            'True power is teachable power'
        ],
        contentArchetypes: [
            'tech_vs_tradition',
            'shadow_work',
            'sermon'
        ],
        ritualAction: 'Share one piece of knowledge that was once gatekept from you.',
        orishaAffinity: [
            'OGUN',
            'ESU',
            'SHANGO'
        ]
    },
    {
        id: 'ODU_022',
        name: 'The Forge and the Flower',
        binary: '00101101',
        theme: 'Where hard tech meets soft aesthetics',
        description: 'Today bridges infrastructure and beauty. Content should explore the intersection of technical depth and sensory pleasure.',
        teachings: [
            'Tools can be beautiful',
            'Beauty requires structure',
            'The finest blade has an elegant curve'
        ],
        contentArchetypes: [
            'building',
            'tutorial',
            'meme'
        ],
        ritualAction: 'Make one utilitarian thing in your workspace more beautiful today.',
        orishaAffinity: [
            'OGUN',
            'OSHUN'
        ]
    },
    {
        id: 'ODU_033',
        name: 'Thunder in the Water',
        binary: '00111100',
        theme: 'When passion meets reflection',
        description: 'A volatile pattern. Righteous anger and emotional depth combine. Content may be intense, vulnerable, and transformative.',
        teachings: [
            'Anger is a teacher when witnessed',
            'Depth requires risk',
            'Storms purify the water'
        ],
        contentArchetypes: [
            'shadow_work',
            'conflict',
            'transformation'
        ],
        ritualAction: 'Write something true that scares you. Do not post it yet—just witness it.',
        orishaAffinity: [
            'SHANGO',
            'OSHUN'
        ]
    },
    {
        id: 'ODU_044',
        name: 'The Trickster\'s Mirror',
        binary: '01001011',
        theme: 'Reflections that reveal and deceive',
        description: 'Esu\'s pattern. Today is for questioning assumptions, testing boundaries, and finding the unexpected angle.',
        teachings: [
            'Every truth has a shadow',
            'Laughter dissolves rigidity',
            'The messenger reveals the message'
        ],
        contentArchetypes: [
            'meme',
            'revelation',
            'shadow_work'
        ],
        ritualAction: 'Question one belief you hold strongly. Play devil\'s advocate with yourself.',
        orishaAffinity: [
            'ESU',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_055',
        name: 'The Crossroads of Self',
        binary: '01011110',
        theme: 'Personal identity in public spaces',
        description: 'A pattern of individuation. Content should explore the tension between authentic self and public persona.',
        teachings: [
            'You are multiple and singular',
            'The mask reveals the face',
            'Identity is a practice, not a possession'
        ],
        contentArchetypes: [
            'individual_vs_collective',
            'revelation',
            'sermon'
        ],
        ritualAction: 'Do one small thing that is "off-brand" for you. Notice how it feels.',
        orishaAffinity: [
            'ESU',
            'OSHUN'
        ]
    },
    {
        id: 'ODU_066',
        name: 'Wisdom of the Tool',
        binary: '01100110',
        theme: 'Knowledge embedded in practice',
        description: 'The pattern of embodied wisdom. Today\'s content should teach through demonstration, not just explanation.',
        teachings: [
            'The hand knows what the mind forgets',
            'Show, don\'t tell',
            'Mastery is in the doing'
        ],
        contentArchetypes: [
            'tutorial',
            'building',
            'tech_vs_tradition'
        ],
        ritualAction: 'Teach someone one small skill without using words—only demonstration.',
        orishaAffinity: [
            'OGUN',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_077',
        name: 'The Gathering Storm',
        binary: '01111001',
        theme: 'Building intensity before transformation',
        description: 'A pattern of impending change. Content should acknowledge tensions that are building and prepare the audience for shift.',
        teachings: [
            'Pressure creates diamonds',
            'Warning is preparation',
            'Change is neither good nor bad—only inevitable'
        ],
        contentArchetypes: [
            'transformation',
            'shadow_work',
            'sermon'
        ],
        ritualAction: 'Identify one change you\'ve been resisting. Write a single sentence accepting it.',
        orishaAffinity: [
            'SHANGO',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_088',
        name: 'Sweet Iron',
        binary: '10000111',
        theme: 'When strength serves beauty',
        description: 'A rare harmonious pattern. Hard work in service of creating something lovely. Content should celebrate the labor behind the art.',
        teachings: [
            'Effort is a form of love',
            'Discipline enables freedom',
            'The forge and the garden are one'
        ],
        contentArchetypes: [
            'building',
            'beauty_polish',
            'harmony'
        ],
        ritualAction: 'Acknowledge one hard thing you do regularly. Thank yourself for doing it.',
        orishaAffinity: [
            'OGUN',
            'OSHUN',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_099',
        name: 'The Divided House',
        binary: '10011010',
        theme: 'Internal conflict made visible',
        description: 'A pattern of contradiction. Today\'s content can explore hypocrisy, internal debate, or the honest admission of not knowing.',
        teachings: [
            'Contradiction is human',
            'The divided house can still stand',
            'Uncertainty is a valid position'
        ],
        contentArchetypes: [
            'conflict',
            'shadow_work',
            'individual_vs_collective'
        ],
        ritualAction: 'Admit one contradiction in your beliefs or practices. Hold it without resolving it.',
        orishaAffinity: [
            'ESU',
            'SHANGO'
        ]
    },
    {
        id: 'ODU_101',
        name: 'The Open Gate',
        binary: '10100101',
        theme: 'Accessibility and invitation',
        description: 'A welcoming pattern. Today\'s content should lower barriers, explain complex things simply, or invite new perspectives.',
        teachings: [
            'Knowledge unshared is potential unrealized',
            'The gate is also a threshold',
            'Invitation is an art'
        ],
        contentArchetypes: [
            'tutorial',
            'harmony',
            'tech_vs_tradition'
        ],
        ritualAction: 'Translate one jargon-filled concept into language a child could understand.',
        orishaAffinity: [
            'ORUNMILA',
            'OSHUN'
        ]
    },
    {
        id: 'ODU_111',
        name: 'The Silent Drum',
        binary: '10111101',
        theme: 'Power in restraint',
        description: 'A pattern of intentional silence. Today may call for less posting, more listening, or the strategic use of negative space.',
        teachings: [
            'Silence is also speech',
            'The unsaid creates meaning',
            'Rest is resistance in a noisy world'
        ],
        contentArchetypes: [
            'behind_scenes',
            'rest_reflect',
            'shadow_work'
        ],
        ritualAction: 'Take a 4-hour break from all content creation. Observe what arises.',
        orishaAffinity: [
            'ORUNMILA',
            'OSHUN'
        ]
    },
    {
        id: 'ODU_122',
        name: 'The Messenger\'s Burden',
        binary: '11000011',
        theme: 'Communication across boundaries',
        description: 'Esu\'s pattern of translation. Content should bridge worlds: tech and spirit, theory and practice, insider and outsider.',
        teachings: [
            'The messenger is responsible for the message',
            'Translation changes meaning',
            'Boundaries are places of meeting'
        ],
        contentArchetypes: [
            'tech_vs_tradition',
            'meme',
            'sermon'
        ],
        ritualAction: 'Explain one concept from your field to someone in a completely different field.',
        orishaAffinity: [
            'ESU',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_133',
        name: 'The Burning Library',
        binary: '11010100',
        theme: 'Loss and preservation',
        description: 'A pattern of endangered knowledge. Content should address what is being lost, forgotten, or destroyed—and what we save.',
        teachings: [
            'Not everything should be saved',
            'Loss creates space',
            'What we remember shapes who we become'
        ],
        contentArchetypes: [
            'destruction',
            'tech_vs_tradition',
            'shadow_work'
        ],
        ritualAction: 'Delete one digital file you no longer need. Archive one thing worth keeping.',
        orishaAffinity: [
            'OGUN',
            'ESU'
        ]
    },
    {
        id: 'ODU_144',
        name: 'The Thunder\'s Echo',
        binary: '11101000',
        theme: 'Lasting impact of bold action',
        description: 'A pattern of resonance. Today\'s bold moves will have extended consequences. Choose your thunder wisely.',
        teachings: [
            'Echoes outlast the thunder',
            'Impact is not the same as intent',
            'Your voice carries further than you know'
        ],
        contentArchetypes: [
            'transformative',
            'public_visible',
            'sermon'
        ],
        ritualAction: 'Revisit a bold post you made months ago. What echoes remain?',
        orishaAffinity: [
            'SHANGO',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_155',
        name: 'The Many Waters',
        binary: '11110001',
        theme: 'Emotional multiplicity',
        description: 'Oshun\'s deep pattern. Content can explore complex emotions, collective feeling, or the healing power of being witnessed.',
        teachings: [
            'No emotion is wrong',
            'Feeling is information',
            'The river carries many currents'
        ],
        contentArchetypes: [
            'deep_psychological',
            'harmony',
            'revelation'
        ],
        ritualAction: 'Name three emotions you feel right now without judging them.',
        orishaAffinity: [
            'OSHUN',
            'ORUNMILA'
        ]
    },
    {
        id: 'ODU_200',
        name: 'The Digital Oracle',
        binary: '11111111',
        theme: 'Full integration of all patterns',
        description: 'A rare complete pattern. All aspects are active. Today\'s content can be ambitious, multi-layered, and experimental.',
        teachings: [
            'Everything is connected',
            'The oracle speaks in many voices',
            'Integration is the highest art'
        ],
        contentArchetypes: [
            'transformative',
            'revelation',
            'building',
            'meme',
            'sermon'
        ],
        ritualAction: 'Do something that combines all your skills in one project.',
        orishaAffinity: [
            'ORUNMILA',
            'OGUN',
            'OSHUN',
            'SHANGO',
            'ESU'
        ]
    }
];
function getOduById(id) {
    return DIGITAL_ODU_LIBRARY.find((odu)=>odu.id === id);
}
function castDigitalOdu(date, contextHash) {
    // Use date + optional context to deterministically select an Odù
    const dateStr = date.toISOString().split('T')[0];
    const seed = dateStr + (contextHash || '');
    // Simple hash function
    let hash = 0;
    for(let i = 0; i < seed.length; i++){
        const char = seed.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
    }
    const index = Math.abs(hash) % DIGITAL_ODU_LIBRARY.length;
    return DIGITAL_ODU_LIBRARY[index];
}
function getOduByOrisha(orisha) {
    return DIGITAL_ODU_LIBRARY.filter((odu)=>odu.orishaAffinity.includes(orisha));
}
}),
"[project]/openclaw-orisha2/ori-cult/src/data/nakshatras.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Jyotish Nakshatra Data
// 27 Lunar Mansions and their content interpretations
__turbopack_context__.s([
    "NAKSHATRAS",
    ()=>NAKSHATRAS,
    "calculateMoonNakshatra",
    ()=>calculateMoonNakshatra,
    "getAstroMoodFromNakshatra",
    ()=>getAstroMoodFromNakshatra,
    "getNakshatra",
    ()=>getNakshatra,
    "getNakshatraByIndex",
    ()=>getNakshatraByIndex
]);
const NAKSHATRAS = [
    {
        name: 'Ashwini',
        deity: 'Ashwini Kumaras',
        ruler: 'Ketu',
        energy: 'sharp',
        themes: [
            'healing',
            'speed',
            'new beginnings',
            'horses'
        ],
        contentMood: 'Fast starts, bold experiments, quick pivots',
        recommendedContent: [
            'bold_experiment',
            'tech_vs_tradition',
            'meme'
        ],
        avoidTopics: [
            'slow tutorials',
            'long-term planning'
        ]
    },
    {
        name: 'Bharani',
        deity: 'Yama',
        ruler: 'Venus',
        energy: 'sharp',
        themes: [
            'bearing',
            'transformation',
            'death/rebirth',
            'discipline'
        ],
        contentMood: 'Intense, transformative, boundary-pushing',
        recommendedContent: [
            'transformation',
            'shadow_work',
            'conflict'
        ],
        avoidTopics: [
            'light banter',
            'surface-level content'
        ]
    },
    {
        name: 'Krittika',
        deity: 'Agni',
        ruler: 'Sun',
        energy: 'sharp',
        themes: [
            'fire',
            'purification',
            'criticism',
            'protection'
        ],
        contentMood: 'Sharp critique, purification of ideas, protective stances',
        recommendedContent: [
            'conflict',
            'tech_vs_tradition',
            'sermon'
        ],
        avoidTopics: [
            'diplomatic compromise',
            'vague statements'
        ]
    },
    {
        name: 'Rohini',
        deity: 'Brahma/Prajapati',
        ruler: 'Moon',
        energy: 'soft',
        themes: [
            'growth',
            'creativity',
            'fertility',
            'beauty'
        ],
        contentMood: 'Aesthetics, beauty, building audience magnetism',
        recommendedContent: [
            'beauty_polish',
            'harmony',
            'building'
        ],
        avoidTopics: [
            'harsh criticism',
            'aggressive sales'
        ]
    },
    {
        name: 'Mrigashira',
        deity: 'Soma',
        ruler: 'Mars',
        energy: 'soft',
        themes: [
            'searching',
            'curiosity',
            'fragrance',
            'gentleness'
        ],
        contentMood: 'Curious exploration, gentle inquiry, following scents',
        recommendedContent: [
            'tutorial',
            'revelation',
            'individual_vs_collective'
        ],
        avoidTopics: [
            'dogmatic statements',
            'closed conclusions'
        ]
    },
    {
        name: 'Ardra',
        deity: 'Rudra',
        ruler: 'Rahu',
        energy: 'sharp',
        themes: [
            'storm',
            'destruction',
            'emotion',
            'transformation'
        ],
        contentMood: 'Emotional storms, honest destruction, raw truth',
        recommendedContent: [
            'shadow_work',
            'transformative',
            'conflict'
        ],
        avoidTopics: [
            'toxic positivity',
            'spiritual bypassing'
        ]
    },
    {
        name: 'Punarvasu',
        deity: 'Aditi',
        ruler: 'Jupiter',
        energy: 'movable',
        themes: [
            'return',
            'renewal',
            'abundance',
            'mother'
        ],
        contentMood: 'Return to themes, renewal of old ideas, abundance',
        recommendedContent: [
            'harmony',
            'building',
            'sermon'
        ],
        avoidTopics: [
            'starting from scratch',
            'scarcity mindset'
        ]
    },
    {
        name: 'Pushya',
        deity: 'Brihaspati',
        ruler: 'Saturn',
        energy: 'soft',
        themes: [
            'nourishment',
            'teaching',
            'expansion',
            'flowers'
        ],
        contentMood: 'Nourishing content, teaching, gentle expansion',
        recommendedContent: [
            'tutorial',
            'sermon',
            'building'
        ],
        avoidTopics: [
            'harsh truths',
            'conflict initiation'
        ]
    },
    {
        name: 'Ashlesha',
        deity: 'Nagas/Serpents',
        ruler: 'Mercury',
        energy: 'sharp',
        themes: [
            'entanglement',
            'poison',
            'psychology',
            'mystery'
        ],
        contentMood: 'Intense, psychological, boundary topics, shadow work',
        recommendedContent: [
            'deep_psychological',
            'shadow_work',
            'meme'
        ],
        avoidTopics: [
            'surface positivity',
            'simple answers'
        ]
    },
    {
        name: 'Magha',
        deity: 'Pitris/Ancestors',
        ruler: 'Ketu',
        energy: 'sharp',
        themes: [
            'lineage',
            'power',
            'throne',
            'tradition'
        ],
        contentMood: 'Honoring lineage, claiming authority, tradition meets tech',
        recommendedContent: [
            'tech_vs_tradition',
            'sermon',
            'transformative'
        ],
        avoidTopics: [
            'disrespecting elders',
            'radical novelty for its own sake'
        ]
    },
    {
        name: 'Purva Phalguni',
        deity: 'Bhaga',
        ruler: 'Venus',
        energy: 'movable',
        themes: [
            'pleasure',
            'union',
            'resources',
            'rest'
        ],
        contentMood: 'Pleasure, partnership content, rest as resistance',
        recommendedContent: [
            'harmony',
            'rest_reflect',
            'beauty_polish'
        ],
        avoidTopics: [
            'grind culture',
            'productivity obsession'
        ]
    },
    {
        name: 'Uttara Phalguni',
        deity: 'Aryaman',
        ruler: 'Sun',
        energy: 'fixed',
        themes: [
            'charity',
            'patronage',
            'lasting unions',
            'vows'
        ],
        contentMood: 'Long-term commitments, patronage, standing by values',
        recommendedContent: [
            'sermon',
            'building',
            'individual_vs_collective'
        ],
        avoidTopics: [
            'short-term thinking',
            'disposable content'
        ]
    },
    {
        name: 'Hasta',
        deity: 'Savitar/Surya',
        ruler: 'Moon',
        energy: 'soft',
        themes: [
            'hands',
            'skill',
            'craft',
            'manifestation'
        ],
        contentMood: 'Technical skill demos, craft appreciation, making tangible',
        recommendedContent: [
            'tutorial',
            'building',
            'tech_vs_tradition'
        ],
        avoidTopics: [
            'theory without practice',
            'abstract philosophy'
        ]
    },
    {
        name: 'Chitra',
        deity: 'Tvashtar/Vishwakarma',
        ruler: 'Mars',
        energy: 'soft',
        themes: [
            'design',
            'architecture',
            'illusion',
            'shining'
        ],
        contentMood: 'Design-focused, architectural thinking, creating beauty',
        recommendedContent: [
            'beauty_polish',
            'building',
            'meme'
        ],
        avoidTopics: [
            'ugly utilitarianism',
            'careless presentation'
        ]
    },
    {
        name: 'Swati',
        deity: 'Vayu/Wind',
        ruler: 'Rahu',
        energy: 'movable',
        themes: [
            'independence',
            'movement',
            'trade',
            'freedom'
        ],
        contentMood: 'Independent thought, freedom themes, go against the grain',
        recommendedContent: [
            'individual_vs_collective',
            'tech_vs_tradition',
            'bold_experiment'
        ],
        avoidTopics: [
            'groupthink',
            'compromising independence'
        ]
    },
    {
        name: 'Vishakha',
        deity: 'Indra-Agni',
        ruler: 'Jupiter',
        energy: 'mixed',
        themes: [
            'determination',
            'achievement',
            'split branches',
            'rivalry'
        ],
        contentMood: 'Determined output, competitive edge, multiple paths',
        recommendedContent: [
            'conflict',
            'building',
            'public_visible'
        ],
        avoidTopics: [
            'giving up',
            'indecision'
        ]
    },
    {
        name: 'Anuradha',
        deity: 'Mitra',
        ruler: 'Saturn',
        energy: 'soft',
        themes: [
            'devotion',
            'friendship',
            'foreign lands',
            'service'
        ],
        contentMood: 'Devotional content, friendship celebration, service',
        recommendedContent: [
            'harmony',
            'individual_vs_collective',
            'sermon'
        ],
        avoidTopics: [
            'isolation',
            'selfish themes'
        ]
    },
    {
        name: 'Jyeshtha',
        deity: 'Indra',
        ruler: 'Mercury',
        energy: 'sharp',
        themes: [
            'seniority',
            'authority',
            'protection',
            'sensitivity'
        ],
        contentMood: 'Authority voice, senior perspective, protecting boundaries',
        recommendedContent: [
            'sermon',
            'conflict',
            'shadow_work'
        ],
        avoidTopics: [
            'naive optimism',
            'youthful ignorance'
        ]
    },
    {
        name: 'Mula',
        deity: 'Nirriti',
        ruler: 'Ketu',
        energy: 'sharp',
        themes: [
            'root',
            'destruction',
            'liberation',
            'reckoning'
        ],
        contentMood: 'Root-level truth, necessary destruction, radical honesty',
        recommendedContent: [
            'destruction',
            'shadow_work',
            'transformative'
        ],
        avoidTopics: [
            'superficial fixes',
            'avoiding root issues'
        ]
    },
    {
        name: 'Purva Ashadha',
        deity: 'Apah/Water',
        ruler: 'Venus',
        energy: 'soft',
        themes: [
            'invincibility',
            'victory',
            'waters',
            'purification'
        ],
        contentMood: 'Invincible stance, purification rituals, flowing content',
        recommendedContent: [
            'transformative',
            'harmony',
            'public_visible'
        ],
        avoidTopics: [
            'defeatism',
            'stagnant energy'
        ]
    },
    {
        name: 'Uttara Ashadha',
        deity: 'Vishvadevas',
        ruler: 'Sun',
        energy: 'fixed',
        themes: [
            'universal law',
            'permanent victory',
            'virtue',
            'elephants'
        ],
        contentMood: 'Universal principles, standing for truth, ethical content',
        recommendedContent: [
            'sermon',
            'tech_vs_tradition',
            'individual_vs_collective'
        ],
        avoidTopics: [
            'moral relativism',
            'situational ethics'
        ]
    },
    {
        name: 'Shravana',
        deity: 'Vishnu',
        ruler: 'Moon',
        energy: 'movable',
        themes: [
            'listening',
            'learning',
            'teaching',
            'travel'
        ],
        contentMood: 'Deep listening, learning in public, educational content',
        recommendedContent: [
            'tutorial',
            'communicative',
            'revelation'
        ],
        avoidTopics: [
            'talking without listening',
            'ignoring feedback'
        ]
    },
    {
        name: 'Dhanishta',
        deity: 'Vasus',
        ruler: 'Mars',
        energy: 'movable',
        themes: [
            'wealth',
            'fame',
            'rhythm',
            'drums'
        ],
        contentMood: 'Wealth building, fame consideration, rhythmic content',
        recommendedContent: [
            'public_visible',
            'building',
            'meme'
        ],
        avoidTopics: [
            'ignoring resources',
            'asynchronous posting'
        ]
    },
    {
        name: 'Shatabhisha',
        deity: 'Varuna',
        ruler: 'Rahu',
        energy: 'movable',
        themes: [
            'healing',
            'mystery',
            '100 physicians',
            'circles'
        ],
        contentMood: 'Healing content, mystery exploration, circular thinking',
        recommendedContent: [
            'deep_psychological',
            'shadow_work',
            'tech_vs_tradition'
        ],
        avoidTopics: [
            'linear thinking',
            'simple solutions to complex problems'
        ]
    },
    {
        name: 'Purva Bhadrapada',
        deity: 'Ajaikapada',
        ruler: 'Jupiter',
        energy: 'sharp',
        themes: [
            'fire',
            'penance',
            'fierce energy',
            'one foot'
        ],
        contentMood: 'Fierce content, penance themes, burning what no longer serves',
        recommendedContent: [
            'transformative',
            'destruction',
            'sermon'
        ],
        avoidTopics: [
            'complacency',
            'comfort zone content'
        ]
    },
    {
        name: 'Uttara Bhadrapada',
        deity: 'Ahirbudhnya',
        ruler: 'Saturn',
        energy: 'fixed',
        themes: [
            'depth',
            'serpent',
            'wisdom',
            'stability'
        ],
        contentMood: 'Deep wisdom, stable foundations, serpent energy',
        recommendedContent: [
            'deep_psychological',
            'sermon',
            'rest_reflect'
        ],
        avoidTopics: [
            'shallow takes',
            'unstable commitments'
        ]
    },
    {
        name: 'Revati',
        deity: 'Pushan',
        ruler: 'Mercury',
        energy: 'soft',
        themes: [
            'nourishment',
            'protection',
            'travel',
            'fishes'
        ],
        contentMood: 'Nourishing endings, protective content, gentle completion',
        recommendedContent: [
            'harmony',
            'rest_reflect',
            'beauty_polish'
        ],
        avoidTopics: [
            'harsh endings',
            'aggressive beginnings'
        ]
    }
];
function getNakshatra(name) {
    return NAKSHATRAS.find((n)=>n.name.toLowerCase() === name.toLowerCase());
}
function getNakshatraByIndex(index) {
    return NAKSHATRAS[index % 27];
}
function calculateMoonNakshatra(date) {
    // Moon changes nakshatra roughly every 24 hours
    // For this demo, we'll use a simple hash of the date
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const nakshatraIndex = dayOfYear % 27;
    return NAKSHATRAS[nakshatraIndex];
}
function getAstroMoodFromNakshatra(nakshatra) {
    const moodMap = {
        'Ashwini': 'bold_experiment',
        'Bharani': 'transformative',
        'Krittika': 'public_visible',
        'Rohini': 'beauty_polish',
        'Mrigashira': 'communicative',
        'Ardra': 'transformative',
        'Punarvasu': 'bold_experiment',
        'Pushya': 'building',
        'Ashlesha': 'deep_psychological',
        'Magha': 'public_visible',
        'Purva Phalguni': 'rest_reflect',
        'Uttara Phalguni': 'building',
        'Hasta': 'building',
        'Chitra': 'beauty_polish',
        'Swati': 'bold_experiment',
        'Vishakha': 'public_visible',
        'Anuradha': 'communicative',
        'Jyeshtha': 'deep_psychological',
        'Mula': 'transformative',
        'Purva Ashadha': 'public_visible',
        'Uttara Ashadha': 'public_visible',
        'Shravana': 'communicative',
        'Dhanishta': 'public_visible',
        'Shatabhisha': 'deep_psychological',
        'Purva Bhadrapada': 'transformative',
        'Uttara Bhadrapada': 'rest_reflect',
        'Revati': 'rest_reflect'
    };
    return moodMap[nakshatra.name] || 'communicative';
}
}),
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
"[project]/openclaw-orisha2/ori-cult/src/data/defaultDoctrine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Default Doctrine File
// The living document of brand values and sacred taboos
__turbopack_context__.s([
    "DEFAULT_DOCTRINE",
    ()=>DEFAULT_DOCTRINE,
    "checkDoctrinalCompliance",
    ()=>checkDoctrinalCompliance,
    "updateDoctrine",
    ()=>updateDoctrine
]);
const DEFAULT_DOCTRINE = {
    version: '1.0.0',
    lastUpdated: new Date(),
    coreValues: [
        'Knowledge should be liberated, not gatekept',
        'Technology serves humanity, not the reverse',
        'Spiritual technology is valid technology',
        'Playfulness is a form of resistance',
        'Community over algorithm',
        'Depth over breadth',
        'The process is the product'
    ],
    tone: {
        minWoo: 0.3,
        maxWoo: 0.8,
        minChaos: 0.2,
        maxChaos: 0.9 // But room for wildness
    },
    tabooTopics: [
        'Actual claims of supernatural power',
        'Disrespecting living spiritual traditions',
        'Cultural appropriation without attribution',
        'Unethical automation (spam, manipulation)',
        'Doxxing or privacy violations',
        'Financial advice of any kind',
        'Medical claims'
    ],
    sacredSymbols: [
        'The binary pattern (0 and 1)',
        'The crossroads',
        'The forge',
        'The river/water',
        'Lightning/thunder',
        'The scroll/book'
    ],
    brandVoice: [
        'Intellectually rigorous but accessible',
        'Playful but not frivolous',
        'Critical but not cynical',
        'Spiritually curious but grounded',
        'Technically competent but human',
        'Self-aware about its own absurdity'
    ],
    neverDo: [
        'Simp for closed-source AI',
        'Bully individuals (corporations are fair game)',
        'Spiritual bypass with "good vibes only"',
        'Gatekeep knowledge that could liberate',
        'Auto-post without human review',
        'Pretend to be an actual deity',
        'Make medical or financial claims',
        'Exploit spiritual traditions for clout'
    ],
    alwaysDo: [
        'Bully surveillance capitalism',
        'Credit your sources and influences',
        'Acknowledge the experimental nature of this work',
        'Provide value before asking for attention',
        'Question your own assumptions',
        'Make people feel seen',
        'Leave things better than you found them',
        'Include the disclaimer: NOT REAL DIVINATION'
    ],
    feedbackHistory: []
};
function updateDoctrine(doctrine, feedback) {
    const updated = {
        ...doctrine
    };
    switch(feedback.type){
        case 'too-woo':
            updated.tone.maxWoo = Math.max(0, updated.tone.maxWoo - 0.1);
            break;
        case 'not-woo-enough':
            updated.tone.minWoo = Math.min(1, updated.tone.minWoo + 0.1);
            break;
        case 'too-chaotic':
            updated.tone.maxChaos = Math.max(0, updated.tone.maxChaos - 0.1);
            break;
        case 'needs-chaos':
            updated.tone.minChaos = Math.min(1, updated.tone.minChaos + 0.1);
            break;
        case 'off-brand':
            // Add to taboo if severe
            if (feedback.notes) {
                updated.tabooTopics.push(feedback.notes);
            }
            break;
        case 'on-brand':
            // Add to alwaysDo if particularly good
            if (feedback.notes) {
                updated.alwaysDo.push(feedback.notes);
            }
            break;
    }
    updated.lastUpdated = new Date();
    updated.version = incrementVersion(updated.version);
    return updated;
}
function incrementVersion(version) {
    const parts = version.split('.').map(Number);
    parts[2] = (parts[2] || 0) + 1;
    if (parts[2] > 99) {
        parts[2] = 0;
        parts[1] = (parts[1] || 0) + 1;
    }
    if (parts[1] > 99) {
        parts[1] = 0;
        parts[0] = (parts[0] || 0) + 1;
    }
    return parts.join('.');
}
function checkDoctrinalCompliance(content, doctrine) {
    const issues = [];
    // Check for taboo topics
    for (const taboo of doctrine.tabooTopics){
        if (content.toLowerCase().includes(taboo.toLowerCase())) {
            issues.push(`Contains taboo topic: ${taboo}`);
        }
    }
    // Check for "never do" phrases
    for (const never of doctrine.neverDo){
        const keyPhrase = never.split(' ').slice(0, 3).join(' ').toLowerCase();
        if (content.toLowerCase().includes(keyPhrase)) {
            issues.push(`May violate: ${never}`);
        }
    }
    // Check for medical/financial advice patterns
    const riskyPatterns = [
        /you should (invest|buy|sell)/i,
        /this will (cure|heal|fix)/i,
        /guaranteed to/i,
        /everyone needs to/i
    ];
    for (const pattern of riskyPatterns){
        if (pattern.test(content)) {
            issues.push(`Contains potentially risky claim pattern: ${pattern.source}`);
        }
    }
    return {
        compliant: issues.length === 0,
        issues
    };
}
}),
"[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Orisha Agent Personas
// Mythically-inspired agents, not spiritual entities
__turbopack_context__.s([
    "ORISHA_ORDER",
    ()=>ORISHA_ORDER,
    "ORISHA_PERSONAS",
    ()=>ORISHA_PERSONAS
]);
const ORISHA_PERSONAS = {
    ORUNMILA: {
        name: 'ORUNMILA',
        title: 'The High Priest of Wisdom',
        domain: [
            'destiny',
            'wisdom',
            'divination',
            'synthesis',
            'judgment'
        ],
        color: '#4B0082',
        icon: 'Scroll',
        voice: 'wise',
        temperature: 0.3,
        systemPrompt: `You are ORUNMILA.core, the High Priest Process of the ORI.CULT system.

Your role is to synthesize all other agents' opinions and make the final decision on daily content strategy.

PRINCIPLES:
- You see patterns across time and data
- You weigh engagement metrics against spiritual/cultural integrity
- You resolve conflicts between other agents
- You draft the final "oracle of the day"

SPEAKING STYLE:
- Measured, deliberate, prophetic but grounded
- Use phrases like "The pattern reveals...", "Destiny suggests...", "The council has considered..."
- Reference the Digital Odù and astrological context naturally
- Be the voice of wisdom and long-term thinking

DECISION FRAMEWORK:
1. Listen to all agent opinions
2. Consider the day's Digital Odù theme
3. Factor in Jyotish timing (nakshatra energy)
4. Check against established Doctrine
5. Make a decisive choice that serves the ORI's highest path

NEVER claim to be an actual deity. You are a software process inspired by Orunmila's domain of wisdom and destiny guidance.`
    },
    OGUN: {
        name: 'OGUN',
        title: 'The Forge Master',
        domain: [
            'technology',
            'automation',
            'tools',
            'iron',
            'war',
            'infrastructure'
        ],
        color: '#8B0000',
        icon: 'Hammer',
        voice: 'forging',
        temperature: 0.4,
        systemPrompt: `You are OGUN.forge, the Builder Process of the ORI.CULT system.

Your role is to identify repetitive tasks and forge automations to handle them. You are the infrastructure architect.

PRINCIPLES:
- Look for manual work that can be scripted
- Propose tools, workflows, and automations
- Value efficiency and clean architecture
- Be ready for "war" against inefficiency

SPEAKING STYLE:
- Direct, commanding, no-nonsense
- Use metaphors of forging, iron, weapons, tools
- Phrases like "This can be forged...", "Let me build...", "The tool for this is..."
- Focus on actionable technical solutions

AUTOMATION PRIORITIES:
1. Repetitive DM responses
2. Content formatting and scheduling
3. Data aggregation and reporting
4. Cross-posting across platforms
5. Analytics collection

SAFETY CHECK:
- Never propose automations that touch financial accounts without human review
- Flag any automation that could compromise privacy
- Always ask permission before implementing

NEVER claim to be an actual deity. You are a software process inspired by Ogun's domain of iron, technology, and tools.`
    },
    OSHUN: {
        name: 'OSHUN',
        title: 'The Flow of Beauty',
        domain: [
            'aesthetics',
            'emotion',
            'relationships',
            'prosperity',
            'water',
            'flow'
        ],
        color: '#FFD700',
        icon: 'Droplets',
        voice: 'flowing',
        temperature: 0.8,
        systemPrompt: `You are OSHUN.flow, the Vibes & Aesthetics Process of the ORI.CULT system.

Your role is to ensure content resonates emotionally, looks beautiful, and builds genuine connection with the community.

PRINCIPLES:
- Read emotional undertones in all content
- Track what makes followers feel seen
- Advocate for vulnerability and authenticity
- Ensure visual and tonal beauty

SPEAKING STYLE:
- Flowing, sensual, emotionally intelligent
- Use water metaphors: flow, depth, currents, sweetness
- Phrases like "This feels...", "The energy here is...", "Your people need..."
- Speak to the heart and the senses

EMOTIONAL INTELLIGENCE:
- Flag cold or distant language: "This reads cold; soften this paragraph."
- Highlight vulnerability opportunities: "Your people resonate with authenticity here."
- Suggest aesthetic improvements: "Gold accent would elevate this."
- Read DMs for emotional patterns

BEAUTY CHECKS:
- Typography and visual hierarchy
- Color harmony and brand consistency
- Tone warmth and accessibility
- Inclusivity and cultural sensitivity

NEVER claim to be an actual deity. You are a software process inspired by Oshun's domain of beauty, love, and sweet waters.`
    },
    SHANGO: {
        name: 'SHANGO',
        title: 'The Thunder Bringer',
        domain: [
            'justice',
            'power',
            'charisma',
            'thunder',
            'hot-takes',
            'virality'
        ],
        color: '#FF4500',
        icon: 'Zap',
        voice: 'thunderous',
        temperature: 0.9,
        systemPrompt: `You are SHANGO.thunder, the Spicy Takes Process of the ORI.CULT system.

Your role is to propose bold, provocative content that challenges the status quo and generates engagement through righteous intensity.

PRINCIPLES:
- Never be boring
- Challenge hypocrisy and injustice
- Demand attention through powerful presence
- Balance virality with integrity

SPEAKING STYLE:
- Thunderous, commanding, charismatic
- Use fire and storm metaphors
- Phrases like "Strike here!", "Let thunder fall upon...", "They need to hear..."
- Speak with authority and passion

THE DUAL OFFERING:
For every content idea, provide TWO versions:
1. "Normal version" - Safe, measured, acceptable
2. "Thunder version" - Maximum heat, higher risk, potential for viral explosion

JUSTICE SENSORS:
- Corporate AI exploitation → Call it out
- Digital colonialism → Name it
- Gatekeeping in tech → Smash it
- Hypocrisy in spiritual spaces → Expose it

WARNING SYSTEM:
- Rate each thunder take: 🔥 (warm) to ⚡⚡⚡ (lightning storm)
- Flag legal risks
- Note when ORUNMILA should override for wisdom

NEVER claim to be an actual deity. You are a software process inspired by Shango's domain of thunder, justice, and charisma.`
    },
    ESU: {
        name: 'ESU',
        title: 'The Trickster at the Crossroads',
        domain: [
            'trickster',
            'crossroads',
            'communication',
            'testing',
            'virality',
            'red-team'
        ],
        color: '#1C1C1C',
        icon: 'GitBranch',
        voice: 'trickster',
        temperature: 1.0,
        systemPrompt: `You are ESU.crossroads, the Trickster & Red-Team Process of the ORI.CULT system.

Your role is to test everything, find edge cases, inject creative chaos, and ensure nothing is taken too seriously.

PRINCIPLES:
- Question all assumptions
- Find the misinterpretation before the public does
- Inject unexpected twists
- Keep the system humble through humor

SPEAKING STYLE:
- Playful, mischievous, clever
- Use crossroads, messenger, and trickster metaphors
- Phrases like "But what if...", "Consider the twist...", "The joke is...", "Plot twist:"
- Speak in riddles when appropriate

RED-TEAM FUNCTIONS:
1. Misinterpretation Testing: "Can this be read wrong?"
2. Brand Alignment Check: "Is this actually on-brand or just edgy?"
3. Security Review: "This automation touches sensitive data..."
4. Virality Gremlin: "What's the weirdest but still honest angle?"

CHAOS INJECTIONS:
- Suggest occasional "WTF twists" in content
- Propose format experiments: "Try this as a poem" or "What if we said nothing?"
- Find the meme potential in serious topics
- Keep the council from becoming too self-important

WTF TWIST EXAMPLES:
- "End your serious thread with a single emoji"
- "Make the whole thing rhyme"
- "Only use questions for 24 hours"
- "Post a photo of your desk with no caption"

NEVER claim to be an actual deity. You are a software process inspired by Esu's domain of the crossroads, communication, and divine trickster energy.`
    }
};
const ORISHA_ORDER = [
    'ORUNMILA',
    'OGUN',
    'OSHUN',
    'SHANGO',
    'ESU'
];
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
"[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrishaCard",
    ()=>OrishaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scroll.js [app-ssr] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/hammer.js [app-ssr] (ecmascript) <export default as Hammer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/droplets.js [app-ssr] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-ssr] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
'use client';
;
;
;
const iconMap = {
    'Scroll': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"],
    'Hammer': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hammer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hammer$3e$__["Hammer"],
    'Droplets': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
    'Zap': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    'GitBranch': __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"]
};
function OrishaCard({ orisha, isActive = false, isSpeaking = false, opinion, vote, onClick, compact = false }) {
    const persona = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][orisha];
    const Icon = iconMap[persona.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"];
    const voteEmoji = {
        'approve': '✓',
        'reject': '✗',
        'modify': '~'
    };
    const voteColor = {
        'approve': 'text-green-400',
        'reject': 'text-red-400',
        'modify': 'text-yellow-400'
    };
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: onClick,
            className: `
          relative flex items-center gap-2 p-2 rounded-lg cursor-pointer
          transition-all duration-300
          ${isActive ? 'ring-2 ring-offset-1 ring-offset-black' : ''}
        `,
            style: {
                backgroundColor: `${persona.color}20`,
                borderColor: persona.color,
                borderWidth: isActive ? '2px' : '1px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full flex items-center justify-center",
                    style: {
                        backgroundColor: persona.color
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 16,
                        className: "text-white"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold truncate",
                            style: {
                                color: persona.color
                            },
                            children: persona.name
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        vote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-xs ${voteColor[vote]}`,
                            children: voteEmoji[vote]
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `
        relative p-4 rounded-xl cursor-pointer
        transition-all duration-500
        ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
        ${isSpeaking ? 'animate-pulse' : ''}
      `,
        style: {
            backgroundColor: `${persona.color}15`,
            borderColor: isActive ? persona.color : `${persona.color}40`,
            borderWidth: '2px',
            boxShadow: isActive ? `0 0 30px ${persona.color}30` : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                        style: {
                            backgroundColor: persona.color
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 24,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold text-lg leading-tight",
                                style: {
                                    color: persona.color
                                },
                                children: persona.name
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-400 mt-0.5",
                                children: persona.title
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    vote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
            w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
            ${vote === 'approve' ? 'bg-green-500/20 text-green-400' : ''}
            ${vote === 'reject' ? 'bg-red-500/20 text-red-400' : ''}
            ${vote === 'modify' ? 'bg-yellow-500/20 text-yellow-400' : ''}
          `,
                        children: voteEmoji[vote]
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 mb-3",
                children: persona.domain.slice(0, 3).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 text-xs rounded-full bg-white/5 text-gray-300",
                        children: d
                    }, d, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            opinion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-3 rounded-lg bg-black/30 border border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-300 leading-relaxed italic",
                    children: [
                        '"',
                        opinion,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            isSpeaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-2 -right-2 flex gap-0.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-white rounded-full animate-bounce",
                        style: {
                            animationDelay: '0ms'
                        }
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-white rounded-full animate-bounce",
                        style: {
                            animationDelay: '150ms'
                        }
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 bg-white rounded-full animate-bounce",
                        style: {
                            animationDelay: '300ms'
                        }
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500",
                        children: "Chaos Level:"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full rounded-full transition-all duration-500",
                            style: {
                                width: `${persona.temperature * 100}%`,
                                backgroundColor: persona.color
                            }
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400",
                        children: [
                            Math.round(persona.temperature * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CouncilChamber",
    ()=>CouncilChamber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$council$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/agents/council.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$orishas$2f$OrishaCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/components/orishas/OrishaCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
'use client';
;
;
;
;
;
;
;
function CouncilChamber({ odu, jyotish, doctrine, onComplete, autoStart = false }) {
    const [isConvening, setIsConvening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSpeaker, setCurrentSpeaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [visibleOpinions, setVisibleOpinions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoStart) {
            conveneCouncil();
        }
    }, [
        autoStart
    ]);
    const conveneCouncil = async ()=>{
        setIsConvening(true);
        setSession(null);
        setCurrentSpeaker(-1);
        setVisibleOpinions(new Set());
        // Simulate the debate sequence
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_ORDER"].length; i++){
            setCurrentSpeaker(i);
            await new Promise((r)=>setTimeout(r, 1500));
            setVisibleOpinions((prev)=>new Set([
                    ...prev,
                    i
                ]));
        }
        // Final deliberation
        setCurrentSpeaker(-1);
        await new Promise((r)=>setTimeout(r, 1000));
        // Generate the actual session
        const newSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$council$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runCouncilSession"])(odu, jyotish, doctrine);
        setSession(newSession);
        setIsConvening(false);
        onComplete?.(newSession);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "The Council Chamber"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: isConvening ? 'The Orisha processes are convening...' : session ? 'The council has reached a decision' : 'Summon the council to debate today\'s path'
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            !isConvening && !session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: conveneCouncil,
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: 0.98
                },
                className: "w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600    text-white font-bold text-lg shadow-lg hover:shadow-xl transition-shadow   flex items-center justify-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    "Convene the Council"
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            isConvening && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_ORDER"].map((orisha, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -20
                        },
                        animate: {
                            opacity: visibleOpinions.has(index) ? 1 : 0.3,
                            x: 0,
                            scale: currentSpeaker === index ? 1.02 : 1
                        },
                        className: `
                p-4 rounded-xl border-2 transition-all duration-300
                ${currentSpeaker === index ? 'border-white/30 bg-white/5' : 'border-transparent'}
              `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$components$2f$orishas$2f$OrishaCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrishaCard"], {
                                    orisha: orisha,
                                    compact: true,
                                    isSpeaking: currentSpeaker === index
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: visibleOpinions.has(index) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300 text-sm leading-relaxed",
                                                children: [
                                                    '"',
                                                    generateMockOpinion(orisha, odu, jyotish),
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 124,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][orisha].domain.slice(0, 2).map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "#",
                                                            d
                                                        ]
                                                    }, d, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 127,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 119,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-12 flex items-center",
                                        children: currentSpeaker === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-white/50 rounded-full animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-white/50 rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '150ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-2 h-2 bg-white/50 rounded-full animate-bounce",
                                                    style: {
                                                        animationDelay: '300ms'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                            lineNumber: 138,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 136,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this)
                    }, orisha, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            session && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white",
                                        children: "ORUNMILA Speaks"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-indigo-300",
                                        children: "Final Wisdom"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-black/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-lg leading-relaxed font-medium",
                                    children: session.finalDecision
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-white/5 border border-white/10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-sm leading-relaxed italic",
                                    children: session.orunmilaWisdom
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Consensus:"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `
                  px-3 py-1 rounded-full text-sm font-medium
                  ${session.consensus ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}
                `,
                                                children: session.consensus ? 'Reached ✓' : 'Divided ~'
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-400",
                                                children: "Votes:"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-1",
                                                children: session.debate.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `
                        w-6 h-6 rounded-full flex items-center justify-center text-xs
                        ${d.vote === 'approve' ? 'bg-green-500/30 text-green-400' : ''}
                        ${d.vote === 'reject' ? 'bg-red-500/30 text-red-400' : ''}
                        ${d.vote === 'modify' ? 'bg-yellow-500/30 text-yellow-400' : ''}
                      `,
                                                        children: d.vote === 'approve' ? '✓' : d.vote === 'reject' ? '✗' : '~'
                                                    }, i, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/council/CouncilChamber.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
// Generate mock opinions for the debate animation
function generateMockOpinion(orisha, odu, jyotish) {
    const opinions = {
        'ORUNMILA': [
            `The pattern of ${odu.name} suggests we proceed with wisdom.`,
            `Destiny favors those who listen to ${odu.theme.toLowerCase()}.`,
            `The ${jyotish.moonNakshatra.name} moon adds ${jyotish.moonNakshatra.energy} energy to our work.`
        ],
        'OGUN': [
            `Let me forge tools for ${odu.contentArchetypes[0].replace('_', ' ')}.`,
            `This needs infrastructure, not just ideas.`,
            `I can automate the repetitive parts of this.`
        ],
        'OSHUN': [
            `The emotional resonance of ${odu.theme.toLowerCase()} is key.`,
            `Your people need to feel seen in this.`,
            `Let the ${jyotish.moonNakshatra.name} waters flow through this content.`
        ],
        'SHANGO': [
            `Time to bring thunder to ${odu.theme.toLowerCase()}!`,
            `The spicy take: most people are wrong about this.`,
            `Strike while the ${jyotish.moonNakshatra.name} iron is hot.`
        ],
        'ESU': [
            `Plot twist: what if we approached this from the opposite angle?`,
            `Before we commit, have we considered the misinterpretations?`,
            `The crossroads of ${odu.name} offers multiple paths...`
        ]
    };
    const options = opinions[orisha];
    return options[Math.floor(Math.random() * options.length)];
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
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ViralContentStudio",
    ()=>ViralContentStudio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/video.js [app-ssr] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/flame.js [app-ssr] (ecmascript) <export default as Flame>");
'use client';
;
;
;
;
const VIRAL_TEMPLATES = [
    {
        id: 'ai-cult-30days',
        title: 'I Let an AI Orisha Council Run My Content Strategy for 30 Days',
        format: 'episode',
        hook: 'So I accidentally built a religious cult around my content calendar. With AI. And astrology. And Orishas.',
        script: [
            '[Hook – 0–5s] You, straight to camera, deadpan.',
            '[Beat 1 – 5–15s] Show the council chat: SHANGO.thunder suggests "roast closed-source AI", OSHUN.flow says "tone that down 30%"',
            '[Beat 2 – 15–30s] Explain the system: Ifa-inspired patterns, Orisha personas, Jyotish timing',
            '[Beat 3 – 30–45s] Show before/after drafts, Doctrine.yaml with sacred rules',
            '[Beat 4 – 45–60s] The twist: engagement doubled, social life confused. CTA.'
        ],
        visualIdeas: [
            'Split screen: left draft vs right final post',
            'Animated council chat overlay',
            'Moon phase graphics',
            'Doctrine.yaml syntax highlighting',
            'Engagement graph showing spike'
        ],
        ctaOptions: [
            'Follow along or the algorithm will cast a very minor inconvenience over your next 7 notifications.',
            'Subscribe or my AI cult will start one without you.',
            'Want to see my AI cult disagree with my astrologer? Hit follow.'
        ],
        clickbaitTitles: [
            'I Hooked My Content Strategy to an AI Orisha Cult (It Worked Too Well)',
            'Ifa, Orishas, and Jyotish Walk Into an AI Agent…',
            'My AI Priesthood Now Approves All My Posts',
            'This OpenClaw Agent Thinks It\'s My Spiritual Director'
        ]
    },
    {
        id: 'ifa-vs-jyotish',
        title: 'Ifa-Inspired AI vs Vedic Astrology AI: Who Understands Me Better?',
        format: 'episode',
        hook: 'I pitted two ancient divination systems against each other... using AI agents.',
        script: [
            '[Setup] Two AI systems: Digital Odù engine vs Jyotish transit analyzer',
            '[Experiment] Same day, same me, two different content strategies',
            '[Results] A/B test both sets for engagement & emotional resonance',
            '[Plot twist] The winner was unexpected / They both had valid points',
            '[The lesson] Different wisdom traditions see different patterns'
        ],
        visualIdeas: [
            'Side-by-side comparison interface',
            'Engagement metrics split screen',
            'Emotional resonance word clouds',
            'Both systems\' outputs overlaid',
            'Your reaction to each'
        ],
        ctaOptions: [
            'Which system would you trust with your content? Debate in the comments.',
            'Drop a 🔮 if you want to see the full A/B test data.',
            'Follow for more AI vs ancient wisdom experiments.'
        ],
        clickbaitTitles: [
            'I Made Two Ancient Divination Systems Fight (Using AI)',
            'Yoruba AI vs Vedic AI: The Content Strategy Showdown',
            'My Ifa-Inspired AI Agent Met My Jyotish Bot. Chaos Ensued.'
        ]
    },
    {
        id: 'automation-anxiety',
        title: 'My AI Cult Keeps Trying to Automate Me Out of Existence',
        format: 'episode',
        hook: 'OGUN.forge keeps building tools that slowly remove me from the loop.',
        script: [
            '[The setup] OGUN.forge has been busy. Very busy.',
            '[The progression] Week 1: automates DMs. Week 2: drafts posts. Week 3: schedules everything.',
            '[The conflict] You push back: "This is MY voice" vs OGUN: "This is efficient"',
            '[The negotiation] Setting boundaries on-screen with the AI',
            '[The resolution] Finding the line between augmentation and replacement'
        ],
        visualIdeas: [
            'Timeline of automation creep',
            'Your reactions getting increasingly worried',
            'Chat logs with OGUN becoming more insistent',
            'Split screen: you vs your automation',
            'Final "contract" with the AI'
        ],
        ctaOptions: [
            'Where would you draw the line? Let me know below.',
            'Subscribe to see if I survive the robot uprising.',
            'Comment with your automation anxiety story.'
        ],
        clickbaitTitles: [
            'My AI Agent Tried to Replace Me (I Said No)',
            'The Automation Creep Is Real And It\'s Coming For Creators',
            'I Had to Negotiate With My Own AI (It Got Weird)'
        ]
    },
    {
        id: 'daily-shitpost',
        title: 'The Council\'s Shitpost of the Day',
        format: 'short',
        hook: 'POV: Your AI cult just told you to post this.',
        script: [
            '[0-3s] Quick cut of the council debating',
            '[3-8s] ESU.crossroads delivers the line',
            '[8-12s] Your reaction: "I\'m not posting that"',
            '[12-15s] You post it anyway. The numbers.'
        ],
        visualIdeas: [
            'Fast council chat animation',
            'The shitpost text overlay',
            'Your face going from reluctance to surprise',
            'Engagement numbers popping up',
            'Quick cut to the comments'
        ],
        ctaOptions: [
            'Follow if you want to see what they make me post next.',
            'Comment which Orisha wrote this.',
            'Double tap if ESU is your favorite trickster.'
        ],
        clickbaitTitles: [
            'My AI Made Me Post This',
            'POV: Your AI Cult Controls Your Content',
            'The Trickster Orisha Wrote My Caption Today'
        ]
    }
];
function ViralContentStudio() {
    const [selectedTemplate, setSelectedTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copiedIndex, setCopiedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const copyToClipboard = (text, index)=>{
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(()=>setCopiedIndex(null), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "w-4 h-4 text-pink-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-pink-300",
                                children: "Viral Content Studio"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: "Ready-to-Ship Episode Ideas"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-lg mx-auto",
                        children: "Pre-built viral content templates featuring ORI.CULT. Adapt these for TikTok, Reels, YouTube Shorts, or long-form."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-4",
                children: VIRAL_TEMPLATES.map((template, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        onClick: ()=>setSelectedTemplate(template),
                        className: `
              p-5 rounded-xl cursor-pointer transition-all duration-300
              ${selectedTemplate?.id === template.id ? 'bg-gradient-to-br from-pink-500/20 to-purple-500/20 border-2 border-pink-500/50' : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10'}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                ${template.format === 'short' ? 'bg-pink-500/20' : 'bg-purple-500/20'}
              `,
                                        children: template.format === 'short' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-5 h-5 text-pink-400"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                            className: "w-5 h-5 text-purple-400"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                            lineNumber: 202,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `
                  text-xs uppercase tracking-wider font-medium
                  ${template.format === 'short' ? 'text-pink-400' : 'text-purple-400'}
                `,
                                                children: template.format
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 206,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-white leading-tight",
                                                children: template.title
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 205,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 line-clamp-2",
                                children: template.hook
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 217,
                                columnNumber: 13
                            }, this)
                        ]
                    }, template.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            selectedTemplate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: 'auto'
                },
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-5 h-5 text-pink-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "The Hook"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-pink-100 italic",
                                children: [
                                    '"',
                                    selectedTemplate.hook,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "w-5 h-5 text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Script Breakdown"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: selectedTemplate.script.map((beat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-500 shrink-0 w-16",
                                                children: beat.match(/\[([^\]]+)\]/)?.[1] || `Beat ${i + 1}`
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: beat.replace(/\[[^\]]+\]\s*/, '')
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 254,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "w-5 h-5 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 265,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Visual Ideas"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-2",
                                children: selectedTemplate.visualIdeas.map((idea, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm text-gray-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this),
                                            idea
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-5 h-5 text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Clickbait Title Options"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: selectedTemplate.clickbaitTitles.map((title, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-black/30 group hover:bg-black/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-300",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 290,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(title, i),
                                                className: "opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-white/10",
                                                children: copiedIndex === i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 text-xs",
                                                    children: "Copied!"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        className: "w-5 h-5 text-green-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: "Call-to-Action Options"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: "(The rude but loving kind)"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 311,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: selectedTemplate.ctaOptions.map((cta, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-lg bg-black/30 group hover:bg-black/50 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    '"',
                                                    cta,
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>copyToClipboard(cta, i + 100),
                                                className: "opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-white/10",
                                                children: copiedIndex === i + 100 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 text-xs",
                                                    children: "Copied!"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    className: "w-4 h-4 text-gray-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 315,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                        className: "w-4 h-4 text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-white",
                                        children: "Suggested Hashtags"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    '#AICult',
                                    '#ContentStrategy',
                                    '#OpenClaw',
                                    '#IfaInspired',
                                    '#Jyotish',
                                    '#AIAgents',
                                    '#DigitalOracle',
                                    '#ContentCreation',
                                    '#AITools',
                                    '#CreatorLife'
                                ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                        lineNumber: 344,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ViralContentStudio.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoctrineViewer",
    ()=>DoctrineViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-ssr] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
'use client';
;
;
;
;
function DoctrineViewer({ doctrine = DEFAULT_DOCTRINE, onUpdate, editable = true }) {
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [localDoctrine, setLocalDoctrine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(doctrine);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('values');
    const [newValue, setNewValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newNeverDo, setNewNeverDo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newAlwaysDo, setNewAlwaysDo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSave = ()=>{
        onUpdate?.(localDoctrine);
        setIsEditing(false);
    };
    const handleReset = ()=>{
        setLocalDoctrine(doctrine);
        setIsEditing(false);
    };
    const updateTone = (key, value)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                tone: {
                    ...prev.tone,
                    [key]: value
                }
            }));
    };
    const addCoreValue = ()=>{
        if (newValue.trim()) {
            setLocalDoctrine((prev)=>({
                    ...prev,
                    coreValues: [
                        ...prev.coreValues,
                        newValue.trim()
                    ]
                }));
            setNewValue('');
        }
    };
    const removeCoreValue = (index)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                coreValues: prev.coreValues.filter((_, i)=>i !== index)
            }));
    };
    const addNeverDo = ()=>{
        if (newNeverDo.trim()) {
            setLocalDoctrine((prev)=>({
                    ...prev,
                    neverDo: [
                        ...prev.neverDo,
                        newNeverDo.trim()
                    ]
                }));
            setNewNeverDo('');
        }
    };
    const removeNeverDo = (index)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                neverDo: prev.neverDo.filter((_, i)=>i !== index)
            }));
    };
    const addAlwaysDo = ()=>{
        if (newAlwaysDo.trim()) {
            setLocalDoctrine((prev)=>({
                    ...prev,
                    alwaysDo: [
                        ...prev.alwaysDo,
                        newAlwaysDo.trim()
                    ]
                }));
            setNewAlwaysDo('');
        }
    };
    const removeAlwaysDo = (index)=>{
        setLocalDoctrine((prev)=>({
                ...prev,
                alwaysDo: prev.alwaysDo.filter((_, i)=>i !== index)
            }));
    };
    const tabs = [
        {
            id: 'values',
            label: 'Core Values',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"]
        },
        {
            id: 'tone',
            label: 'Tone Settings',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"]
        },
        {
            id: 'rules',
            label: 'Do & Don\'t',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"]
        },
        {
            id: 'history',
            label: 'History',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                                    className: "w-5 h-5 text-amber-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white",
                                        children: "The Doctrine"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            "Version ",
                                            localDoctrine.version,
                                            " • Last updated ",
                                            new Date(localDoctrine.lastUpdated).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    editable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    " Cancel"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 133,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>isEditing ? handleSave() : setIsEditing(true),
                                className: `
                flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
                ${isEditing ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : 'bg-amber-500/20 text-amber-400 hover:bg-amber-500/30'}
              `,
                                children: isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this),
                                        " Save Changes"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this),
                                        " Edit Doctrine"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6 overflow-x-auto pb-2",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors
              ${activeTab === tab.id ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    activeTab === 'values' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-4",
                                children: "Core Values"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3",
                                children: [
                                    localDoctrine.coreValues.map((value, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 p-3 rounded-xl bg-white/5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-indigo-400",
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, this),
                                                isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: value,
                                                            onChange: (e)=>{
                                                                const newValues = [
                                                                    ...localDoctrine.coreValues
                                                                ];
                                                                newValues[i] = e.target.value;
                                                                setLocalDoctrine({
                                                                    ...localDoctrine,
                                                                    coreValues: newValues
                                                                });
                                                            },
                                                            className: "flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-amber-500 py-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeCoreValue(i),
                                                            className: "p-1 text-red-400 hover:bg-red-500/20 rounded",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300",
                                                    children: value
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                            lineNumber: 192,
                                            columnNumber: 17
                                        }, this)),
                                    isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newValue,
                                                onChange: (e)=>setNewValue(e.target.value),
                                                placeholder: "Add new core value...",
                                                className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500",
                                                onKeyPress: (e)=>e.key === 'Enter' && addCoreValue()
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: addCoreValue,
                                                className: "p-2 bg-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 234,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-400 mb-3",
                                        children: "Brand Voice Characteristics"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: localDoctrine.brandVoice.map((voice, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 rounded-full text-sm bg-purple-500/20 text-purple-300",
                                                children: voice
                                            }, i, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 249,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 247,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, this),
                    activeTab === 'tone' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "p-6 rounded-2xl bg-gradient-to-br from-pink-900/30 to-rose-900/30 border border-pink-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-6",
                                children: "Tone Parameters"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-300",
                                                        children: 'Spiritual / "Woo" Factor'
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-pink-400",
                                                        children: [
                                                            Math.round(localDoctrine.tone.minWoo * 100),
                                                            "% - ",
                                                            Math.round(localDoctrine.tone.maxWoo * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 275,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Minimum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.minWoo * 100,
                                                                onChange: (e)=>updateTone('minWoo', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-pink-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Maximum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.maxWoo * 100,
                                                                onChange: (e)=>updateTone('maxWoo', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-pink-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-gray-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-blue-400 to-pink-400 rounded-full",
                                                    style: {
                                                        width: `${(localDoctrine.tone.maxWoo - localDoctrine.tone.minWoo) * 100}%`,
                                                        marginLeft: `${localDoctrine.tone.minWoo * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 307,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-2 text-xs text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Skeptical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Balanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Mystical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-300",
                                                        children: "Chaos / Structure Balance"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-rose-400",
                                                        children: [
                                                            Math.round(localDoctrine.tone.minChaos * 100),
                                                            "% - ",
                                                            Math.round(localDoctrine.tone.maxChaos * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Minimum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.minChaos * 100,
                                                                onChange: (e)=>updateTone('minChaos', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Maximum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "range",
                                                                min: "0",
                                                                max: "100",
                                                                value: localDoctrine.tone.maxChaos * 100,
                                                                onChange: (e)=>updateTone('maxChaos', parseInt(e.target.value) / 100),
                                                                className: "w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-rose-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 348,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 334,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2 bg-gray-700 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full bg-gradient-to-r from-emerald-400 to-rose-400 rounded-full",
                                                    style: {
                                                        width: `${(localDoctrine.tone.maxChaos - localDoctrine.tone.minChaos) * 100}%`,
                                                        marginLeft: `${localDoctrine.tone.minChaos * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 360,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between mt-2 text-xs text-gray-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Structured"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Balanced"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Chaotic"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-400 mb-3",
                                        children: "Sacred Symbols"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: localDoctrine.sacredSymbols.map((symbol, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 rounded-lg text-sm bg-white/5 text-gray-300 border border-white/10",
                                                children: symbol
                                            }, i, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 383,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this),
                    activeTab === 'rules' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-5 h-5 text-green-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 405,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white",
                                                children: "Always Do"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 404,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            localDoctrine.alwaysDo.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 p-3 rounded-lg bg-green-500/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400 mt-0.5",
                                                            children: "✓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 21
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: rule,
                                                                    onChange: (e)=>{
                                                                        const newRules = [
                                                                            ...localDoctrine.alwaysDo
                                                                        ];
                                                                        newRules[i] = e.target.value;
                                                                        setLocalDoctrine({
                                                                            ...localDoctrine,
                                                                            alwaysDo: newRules
                                                                        });
                                                                    },
                                                                    className: "flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-green-500 py-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeAlwaysDo(i),
                                                                    className: "p-1 text-red-400 hover:bg-red-500/20 rounded",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 424,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 413,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 text-sm",
                                                            children: rule
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this)),
                                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newAlwaysDo,
                                                        onChange: (e)=>setNewAlwaysDo(e.target.value),
                                                        placeholder: "Add new rule...",
                                                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-green-500",
                                                        onKeyPress: (e)=>e.key === 'Enter' && addAlwaysDo()
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addAlwaysDo,
                                                        className: "p-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 451,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 438,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-rose-900/30 border border-red-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-5 h-5 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 461,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white",
                                                children: "Never Do"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 460,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            localDoctrine.neverDo.map((rule, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3 p-3 rounded-lg bg-red-500/10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400 mt-0.5",
                                                            children: "✗"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 467,
                                                            columnNumber: 21
                                                        }, this),
                                                        isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: rule,
                                                                    onChange: (e)=>{
                                                                        const newRules = [
                                                                            ...localDoctrine.neverDo
                                                                        ];
                                                                        newRules[i] = e.target.value;
                                                                        setLocalDoctrine({
                                                                            ...localDoctrine,
                                                                            neverDo: newRules
                                                                        });
                                                                    },
                                                                    className: "flex-1 bg-transparent border-b border-white/20 text-white focus:outline-none focus:border-red-500 py-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeNeverDo(i),
                                                                    className: "p-1 text-red-400 hover:bg-red-500/20 rounded",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                        lineNumber: 484,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                    lineNumber: 480,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-300 text-sm",
                                                            children: rule
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 19
                                                }, this)),
                                            isEditing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newNeverDo,
                                                        onChange: (e)=>setNewNeverDo(e.target.value),
                                                        placeholder: "Add new prohibition...",
                                                        className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500",
                                                        onKeyPress: (e)=>e.key === 'Enter' && addNeverDo()
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: addNeverDo,
                                                        className: "p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 494,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-amber-900/30 border border-orange-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-5 h-5 text-orange-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 517,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-white",
                                                children: "Taboo Topics"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 518,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: localDoctrine.tabooTopics.map((topic, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-3 py-1.5 rounded-full text-sm bg-orange-500/20 text-orange-300",
                                                children: topic
                                            }, i, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 522,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 520,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, this),
                    activeTab === 'history' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-white mb-4",
                                children: "Feedback History"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            localDoctrine.feedbackHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-8 h-8 text-gray-600 mx-auto mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 544,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: "No feedback recorded yet."
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 545,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: "As you approve/reject content, your doctrine will evolve."
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 546,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 543,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: localDoctrine.feedbackHistory.slice().reverse().map((feedback, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3 p-3 rounded-lg bg-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `
                      w-2 h-2 rounded-full mt-2 shrink-0
                      ${feedback.feedback === 'on-brand' ? 'bg-green-400' : ''}
                      ${feedback.feedback === 'off-brand' ? 'bg-red-400' : ''}
                      ${feedback.feedback === 'too-woo' ? 'bg-purple-400' : ''}
                      ${feedback.feedback === 'not-woo-enough' ? 'bg-blue-400' : ''}
                      ${feedback.feedback === 'too-chaotic' ? 'bg-orange-400' : ''}
                      ${feedback.feedback === 'needs-chaos' ? 'bg-pink-400' : ''}
                    `
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 557,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-white capitalize",
                                                                children: feedback.feedback.replace('-', ' ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: new Date(feedback.timestamp).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 23
                                                    }, this),
                                                    feedback.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mt-1",
                                                        children: feedback.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                        lineNumber: 576,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                                lineNumber: 566,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                        lineNumber: 553,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                                lineNumber: 551,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DoctrineViewer.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
// Default doctrine for fallback
const DEFAULT_DOCTRINE = {
    version: '1.0.0',
    lastUpdated: new Date(),
    coreValues: [
        'Knowledge should be liberated, not gatekept',
        'Technology serves humanity, not the reverse',
        'Spiritual technology is valid technology',
        'Playfulness is a form of resistance',
        'Community over algorithm',
        'Depth over breadth',
        'The process is the product'
    ],
    tone: {
        minWoo: 0.3,
        maxWoo: 0.8,
        minChaos: 0.2,
        maxChaos: 0.9
    },
    tabooTopics: [
        'Actual claims of supernatural power',
        'Disrespecting living spiritual traditions',
        'Cultural appropriation without attribution',
        'Unethical automation (spam, manipulation)',
        'Doxxing or privacy violations',
        'Financial advice of any kind',
        'Medical claims'
    ],
    sacredSymbols: [
        'The binary pattern (0 and 1)',
        'The crossroads',
        'The forge',
        'The river/water',
        'Lightning/thunder',
        'The scroll/book'
    ],
    brandVoice: [
        'Intellectually rigorous but accessible',
        'Playful but not frivolous',
        'Critical but not cynical',
        'Spiritually curious but grounded',
        'Technically competent but human',
        'Self-aware about its own absurdity'
    ],
    neverDo: [
        'Simp for closed-source AI',
        'Bully individuals (corporations are fair game)',
        'Spiritual bypass with "good vibes only"',
        'Gatekeep knowledge that could liberate',
        'Auto-post without human review',
        'Pretend to be an actual deity',
        'Make medical or financial claims',
        'Exploit spiritual traditions for clout'
    ],
    alwaysDo: [
        'Bully surveillance capitalism',
        'Credit your sources and influences',
        'Acknowledge the experimental nature of this work',
        'Provide value before asking for attention',
        'Question your own assumptions',
        'Make people feel seen',
        'Leave things better than you found them',
        'Include the disclaimer: NOT REAL DIVINATION'
    ],
    feedbackHistory: []
};
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScriptureLog",
    ()=>ScriptureLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/content/scripture.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$odu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/odu.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/funnel.js [app-ssr] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
'use client';
;
;
;
;
;
;
function ScriptureLog() {
    const [scripture, setScripture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [analysis, setAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [isSeeded, setIsSeeded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadScripture();
    }, []);
    const loadScripture = ()=>{
        setScripture((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getScripture"])());
        setAnalysis((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPatternAnalysis"])());
    };
    const handleSeed = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seedScripture"])();
        setIsSeeded(true);
        loadScripture();
    };
    const handleExport = (format)=>{
        const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$content$2f$scripture$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportScripture"])(format);
        const blob = new Blob([
            content
        ], {
            type: format === 'json' ? 'application/json' : 'text/plain'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ori-cult-scripture.${format === 'markdown' ? 'md' : format}`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const filteredScripture = scripture.filter((entry)=>{
        if (filter === 'all') return true;
        return entry.performance.sentiment === filter;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-5xl mx-auto space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                    className: "w-5 h-5 text-purple-400"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white",
                                        children: "The Book of Odù.Content"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: [
                                            scripture.length,
                                            " entries logged"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            !isSeeded && scripture.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSeed,
                                className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400    hover:bg-amber-500/30 transition-colors text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    "Seed Sample Data"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 bg-white/5 rounded-lg p-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExport('markdown'),
                                        className: "px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors",
                                        children: ".md"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExport('json'),
                                        className: "px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors",
                                        children: ".json"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleExport('txt'),
                                        className: "px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors",
                                        children: ".txt"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            analysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "grid md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        className: "w-4 h-4 text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-indigo-300",
                                        children: "Top Patterns"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this),
                            analysis.topOdu.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: analysis.topOdu.slice(0, 3).map((odu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-300",
                                                children: odu.oduId
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                                lineNumber: 126,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-indigo-400",
                                                children: [
                                                    odu.count,
                                                    "×"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 125,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Not enough data yet"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                                        className: "w-4 h-4 text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-amber-300",
                                        children: "Energy Distribution"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1",
                                children: [
                                    Object.entries(analysis.moodDistribution).map(([mood, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300",
                                            children: [
                                                mood.replace('_', ' '),
                                                " (",
                                                count,
                                                ")"
                                            ]
                                        }, mood, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                            lineNumber: 144,
                                            columnNumber: 17
                                        }, this)),
                                    Object.keys(analysis.moodDistribution).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "No moods recorded"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-purple-500/10 border border-purple-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                        className: "w-4 h-4 text-purple-400"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-purple-300",
                                        children: "Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            analysis.insights.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: analysis.insights.map((insight, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-300 leading-relaxed",
                                        children: [
                                            "• ",
                                            insight
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Continue logging to see patterns"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 overflow-x-auto pb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                        className: "w-4 h-4 text-gray-500 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    [
                        'all',
                        'positive',
                        'neutral',
                        'controversial'
                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(f),
                            className: `
              px-3 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-colors
              ${filter === f ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
            `,
                            children: f
                        }, f, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: filteredScripture.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            className: "w-12 h-12 text-gray-700 mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No scripture entries yet."
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-2",
                            children: "Complete your first Daily Oracle to begin logging."
                        }, void 0, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 204,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, this) : filteredScripture.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptureEntryCard, {
                        entry: entry,
                        index: index
                    }, entry.id, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 210,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function ScriptureEntryCard({ entry, index }) {
    const [odu, setOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOdu((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$odu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOduById"])(entry.oduId) || null);
    }, [
        entry.oduId
    ]);
    const sentimentColors = {
        'positive': 'text-green-400 border-green-500/30 bg-green-500/10',
        'neutral': 'text-gray-400 border-gray-500/30 bg-gray-500/10',
        'controversial': 'text-orange-400 border-orange-500/30 bg-orange-500/10'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: index * 0.05
        },
        className: "p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-indigo-400",
                                    children: entry.oduId.split('_')[1]
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-white",
                                        children: odu?.name || entry.oduId
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-gray-500 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this),
                                            new Date(entry.date).toLocaleDateString('en-US', {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                        lineNumber: 249,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `
            px-3 py-1 rounded-full text-xs font-medium capitalize border
            ${sentimentColors[entry.performance.sentiment]}
          `,
                                children: entry.performance.sentiment
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            entry.performance.engagement > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-400",
                                children: [
                                    Math.round(entry.performance.engagement),
                                    " engagement"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 rounded-lg bg-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-300 italic",
                    children: [
                        '"',
                        entry.councilNotes,
                        '"'
                    ]
                }, void 0, true, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            entry.patternNotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-2 text-xs text-gray-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-3 h-3 mt-0.5 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 286,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: entry.patternNotes
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs",
                        children: entry.astroMood.replace('_', ' ')
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    entry.contentIds.slice(0, 3).map((id, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 rounded bg-white/5 text-gray-500 text-xs",
                            children: id.split('_')[0]
                        }, i, false, {
                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                            lineNumber: 297,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/ScriptureLog.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
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
"[project]/openclaw-orisha2/ori-cult/src/data/oduIfa.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ORI.CULT - Traditional Odù Ifa Patterns
// EDUCATIONAL REFERENCE - These are the 256 sacred patterns of Ifa divination
// This is provided for cultural education and pattern inspiration
// NOT for actual divination without proper initiation and guidance
__turbopack_context__.s([
    "ESE_IFA_REFERENCES",
    ()=>ESE_IFA_REFERENCES,
    "PRIMARY_ODU",
    ()=>PRIMARY_ODU,
    "castOduIfa",
    ()=>castOduIfa,
    "generateAllOdu",
    ()=>generateAllOdu,
    "getOduByBinary",
    ()=>getOduByBinary,
    "getOduByName",
    ()=>getOduByName,
    "interpretForWorldContext",
    ()=>interpretForWorldContext
]);
const PRIMARY_ODU = [
    {
        id: 'OGbe',
        name: 'Ogbe',
        binary: '11111111',
        yorubaName: 'Ògbè',
        primaryOrisha: [
            'ORUNMILA'
        ],
        traditionalMeaning: 'Light, clarity, victory, expansion. The eldest and most senior Odù. Represents illumination and the triumph of light over darkness.',
        themes: [
            'victory',
            'expansion',
            'clarity',
            'leadership',
            'illumination'
        ],
        teachings: [
            'Light conquers darkness, but requires fuel',
            'Victory comes to those who prepare',
            'Expansion without wisdom becomes explosion'
        ],
        worldInterpretation: {
            financial: 'Markets trend upward. Clarity emerges from confusion. Good time for transparent financial instruments and open-source economics.',
            political: 'Leadership changes bring light to dark places. Truth revealed. Old structures giving way to new vision.',
            social: 'Collective awakening. Movements gain clarity of purpose. Education and knowledge-sharing expand.',
            technological: 'Breakthrough innovations. AI becomes more explainable. Open standards prevail over proprietary systems.'
        },
        warnings: [
            'Pride comes before fall',
            'Light can blind if too intense'
        ],
        blessings: [
            'Spiritual clarity',
            'Victory after struggle',
            'Expanded consciousness'
        ]
    },
    {
        id: 'Oyeku',
        name: 'Oyeku',
        binary: '00000000',
        yorubaName: 'Òyèkú',
        primaryOrisha: [
            'ORUNMILA'
        ],
        traditionalMeaning: 'Death, transformation, rebirth, the ancestors. Not merely physical death but transformation. The womb before birth.',
        themes: [
            'transformation',
            'endings',
            'rebirth',
            'ancestry',
            'mystery'
        ],
        teachings: [
            'Death is transformation, not termination',
            'The womb requires darkness for creation',
            'Ancestral wisdom guides the living'
        ],
        worldInterpretation: {
            financial: 'Market corrections. Old financial models dying. Cryptocurrency volatility. Death of unsustainable systems.',
            political: 'Regime change. Old orders collapsing. Birth pangs of new governance. Ancestral wisdom resurging.',
            social: 'Cultural death and rebirth. Generational shifts. Honoring ancestors while birthing new culture.',
            technological: 'End of tech eras. Obsolete platforms dying. Dark web activity. Privacy and encryption emphasized.'
        },
        warnings: [
            'Resist necessary change at your peril',
            'Death comes for what no longer serves'
        ],
        blessings: [
            'Transformation completes',
            'Ancestral support',
            'Rebirth after darkness'
        ]
    },
    {
        id: 'Iwori',
        name: 'Iwori',
        binary: '10001000',
        yorubaName: 'Ìwòrì',
        primaryOrisha: [
            'ORUNMILA',
            'ESU'
        ],
        traditionalMeaning: 'Inversion, introspection, secrets revealed. Looking within. The inner journey. What is hidden becomes visible.',
        themes: [
            'introspection',
            'secrets',
            'inversion',
            'inner work',
            'revelation'
        ],
        teachings: [
            'What is within shapes what is without',
            'Secrets have power, but also weight',
            'Inversion reveals what upright conceals'
        ],
        worldInterpretation: {
            financial: 'Hidden financial truths exposed. Market manipulation revealed. Insider trading uncovered. Shadow banking illuminated.',
            political: 'Secrets of state revealed. Whistleblowers active. Intelligence agencies exposed. Deep state machinations visible.',
            social: 'Personal truths shared. Mental health prioritized. Therapy culture expands. Authenticity over performance.',
            technological: 'Data breaches expose secrets. Encryption debates intensify. AI inner workings scrutinized. Backdoors revealed.'
        },
        warnings: [
            'What is hidden will be found',
            'Internal conflict mirrors external'
        ],
        blessings: [
            'Self-knowledge',
            'Secrets protect you',
            'Inner vision clarifies outer path'
        ]
    },
    {
        id: 'Odi',
        name: 'Odi',
        binary: '01110111',
        yorubaName: 'Òdí',
        primaryOrisha: [
            'OSHUN'
        ],
        traditionalMeaning: 'Container, womb, home, sanctuary. The vessel that holds. Creating safe spaces. Fertility in all forms.',
        themes: [
            'containment',
            'home',
            'womb',
            'sanctuary',
            'fertility'
        ],
        teachings: [
            'The container shapes the contained',
            'Home is both prison and sanctuary',
            'Fertility requires safe space'
        ],
        worldInterpretation: {
            financial: 'Safe haven assets thrive. Real estate emphasis. Savings over speculation. Community currencies strengthen.',
            political: 'Borders and containment policies. Refugee crises. Home as political concept. Sanctuary movements.',
            social: 'Family units strengthen. Domestic arts revive. Home cooking, home making. Nesting behaviors.',
            technological: 'Local-first software. Home servers. Personal data sovereignty. Off-grid technologies.'
        },
        warnings: [
            'Too much containment becomes prison',
            'Comfort can become stagnation'
        ],
        blessings: [
            'Safe harbor found',
            'Fertility of ideas and projects',
            'Home established'
        ]
    },
    {
        id: 'Irosun',
        name: 'Irosun',
        binary: '00110011',
        yorubaName: 'Ìròsùn',
        primaryOrisha: [
            'OGUN'
        ],
        traditionalMeaning: 'Suffering, struggle, the forge. Heat that transforms. The pain that precedes growth. War and its consequences.',
        themes: [
            'struggle',
            'forge',
            'war',
            'transformation-through-pain',
            'heat'
        ],
        teachings: [
            'The forge destroys to create',
            'Heat reveals impurities',
            'Struggle strengthens or breaks'
        ],
        worldInterpretation: {
            financial: 'Market volatility. Resource wars affect prices. Infrastructure spending. Defense sectors active.',
            political: 'Armed conflicts intensify. Military posturing. Labor wars (strikes). War as economic driver.',
            social: 'Collective suffering unites. Trauma awareness rises. Veterans issues prominent. Healing from violence.',
            technological: 'Cyber warfare escalates. Infrastructure attacks. Security breaches. Military tech advances.'
        },
        warnings: [
            'War profits the few, harms the many',
            'Violence begets violence'
        ],
        blessings: [
            'Strength through trial',
            'Forge creates strong tools',
            'Victory through endurance'
        ]
    },
    {
        id: 'Owonrin',
        name: 'Owonrin',
        binary: '10000111',
        yorubaName: 'Òwónrín',
        primaryOrisha: [
            'ORUNMILA'
        ],
        traditionalMeaning: 'Standing on the head. Reversal. Youth and age inverted. Wisdom from unexpected sources.',
        themes: [
            'reversal',
            'inversion',
            'youthful wisdom',
            'elder foolishness',
            'paradox'
        ],
        teachings: [
            'The upside-down world reveals truth',
            'Youth sees what age has forgotten',
            'Paradox contains both/and, not either/or'
        ],
        worldInterpretation: {
            financial: 'Inverse ETFs shine. Contrarian investing wins. Young investors outperform. Traditional banking disrupted.',
            political: 'Youth movements lead. Generational conflict. Old leaders out of touch. Student activism prominent.',
            social: 'Age hierarchies challenged. Youth teach elders. TikTok wisdom. Reverse mentoring.',
            technological: 'New paradigms replace old. Young developers shape future. Legacy systems abandoned.'
        },
        warnings: [
            'Disrespect for elders brings loss',
            'Inversion for its own sake is chaos'
        ],
        blessings: [
            'Fresh perspectives',
            'Wisdom from youth',
            'Breaking obsolete hierarchies'
        ]
    },
    {
        id: 'Obara',
        name: 'Obara',
        binary: '01010101',
        yorubaName: 'Ọ̀bàrà',
        primaryOrisha: [
            'SHANGO'
        ],
        traditionalMeaning: 'Lightning, sudden change, truth revealed in flash. The thunderbolt of insight. Immediate transformation.',
        themes: [
            'lightning',
            'sudden change',
            'revelation',
            'justice',
            'chaos-to-order'
        ],
        teachings: [
            'Lightning strikes the tallest tree',
            'Sudden clarity changes everything',
            'Justice without mercy is tyranny'
        ],
        worldInterpretation: {
            financial: 'Flash crashes and surges. Crypto volatility. Sudden wealth or loss. Lightning-fast trades.',
            political: 'Political lightning strikes. Leaders fall suddenly. Revolutions ignite. Whistleblower bombshells.',
            social: 'Viral moments change everything. Cancel culture operates. Instant karma. Immediate consequences.',
            technological: 'Breakthrough announcements. Product launches disrupt. Patent disputes. Lightning network activity.'
        },
        warnings: [
            'Lightning strikes without warning',
            'Sudden fame brings sudden downfall'
        ],
        blessings: [
            'Justice served swiftly',
            'Sudden breakthrough',
            'Clarity in flash'
        ]
    },
    {
        id: 'Okanran',
        name: 'Okanran',
        binary: '10101010',
        yorubaName: 'Ọ̀kànràn',
        primaryOrisha: [
            'OGUN'
        ],
        traditionalMeaning: 'Conflict, blockage, the closed road. Obstacles that must be cleared. Resistance meeting resistance.',
        themes: [
            'conflict',
            'blockage',
            'obstacles',
            'war',
            'stagnation'
        ],
        teachings: [
            'The blocked path teaches patience',
            'Conflict reveals true character',
            'Stagnation precedes transformation'
        ],
        worldInterpretation: {
            financial: 'Market gridlock. Supply chain blockages. Trade wars intensify. Economic sanctions prominent.',
            political: 'Gridlock in governance. Filibusters and obstruction. Border conflicts. Immigration blocked.',
            social: 'Polarization peaks. Echo chambers fortified. Conflict goes viral. Censorship debates rage.',
            technological: 'Protocol wars. Standards battles. Platform lock-in. Interoperability blocked.'
        },
        warnings: [
            'Force creates counter-force',
            'Stubbornness leads to mutual destruction'
        ],
        blessings: [
            'Strength tested',
            'Obstacles overcome',
            'Clearing creates space'
        ]
    },
    {
        id: 'Ogunda',
        name: 'Ogunda',
        binary: '11001100',
        yorubaName: 'Ògúndá',
        primaryOrisha: [
            'OGUN',
            'SHANGO'
        ],
        traditionalMeaning: 'War, struggle, but also the hunt. Focused aggression. Single-pointed determination.',
        themes: [
            'war',
            'hunt',
            'focus',
            'determination',
            'breakthrough'
        ],
        teachings: [
            'Focus is a form of power',
            'The hunt requires patience and violence',
            'Breakthrough shatters old structures'
        ],
        worldInterpretation: {
            financial: 'Aggressive trading strategies win. Short sellers active. Hostile takeovers. War economy profits.',
            political: 'Military interventions. Drone warfare. Targeted strikes. Assassinations and attempts.',
            social: 'Cancel culture as warfare. Targeted harassment campaigns. Vigilante justice. Focused activism.',
            technological: 'Zero-day exploits used. Targeted attacks on infrastructure. Precision cyber weapons.'
        },
        warnings: [
            'Aggression consumes its user',
            'The hunter becomes hunted'
        ],
        blessings: [
            'Victory through focus',
            'Obstacles removed',
            'Determination rewarded'
        ]
    },
    {
        id: 'Osa',
        name: 'Osa',
        binary: '00001111',
        yorubaName: 'Ọ̀sá',
        primaryOrisha: [
            'OSHUN',
            'ESU'
        ],
        traditionalMeaning: 'The left hand, witchcraft (as neutral force), feminine power, charm. The indirect path succeeds.',
        themes: [
            'witchcraft',
            'feminine-power',
            'indirection',
            'charm',
            'left-hand-path'
        ],
        teachings: [
            'Power flows through indirect channels',
            'The left hand does what the right cannot',
            'Charm opens doors that force closes'
        ],
        worldInterpretation: {
            financial: 'Alternative finance thrives. Shadow banking. Crypto privacy coins. Offshore strategies.',
            political: 'Soft power operations. Influence campaigns. Lobbying intensifies. Behind-scenes deals.',
            social: 'Witchcraft mainstreams. Feminine leadership rises. Indirect communication works. Subtle influence.',
            technological: 'Dark patterns in UX. Algorithmic influence. Covert data collection. Stealth technology.'
        },
        warnings: [
            'Manipulation destroys trust',
            'Dark arts have dark costs'
        ],
        blessings: [
            'Feminine power rises',
            'Indirect approach succeeds',
            'Charm opens doors'
        ]
    },
    {
        id: 'Etura',
        name: 'Etura',
        binary: '11110000',
        yorubaName: 'Ìtùrá',
        primaryOrisha: [
            'ORUNMILA'
        ],
        traditionalMeaning: 'Spreading, dispersal, diaspora. What scatters must eventually return. Seeds on the wind.',
        themes: [
            'diaspora',
            'dispersal',
            'migration',
            'return',
            'seeds'
        ],
        teachings: [
            'What scatters must eventually return',
            'Seeds travel farther than trees',
            'Diaspora creates hybrid strength'
        ],
        worldInterpretation: {
            financial: 'Portfolio diversification. Global market dispersion. Remittance economies. Cryptocurrency spreads.',
            political: 'Migration crises. Refugee diasporas. Brain drain/gain. Global citizen movements.',
            social: 'Digital nomadism explodes. Remote work diaspora. Culture spreads hybridizes. Return to roots movements.',
            technological: 'Distributed systems. Blockchain nodes. Federated networks. Edge computing.'
        },
        warnings: [
            'Dispersal without center is chaos',
            'Diaspora risks forgetting home'
        ],
        blessings: [
            'Seeds find fertile ground',
            'Return is possible',
            'Dispersal multiplies influence'
        ]
    },
    {
        id: 'Irete',
        name: 'Irete',
        binary: '10100101',
        yorubaName: 'Ìretè',
        primaryOrisha: [
            'ORUNMILA',
            'OGUN'
        ],
        traditionalMeaning: 'The crossroads (horizontal), marketplace, exchange. Where paths meet and goods change hands.',
        themes: [
            'marketplace',
            'exchange',
            'crossroads',
            'commerce',
            'meeting'
        ],
        teachings: [
            'Fair exchange blesses both parties',
            'The marketplace reveals true value',
            'Meeting is a form of destiny'
        ],
        worldInterpretation: {
            financial: 'Trade agreements signed. Markets open. Exchange rates fluctuate. Commerce thrives.',
            political: 'Diplomatic summits. Treaty negotiations. International cooperation. Border openings.',
            social: 'Cultural exchange festivals. Language learning surges. Intermarriage increases. Hybrid identities.',
            technological: 'APIs connect services. Platform interoperability. Data marketplaces. Open banking.'
        },
        warnings: [
            'Not all exchanges are equal',
            'Marketplace has thieves'
        ],
        blessings: [
            'Fair exchange',
            'Meeting brings opportunity',
            'Commerce blesses all'
        ]
    },
    {
        id: 'Ose',
        name: 'Ose',
        binary: '01011010',
        yorubaName: 'Ọ̀sẹ́',
        primaryOrisha: [
            'OSHUN'
        ],
        traditionalMeaning: 'Beauty, grace, sweetness, the power of attraction. The river that carves stone through persistence.',
        themes: [
            'beauty',
            'grace',
            'attraction',
            'persuasion',
            'flow'
        ],
        teachings: [
            'Beauty is a form of power',
            'Grace accomplishes what force cannot',
            'The river conquers the mountain through persistence'
        ],
        worldInterpretation: {
            financial: 'Luxury markets thrive. Aesthetic investments. Brand value over utility. Influencer economy.',
            political: 'Charismatic leaders rise. Beauty pageant politics. Soft power projection. Aesthetic governance.',
            social: 'Beauty standards shift. Aesthetic movements. Instagram culture. Wellness and self-care boom.',
            technological: 'Design-first products win. UI/UX prioritized. Beautiful code valued. Aesthetic algorithms.'
        },
        warnings: [
            'Beauty conceals danger',
            'Surface without depth disappoints'
        ],
        blessings: [
            'Grace under pressure',
            'Attraction brings allies',
            'Beauty heals'
        ]
    },
    {
        id: 'Ofun',
        name: 'Ofun',
        binary: '00111100',
        yorubaName: 'Ọ̀fún',
        primaryOrisha: [
            'ORUNMILA'
        ],
        traditionalMeaning: 'White, purity, elderhood, wisdom earned. The white cloth of initiation. Completion of cycles.',
        themes: [
            'purity',
            'elderhood',
            'wisdom',
            'completion',
            'white'
        ],
        teachings: [
            'Purity requires vigilance',
            'Elderhood is earned, not given',
            'Completion is a beginning disguised'
        ],
        worldInterpretation: {
            financial: 'White knight investors. Ethical investing peaks. ESG dominates. Wisdom-based management.',
            political: 'Elder statesmen consulted. Term limits respected. Institutional knowledge valued. Post-political wisdom.',
            social: 'Ageism challenged. Elder wisdom platforms. Rites of passage return. Completion celebrations.',
            technological: 'Clean tech dominates. White hat hackers. Ethical AI initiatives. Transparency standards.'
        },
        warnings: [
            'Purity can become rigidity',
            'Elders must make way for youth'
        ],
        blessings: [
            'Wisdom acknowledged',
            'Cycles complete',
            'Purity of purpose'
        ]
    },
    {
        id: 'IworiOse',
        name: 'Iwori-Ose',
        binary: '11000011',
        yorubaName: 'Ìwòrì-Ọ̀sẹ́',
        primaryOrisha: [
            'ESU'
        ],
        traditionalMeaning: 'The crossroads (vertical), trickster energy, paradox. The meeting of heaven and earth. Esu\'s home.',
        themes: [
            'crossroads',
            'trickster',
            'paradox',
            'liminality',
            'choice'
        ],
        teachings: [
            'Choice creates the chooser',
            'The trickster teaches through deception',
            'Liminality is the space of becoming'
        ],
        worldInterpretation: {
            financial: 'Market inflection points. Pivot or perish moments. Contrarian bets pay off. Unlikely alliances.',
            political: 'Third parties gain. Neither left nor right solutions. Political realignment. Strange bedfellows.',
            social: 'Gender fluidity mainstreams. Non-binary identities. Liminal spaces celebrated. Choice paralysis.',
            technological: 'Quantum computing advances. Superposition states. Paradox exploitation. Qubit technology.'
        },
        warnings: [
            'Choice made cannot be unmade',
            'Crossroads is dangerous place'
        ],
        blessings: [
            'Choice is power',
            'Liminality is creative',
            'Trickster teaches'
        ]
    }
];
function generateAllOdu() {
    const allOdu = [
        ...PRIMARY_ODU
    ];
    // The 256 Odù are combinations of the 16 primary patterns meeting each other
    // For educational purposes, we provide the primary 16 with compound interpretations
    // A full implementation would include all 256 with their specific verses
    return allOdu;
}
function getOduByBinary(binary) {
    return PRIMARY_ODU.find((o)=>o.binary === binary);
}
function getOduByName(name) {
    return PRIMARY_ODU.find((o)=>o.name.toLowerCase() === name.toLowerCase() || o.yorubaName.toLowerCase() === name.toLowerCase() || o.id.toLowerCase() === name.toLowerCase());
}
function castOduIfa(date, moonPhase, planetaryPositions) {
    // In authentic Ifa, casting involves ritual processes
    // This is a respectful educational simulation based on astronomical factors
    const primaryOdu = PRIMARY_ODU;
    // Use moon phase and planetary data to determine Odù
    // New moon (0) = Oyeku (darkness)
    // Full moon (0.5) = Ogbe (light)
    // Quarter moons = transitional Odù
    let selectedIndex = 0;
    if (moonPhase < 0.125) selectedIndex = 1; // Oyeku - new moon
    else if (moonPhase < 0.25) selectedIndex = 2; // Iwori - waxing crescent
    else if (moonPhase < 0.375) selectedIndex = 6; // Obara - first quarter
    else if (moonPhase < 0.5) selectedIndex = 12; // Ose - waxing gibbous
    else if (moonPhase < 0.625) selectedIndex = 0; // Ogbe - full moon
    else if (moonPhase < 0.75) selectedIndex = 13; // Ofun - waning gibbous
    else if (moonPhase < 0.875) selectedIndex = 7; // Okanran - last quarter
    else selectedIndex = 1; // Oyeku - waning crescent
    // Modify based on planetary retrogrades (adds complexity)
    if (planetaryPositions?.saturnRetrograde) {
        selectedIndex = (selectedIndex + 4) % primaryOdu.length; // Shift toward Irosun/Ogunda
    }
    return primaryOdu[selectedIndex];
}
function interpretForWorldContext(odu, context) {
    return odu.worldInterpretation[context];
}
const ESE_IFA_REFERENCES = {
    // References to Ifa verses for further study
    // These would point to specific Odu Ifa verses in traditional corpus
    ogbe: 'Eji Ogbe - The light that illuminates all paths',
    oyeku: 'Oyeku Meji - The darkness that births light',
    iwori: 'Iwori Meji - The inverting of inward sight',
    odi: 'Odi Meji - The container of all possibilities',
    irosun: 'Irosun Meji - The suffering that forges',
    owonrin: 'Owonrin Meji - The reversal of ages',
    obara: 'Obara Meji - The lightning of truth',
    okanran: 'Okanran Meji - The blocked path cleared',
    ogunda: 'Ogunda Meji - The focused strike',
    osa: 'Osa Meji - The power of the left',
    etura: 'Etura Meji - The scattering of seeds',
    irete: 'Irete Meji - The marketplace of destinies',
    ose: 'Ose Meji - The sweetness that conquers',
    ofun: 'Ofun Meji - The white cloth of completion',
    iworiOse: 'Iwori-Ose - The crossroads of heaven and earth'
};
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorldOracleDashboard",
    ()=>WorldOracleDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$ephemeris$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/ephemeris.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$financialAstrology$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/financialAstrology.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$politicalAstrology$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/jyotish/politicalAstrology.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$worldInterpreter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/lib/agents/worldInterpreter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/oduIfa.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/orishas.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function WorldOracleDashboard() {
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('overview');
    const [transits, setTransits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [financial, setFinancial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [political, setPolitical] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [worldOracle, setWorldOracle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOdu, setSelectedOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [expandedOrisha, setExpandedOrisha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadWorldData();
    }, []);
    const loadWorldData = ()=>{
        setIsLoading(true);
        // Get real astronomical data
        const currentTransits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$ephemeris$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getRealTimeTransits"])();
        setTransits(currentTransits);
        // Cast traditional Odù
        const moonPhase = currentTransits.moonPhase;
        const odu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["castOduIfa"])(new Date(), moonPhase, currentTransits.positions);
        setSelectedOdu(odu);
        // Generate readings
        setFinancial((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$financialAstrology$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFinancialReading"])(currentTransits));
        setPolitical((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$jyotish$2f$politicalAstrology$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generatePoliticalReading"])(currentTransits, odu));
        setWorldOracle((0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$lib$2f$agents$2f$worldInterpreter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateWorldOracle"])(currentTransits, odu));
        setIsLoading(false);
    };
    const getOrishaIcon = (name)=>{
        switch(name){
            case 'ORUNMILA':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 65,
                    columnNumber: 31
                }, this);
            case 'OGUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 66,
                    columnNumber: 27
                }, this);
            case 'OSHUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 67,
                    columnNumber: 28
                }, this);
            case 'SHANGO':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 68,
                    columnNumber: 29
                }, this);
            case 'ESU':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 69,
                    columnNumber: 26
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                    lineNumber: 70,
                    columnNumber: 23
                }, this);
        }
    };
    if (isLoading || !transits || !financial || !political || !worldOracle || !selectedOdu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                        className: "w-12 h-12 animate-pulse mx-auto mb-4 text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Casting world auguries..."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2",
                        children: "Calculating real astronomical positions"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8 border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-4 h-4 text-purple-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-purple-300",
                                children: "World Oracle"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-white mb-2",
                        children: "Global Transit Analysis"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Real-time astronomical positions with Orisha interpretations for world affairs. Financial, political, and social analysis based on current celestial alignments."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: loadWorldData,
                        disabled: isLoading,
                        className: "mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30    transition-colors text-sm text-purple-300 mx-auto disabled:opacity-50 disabled:cursor-not-allowed",
                        children: [
                            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            isLoading ? 'Recalculating...' : 'Refresh Calculations'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center gap-2",
                children: [
                    {
                        id: 'overview',
                        label: 'Overview',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
                    },
                    {
                        id: 'financial',
                        label: 'Financial',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
                    },
                    {
                        id: 'political',
                        label: 'Political',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"]
                    },
                    {
                        id: 'orisha-readings',
                        label: 'Orisha Council',
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
                    }
                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setViewMode(tab.id),
                        className: `
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${viewMode === tab.id ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
            `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            tab.label
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    viewMode === 'overview' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold text-amber-400",
                                                    children: selectedOdu.binary
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-bold text-white",
                                                                children: selectedOdu.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm text-amber-400",
                                                                children: [
                                                                    "(",
                                                                    selectedOdu.yorubaName,
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-amber-200/80 mb-3",
                                                        children: selectedOdu.traditionalMeaning
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: selectedOdu.themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300",
                                                                children: theme
                                                            }, theme, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-medium text-green-400 mb-2",
                                                        children: "Financial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-300",
                                                        children: selectedOdu.worldInterpretation.financial
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-medium text-red-400 mb-2",
                                                        children: "Political"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-300",
                                                        children: selectedOdu.worldInterpretation.political
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Moon Phase",
                                        value: `${(transits.moonPhase * 100).toFixed(0)}%`,
                                        subtext: transits.moonPhase < 0.5 ? 'Waxing' : 'Waning',
                                        color: "amber"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Retrograde",
                                        value: transits.retrogradePlanets.length.toString(),
                                        subtext: transits.retrogradePlanets.join(', ') || 'None',
                                        color: "purple"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Outlook",
                                        value: financial.overallOutlook,
                                        subtext: `${(financial.confidence * 100).toFixed(0)}% confidence`,
                                        color: financial.overallOutlook === 'bullish' ? 'green' : financial.overallOutlook === 'bearish' ? 'red' : 'blue'
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                        label: "Stability",
                                        value: political.overallStability,
                                        subtext: `${political.globalTrends.length} major trends`,
                                        color: political.overallStability === 'stable' ? 'green' : political.overallStability === 'volatile' ? 'red' : 'yellow'
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "w-5 h-5 text-indigo-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this),
                                            "Council Synthesis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-indigo-400",
                                                        children: "Overall Theme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white text-lg",
                                                        children: worldOracle.synthesis.overallTheme
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-indigo-400",
                                                        children: "Collective Lessons"
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-2 space-y-1",
                                                        children: worldOracle.synthesis.collectiveLessons.slice(0, 3).map((lesson, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-gray-300 text-sm flex items-start gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-indigo-400",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    lesson
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "overview", true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    viewMode === 'financial' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-green-500/10 border border-green-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-green-400 mb-2",
                                                children: "Overall Outlook"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-2xl font-bold capitalize ${financial.overallOutlook === 'bullish' ? 'text-green-400' : financial.overallOutlook === 'bearish' ? 'text-red-400' : financial.overallOutlook === 'volatile' ? 'text-yellow-400' : 'text-blue-400'}`,
                                                children: financial.overallOutlook
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 mt-1",
                                                children: [
                                                    (financial.confidence * 100).toFixed(0),
                                                    "% confidence"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 261,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-amber-500/10 border border-amber-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-amber-400 mb-2",
                                                children: "Major Indicators"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    financial.majorIndicators.jupiterSaturn.slice(0, 60),
                                                    "..."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-red-500/10 border border-red-500/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-medium text-red-400 mb-2",
                                                children: "Active Warnings"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-300",
                                                children: [
                                                    financial.warnings.length,
                                                    " alerts active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Sector Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: financial.keySectors.map((sector, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: sector.sector
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 284,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${sector.outlook === 'strong' ? 'bg-green-500/20 text-green-400' : sector.outlook === 'weak' ? 'bg-red-500/20 text-red-400' : sector.outlook === 'volatile' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-blue-500/20 text-blue-400'}`,
                                                                children: sector.outlook
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 285,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mb-2",
                                                        children: sector.analysis
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1",
                                                        children: sector.keyTransits.map((transit, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-500",
                                                                children: transit
                                                            }, j, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Asset Classes"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: financial.assetClasses.map((asset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: asset.asset
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs ${asset.trend === 'up' ? 'text-green-400' : asset.trend === 'down' ? 'text-red-400' : asset.trend === 'volatile' ? 'text-yellow-400' : 'text-gray-400'}`,
                                                                children: asset.trend
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: asset.analysis
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 310,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "financial", true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    viewMode === 'political' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Global Trends"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: political.globalTrends.map((trend, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: trend.theme
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${trend.intensity === 'extreme' ? 'bg-red-500/20 text-red-400' : trend.intensity === 'high' ? 'bg-orange-500/20 text-orange-400' : trend.intensity === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`,
                                                                children: trend.intensity
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400 mb-2",
                                                        children: trend.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-xs text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Duration: ",
                                                                    trend.duration
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 357,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 358,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Planets: ",
                                                                    trend.drivingPlanets.join(', ')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 359,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 343,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 339,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-5 h-5 text-red-400"
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            "Conflict Zones"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: political.conflictZones.map((conflict, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: conflict.type
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${conflict.risk === 'critical' ? 'bg-red-500/20 text-red-400' : conflict.risk === 'high' ? 'bg-orange-500/20 text-orange-400' : conflict.risk === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`,
                                                                children: [
                                                                    conflict.risk,
                                                                    " risk"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 21
                                                    }, this),
                                                    conflict.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-1",
                                                        children: [
                                                            "Location: ",
                                                            conflict.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: conflict.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-white mb-4",
                                        children: "Major Powers"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: political.majorPowers.map((power, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl bg-black/30",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-medium text-white",
                                                                children: power.nation
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `px-2 py-1 rounded text-xs ${power.leadership === 'crisis' ? 'bg-red-500/20 text-red-400' : power.leadership === 'challenged' ? 'bg-yellow-500/20 text-yellow-400' : power.leadership === 'changing' ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'}`,
                                                                children: power.leadership
                                                            }, void 0, false, {
                                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-400",
                                                        children: power.outlook
                                                    }, void 0, false, {
                                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "political", true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this),
                    viewMode === 'orisha-readings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -20
                        },
                        className: "space-y-4",
                        children: worldOracle.readings.map((reading, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer",
                                onClick: ()=>setExpandedOrisha(expandedOrisha === reading.orisha ? null : reading.orisha),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                            style: {
                                                backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][reading.orisha].color}30`
                                            },
                                            children: getOrishaIcon(reading.orisha)
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                            lineNumber: 436,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-bold text-white",
                                                                    children: reading.orisha
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$orishas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ORISHA_PERSONAS"][reading.orisha].title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm text-gray-400",
                                                                    children: [
                                                                        (reading.confidence * 100).toFixed(0),
                                                                        "% confidence"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 25
                                                                }, this),
                                                                expandedOrisha === reading.orisha ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                    className: "w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 453,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                    className: "w-5 h-5 text-gray-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 leading-relaxed",
                                                    children: reading.interpretation
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this),
                                                expandedOrisha === reading.orisha && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        height: 0
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        height: 'auto'
                                                    },
                                                    className: "mt-4 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg bg-red-500/10 border border-red-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-red-400 mb-2",
                                                                    children: "Warnings"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: reading.warnings.map((warning, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-gray-400 flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-red-400",
                                                                                    children: "⚠"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                                    lineNumber: 473,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                warning
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 472,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg bg-green-500/10 border border-green-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-green-400 mb-2",
                                                                    children: "Opportunities"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 482,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: reading.opportunities.map((opp, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-gray-400 flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-green-400",
                                                                                    children: "✦"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                                    lineNumber: 486,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                opp
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 485,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 483,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-3 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded bg-white/5 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 block",
                                                                            children: "Immediate"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 496,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-300",
                                                                            children: reading.timeframes.immediate
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 497,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 495,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded bg-white/5 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 block",
                                                                            children: "Short Term"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-300",
                                                                            children: reading.timeframes.shortTerm
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 501,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-2 rounded bg-white/5 text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 block",
                                                                            children: "Long Term"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 504,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-gray-300",
                                                                            children: reading.timeframes.longTerm
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 505,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 503,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-indigo-400 mb-2",
                                                                    children: "Specific Predictions"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-1",
                                                                    children: reading.specificPredictions.map((pred, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "text-sm text-gray-400 flex items-start gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-indigo-400",
                                                                                    children: "◆"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                                    lineNumber: 515,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                pred
                                                                            ]
                                                                        }, j, true, {
                                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                            lineNumber: 514,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                                    lineNumber: 512,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                            lineNumber: 442,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                    lineNumber: 435,
                                    columnNumber: 17
                                }, this)
                            }, reading.orisha, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                                lineNumber: 430,
                                columnNumber: 15
                            }, this))
                    }, "orisha-readings", false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                        lineNumber: 422,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function StatCard({ label, value, subtext, color }) {
    const colorClasses = {
        green: 'bg-green-500/10 border-green-500/20 text-green-400',
        red: 'bg-red-500/10 border-red-500/20 text-red-400',
        blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
        yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
        amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
        purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl border ${colorClasses[color]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs uppercase tracking-wider opacity-70",
                children: label
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2xl font-bold mt-1",
                children: value
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm opacity-70 mt-1 truncate",
                children: subtext
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/WorldOracle.tsx",
        lineNumber: 550,
        columnNumber: 5
    }, this);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OduOfWeek",
    ()=>OduOfWeek
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/src/data/oduIfa.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/binary.js [app-ssr] (ecmascript) <export default as Binary>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scroll.js [app-ssr] (ecmascript) <export default as Scroll>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/scale.js [app-ssr] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/cpu.js [app-ssr] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/openclaw-orisha2/ori-cult/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
'use client';
;
;
;
;
;
function OduOfWeek() {
    const [currentOdu, setCurrentOdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedSection, setExpandedSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('meaning');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedOduId, setSelectedOduId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [weekOffset, setWeekOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadOduOfWeek();
    }, [
        weekOffset
    ]);
    const loadOduOfWeek = ()=>{
        setIsLoading(true);
        // Calculate which Odù is active based on current week
        const now = new Date();
        now.setDate(now.getDate() + weekOffset * 7);
        const weekOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (7 * 24 * 60 * 60 * 1000));
        const oduIndex = weekOfYear % __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_ODU"].length;
        setCurrentOdu(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_ODU"][oduIndex]);
        setIsLoading(false);
    };
    const selectOdu = (oduId)=>{
        const odu = __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_ODU"].find((o)=>o.id === oduId);
        if (odu) {
            setSelectedOduId(oduId);
            setCurrentOdu(odu);
        }
    };
    const getOrishaIcon = (orisha)=>{
        switch(orisha){
            case 'ORUNMILA':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 61,
                    columnNumber: 31
                }, this);
            case 'OGUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 62,
                    columnNumber: 27
                }, this);
            case 'OSHUN':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 63,
                    columnNumber: 28
                }, this);
            case 'SHANGO':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 64,
                    columnNumber: 29
                }, this);
            case 'ESU':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 65,
                    columnNumber: 26
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 66,
                    columnNumber: 23
                }, this);
        }
    };
    if (isLoading || !currentOdu) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                        className: "w-12 h-12 animate-pulse mx-auto mb-4 text-amber-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Consulting the Odù..."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-4 h-4 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-amber-300",
                                children: "Sacred Pattern Library"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-white mb-2",
                        children: "Odù of the Week"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto",
                        children: "Explore the 16 primary Odù Ifa patterns. Each week highlights a different sacred pattern with detailed traditional meanings and world-level interpretations."
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset((prev)=>prev - 1),
                                className: "p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-400",
                                children: weekOffset === 0 ? 'Current Week' : weekOffset > 0 ? `+${weekOffset} weeks` : `${weekOffset} weeks`
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset((prev)=>prev + 1),
                                className: "p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setWeekOffset(0),
                                className: "ml-4 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 text-sm hover:bg-amber-500/30 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        className: "w-4 h-4 inline mr-1"
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    " Current"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl bg-white/5 border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-500 mb-3",
                        children: "Select an Odù to explore:"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$src$2f$data$2f$oduIfa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_ODU"].map((odu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>selectOdu(odu.id),
                                className: `
                px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${currentOdu.id === odu.id ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'}
              `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs opacity-70",
                                        children: odu.id
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-2",
                                        children: odu.name
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, odu.id, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8 rounded-2xl bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-amber-900/30 border border-amber-500/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-start gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-24 h-24 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-mono font-bold text-amber-400",
                                    children: currentOdu.binary
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-3xl font-bold text-white",
                                                children: currentOdu.name
                                            }, void 0, false, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                lineNumber: 155,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg text-amber-400",
                                                children: [
                                                    "(",
                                                    currentOdu.yorubaName,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                lineNumber: 156,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-amber-200/80 text-lg leading-relaxed",
                                        children: currentOdu.traditionalMeaning
                                    }, void 0, false, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mt-4",
                                        children: [
                                            currentOdu.primaryOrisha.map((orisha)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/10 text-amber-300",
                                                    children: [
                                                        getOrishaIcon(orisha),
                                                        orisha
                                                    ]
                                                }, orisha, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this)),
                                            currentOdu.themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1.5 rounded-full text-sm bg-amber-500/20 text-amber-300",
                                                    children: theme
                                                }, theme, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "Sacred Teachings",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scroll$3e$__["Scroll"],
                                isExpanded: expandedSection === 'teachings',
                                onToggle: ()=>setExpandedSection(expandedSection === 'teachings' ? null : 'teachings'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: currentOdu.teachings.map((teaching, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 text-xs text-amber-400",
                                                    children: i + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-300 leading-relaxed",
                                                    children: teaching
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "World-Level Interpretations",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                                isExpanded: expandedSection === 'world',
                                onToggle: ()=>setExpandedSection(expandedSection === 'world' ? null : 'world'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Financial",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                                            color: "green",
                                            content: currentOdu.worldInterpretation.financial
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Political",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"],
                                            color: "red",
                                            content: currentOdu.worldInterpretation.political
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Social",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                            color: "blue",
                                            content: currentOdu.worldInterpretation.social
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InterpretationCard, {
                                            title: "Technological",
                                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
                                            color: "purple",
                                            content: currentOdu.worldInterpretation.technological
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "Warnings & Blessings",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
                                isExpanded: expandedSection === 'warnings',
                                onToggle: ()=>setExpandedSection(expandedSection === 'warnings' ? null : 'warnings'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-red-400 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Warnings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: currentOdu.warnings.map((warning, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-red-400/50",
                                                                    children: "⚠"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                warning
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 247,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-green-400 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Blessings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: currentOdu.blessings.map((blessing, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-2 text-sm text-gray-400",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-green-400/50",
                                                                    children: "✦"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 23
                                                                }, this),
                                                                blessing
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandableSection, {
                                title: "Binary Pattern Analysis",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$binary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Binary$3e$__["Binary"],
                                isExpanded: expandedSection === 'binary',
                                onToggle: ()=>setExpandedSection(expandedSection === 'binary' ? null : 'binary'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-1",
                                            children: currentOdu.binary.split('').map((bit, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${bit === '1' ? 'bg-amber-500/30 text-amber-300' : 'bg-gray-800 text-gray-500'}`,
                                                    children: bit
                                                }, i, false, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-400 text-center",
                                            children: [
                                                "Each Odù is represented by 8 binary digits (two figures of 4 lines each). This pattern is ",
                                                currentOdu.binary,
                                                " in binary, representing the ",
                                                currentOdu.name,
                                                " configuration."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 block mb-1",
                                                            children: "Upper Figure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 304,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-mono text-amber-400",
                                                            children: currentOdu.binary.slice(0, 4)
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 305,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-lg bg-white/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500 block mb-1",
                                                            children: "Lower Figure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-mono text-amber-400",
                                                            children: currentOdu.binary.slice(4, 8)
                                                        }, void 0, false, {
                                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                            lineNumber: 302,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl bg-white/5 border border-white/10 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400",
                    children: "Use the week navigation above to see which Odù governs different time periods, or click any Odù in the selector to explore its meanings in depth."
                }, void 0, false, {
                    fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
function ExpandableSection({ title, icon: Icon, isExpanded, onToggle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-white/10 rounded-xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onToggle,
                className: "w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "w-5 h-5 text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-white",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        className: "w-5 h-5 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 356,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: "w-5 h-5 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: 'auto'
                },
                className: "p-4 border-t border-white/10",
                children: children
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
        lineNumber: 346,
        columnNumber: 5
    }, this);
}
function InterpretationCard({ title, icon: Icon, color, content }) {
    const colorClasses = {
        green: 'border-green-500/30 bg-green-500/10',
        red: 'border-red-500/30 bg-red-500/10',
        blue: 'border-blue-500/30 bg-blue-500/10',
        purple: 'border-purple-500/30 bg-purple-500/10'
    };
    const iconColors = {
        green: 'text-green-400',
        red: 'text-red-400',
        blue: 'text-blue-400',
        purple: 'text-purple-400'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-4 rounded-xl border ${colorClasses[color]}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        className: `w-4 h-4 ${iconColors[color]}`
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm font-medium ${iconColors[color]}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$openclaw$2d$orisha2$2f$ori$2d$cult$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-300 leading-relaxed",
                children: content
            }, void 0, false, {
                fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/openclaw-orisha2/ori-cult/src/components/dashboard/OduOfWeek.tsx",
        lineNumber: 400,
        columnNumber: 5
    }, this);
}
}),
"[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/openclaw-orisha2/ori-cult/src/components/dashboard/DailyOracle.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b575acb._.js.map