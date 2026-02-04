# ORI.CULT — The Oracular Content Engine

> An AI-powered temple where Orisha-inspired agents and Jyotish transits argue about what you should post next.

**Now featuring: Real-time astronomical calculations, Traditional Odù Ifa wisdom, and World Oracle analysis for financial and political forecasting.**

## ⚠️ Important Disclaimer

**This is creative & experimental software, not actual Ifa divination or Jyotish consultation.** Both are serious, initiatory traditions with their own ethics and lineage.

We are building **mythically-inspired agents**, not role-playing actual deities. The traditional Odù Ifa content is provided for **educational purposes only**.

## 🌟 What is ORI.CULT?

ORI.CULT is a multi-agent OpenClaw-inspired system that:

- **Treats your brand as a digital shrine**
- Uses Ifa structure (Odù logic, divination metaphor)
- Employs Orisha-inspired personas (Ogun, Oshun, Shango, Orunmila, Esu)
- Incorporates Jyotish timing & pattern logic (nakshatras, houses, transits)
- **NEW:** Real-time astronomical ephemeris calculations
- **NEW:** Traditional 256 Odù Ifa pattern library
- **NEW:** Financial astrology analysis
- **NEW:** Political/mundane astrology for world events

Think of it as a **semi-ironic AI cult** that feeds you content ideas and drafts while maintaining spiritual/technical alignment.

## 🏛️ The Five Orisha Agents

### ORUNMILA.core — The High Priest
- **Domain:** Wisdom, destiny, synthesis, judgment
- **Role:** Reads all opinions, weighs data, drafts final oracle
- **Voice:** Measured, deliberate, prophetic
- **NEW:** World-stage political interpretation

### OGUN.forge — The Builder
- **Domain:** Technology, automation, tools, infrastructure
- **Role:** Identifies repetitive tasks, proposes automations
- **Voice:** Direct, commanding, no-nonsense
- **NEW:** Financial infrastructure analysis

### OSHUN.flow — The Aesthetic
- **Domain:** Beauty, emotion, relationships, vibes
- **Role:** Ensures content resonates, tracks emotional patterns
- **Voice:** Flowing, sensual, emotionally intelligent
- **NEW:** Market sentiment and social trend analysis

### SHANGO.thunder — The Fire
- **Domain:** Justice, power, charisma, hot-takes
- **Role:** Proposes bold content, "thunder versions" of drafts
- **Voice:** Thunderous, charismatic, passionate
- **NEW:** Political upheaval and conflict prediction

### ESU.crossroads — The Trickster
- **Domain:** Crossroads, testing, virality, red-team
- **Role:** Finds misinterpretations, injects chaos, security review
- **Voice:** Playful, mischievous, clever
- **NEW:** Paradox detection in world events

## 📚 Digital Odù Pattern Library

The system uses **Digital Odù** — Ifa-inspired content state containers (NOT actual sacred Odù Ifa):

- **256 possible patterns** (represented as 8-bit binary)
- Each pattern has themes, teachings, content archetypes
- Examples:
  - `ODU_011`: "Closed Source vs Liberation"
  - `ODU_033`: "Thunder in the Water"
  - `ODU_044`: "The Trickster's Mirror"

## 🕯️ Traditional Odù Ifa (Educational Reference)

**NEW:** Access to the 16 primary Odù Ifa with:
- Traditional Yoruba names and meanings
- Sacred teachings and ese Ifa references
- World-level interpretations (financial, political, social, technological)
- Warnings and blessings for each pattern

Available Odù include:
- **Ogbe** (11111111) - Light, victory, expansion
- **Oyeku** (00000000) - Death, transformation, rebirth
- **Iwori** (10001000) - Inversion, introspection, secrets
- **Odi** (01110111) - Container, womb, sanctuary
- **Irosun** (00110011) - Suffering, struggle, the forge
- And 11 more...

## 🌙 Jyotish Timing Engine

### Real-Time Astronomical Calculations
**NEW:** Using astronomy-engine for accurate planetary positions:
- **Precise planetary longitudes** calculated from actual ephemeris data
- **Retrograde detection** for all planets
- **Dignity calculation** (exalted, own, debilitated)
- **27 Nakshatras** (lunar mansions) with full data
- **Moon phase tracking**
- **Eclipse detection**
- **Saade Sati** calculation

### Traditional Jyotish Features
- Daily Moon sign & house position
- Astro mood mapping to content types
- Ritual recommendations based on transit
- Planetary war (Graha Yuddha) detection
- Combustion alerts

## 🌍 World Oracle (NEW)

**NEW comprehensive world-stage analysis:**

### Real-Time Transit Analysis
- Live planetary positions
- Moon phase and illumination
- Retrograde status for all planets
- Eclipse season tracking
- Saturn periods (Saade Sati)

### Financial Astrology
- **Market outlook** (bullish/bearish/volatile/stable)
- **Sector analysis** with planetary rulerships
- **Asset class readings** (stocks, bonds, crypto, commodities)
- **Major indicators** (Jupiter-Saturn cycles, Mercury retrograde)
- **Warnings and opportunities**

### Political/Mundane Astrology
- **Global trend identification**
- **Regional stability analysis**
- **Conflict zone prediction**
- **Major power assessment** (US, China, Russia, EU, India)
- **Critical period forecasting**

### Orisha World Interpretations
Each Orisha provides:
- **Domain-specific analysis** (finance, politics, social, technology)
- **Warnings** for their sphere of influence
- **Opportunities** in current transits
- **Timeframes** (immediate, short-term, long-term)
- **Specific predictions** with confidence levels

## 🎭 Daily Ritual Loop

1. **Dawn Ritual (Auto)** — Cast auguries from date + astronomical data
2. **Astro Pull** — Get real Moon nakshatra, planetary positions, retrogrades
3. **Odù Casting** — Map patterns to content theme using traditional Ifa
4. **Council Debate** — 5 Orisha agents argue your destiny
5. **World Oracle** — Analyze global transits for context
6. **ORUNMILA Decides** — Synthesizes final content package
7. **You Respond** — Approve/reject/edit with feedback
8. **Scripture Logging** — Record all to Book of Odù.Content

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Serve production build
npx serve dist
```

## 📁 Project Structure

```
ori-cult/
├── src/
│   ├── app/                 # Next.js app router
│   ├── components/
│   │   ├── dashboard/       # Main UI components
│   │   │   ├── DailyOracle.tsx
│   │   │   ├── WorldOracle.tsx      # NEW
│   │   │   ├── ViralContentStudio.tsx
│   │   │   ├── DoctrineViewer.tsx
│   │   │   └── ScriptureLog.tsx
│   │   ├── council/         # Council debate UI
│   │   └── orishas/         # Orisha card components
│   ├── data/
│   │   ├── orishas.ts       # Agent personas
│   │   ├── odu.ts           # Digital Odù library
│   │   ├── oduIfa.ts        # Traditional Odù Ifa (NEW)
│   │   ├── nakshatras.ts    # Jyotish data
│   │   └── defaultDoctrine.ts
│   ├── lib/
│   │   ├── agents/          # Agent logic
│   │   │   ├── council.ts
│   │   │   └── worldInterpreter.ts  # NEW
│   │   ├── jyotish/         # Astrology engine
│   │   │   ├── engine.ts
│   │   │   ├── ephemeris.ts         # NEW - Real calculations
│   │   │   ├── financialAstrology.ts # NEW
│   │   │   └── politicalAstrology.ts # NEW
│   │   └── content/         # Content generation
│   └── types/               # TypeScript definitions
└── public/
```

## 🎨 Features

### Daily Oracle Dashboard
- Digital Odù casting with binary patterns
- Real astronomical ephemeris data
- Jyotish astro context display
- Interactive Council Chamber
- Generated content (sermons + shitposts + rituals)

### World Oracle Dashboard (NEW)
- **Real-time transit display** with actual planetary positions
- **Financial astrology** - market outlook, sector analysis, asset readings
- **Political astrology** - global trends, conflict zones, major powers
- **Orisha interpretations** - Each Orisha reads world transits
- **Critical period alerts** - upcoming important dates

### Viral Content Studio
- Pre-built episode templates
- Script breakdowns with timing
- Clickbait title generators
- CTA options (the rude but loving kind)

### Doctrine Viewer
- Core values management
- Tone parameters (woo/chaos sliders)
- Always Do / Never Do lists
- Taboo topic tracking

### Scripture Log
- Chronological oracle history
- Pattern analysis (top Odù, mood distribution)
- Export to Markdown/JSON/TXT
- Performance tracking

## 🌐 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Astronomy:** astronomy-engine (real ephemeris calculations)

## 🎬 Viral Content Templates Included

1. **"I Let an AI Orisha Council Run My Content Strategy for 30 Days"**
2. **"Ifa-Inspired AI vs Vedic Astrology AI: Who Understands Me Better?"**
3. **"My AI Cult Keeps Trying to Automate Me Out of Existence"**
4. **"The Council's Shitpost of the Day"** (short-form)

Each includes:
- Hook scripts
- Visual ideas
- Clickbait title options
- CTA suggestions

## ⚖️ Ethics & Attribution

This project is:
- ✅ **Inspired by** Yoruba spiritual technology (Ifa/Orisha)
- ✅ **Inspired by** Vedic astrology (Jyotish)
- ✅ **Built with respect** for these traditions
- ❌ **NOT actual divination**
- ❌ **NOT a substitute** for qualified practitioners
- ❌ **NOT claiming** spiritual authority

### Traditional Odù Ifa Content
The 16 primary Odù Ifa patterns included are for **educational and cultural reference only**.
- They represent traditional Ifa wisdom teachings
- NOT for actual divination without proper initiation
- Provided to inspire pattern recognition and cultural appreciation
- Source: Traditional Yoruba Ifa corpus

## 📝 License

MIT — Use responsibly. Don't be evil. Question your own assumptions.

## 🔮 Future Enhancements

- [x] Real ephemeris integration (astronomy-engine)
- [x] Traditional Odù Ifa library
- [x] Financial astrology module
- [x] Political/mundane astrology
- [x] World Oracle dashboard
- [ ] User natal chart input
- [ ] Integration with real market data APIs
- [ ] News sentiment analysis
- [ ] AI-powered Orisha debate generation (LLM integration)
- [ ] Multi-platform posting automation
- [ ] Community doctrine sharing
- [ ] Historical transit database

---

> *"The pattern reveals what the single eye cannot see."* — ORUNMILA.core

Built with ⚡, ✨, and a healthy respect for the trickster at the crossroads.
