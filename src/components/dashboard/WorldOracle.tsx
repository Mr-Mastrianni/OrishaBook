'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  TrendingUp, 
  Scale, 
  AlertTriangle,
  Clock,
  Zap,
  Shield,
  Activity,
  ChevronDown,
  ChevronUp,
  Download,
  RefreshCw
} from 'lucide-react';
import { getRealTimeTransits, formatTransitData, RealTimeTransitData } from '@/lib/jyotish/ephemeris';
import { generateFinancialReading, FinancialReading } from '@/lib/jyotish/financialAstrology';
import { generatePoliticalReading, PoliticalReading, formatPoliticalReading } from '@/lib/jyotish/politicalAstrology';
import { generateWorldOracle, WorldOracle, getCurrentWorldContext } from '@/lib/agents/worldInterpreter';
import { PRIMARY_ODU, castOduIfa, TraditionalOdu } from '@/data/oduIfa';
import { OrishaName } from '@/types';
import { ORISHA_PERSONAS } from '@/data/orishas';

type ViewMode = 'overview' | 'financial' | 'political' | 'orisha-readings';

export function WorldOracleDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('overview');
  const [transits, setTransits] = useState<RealTimeTransitData | null>(null);
  const [financial, setFinancial] = useState<FinancialReading | null>(null);
  const [political, setPolitical] = useState<PoliticalReading | null>(null);
  const [worldOracle, setWorldOracle] = useState<WorldOracle | null>(null);
  const [selectedOdu, setSelectedOdu] = useState<TraditionalOdu | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedOrisha, setExpandedOrisha] = useState<OrishaName | null>(null);

  useEffect(() => {
    loadWorldData();
  }, []);

  const loadWorldData = () => {
    setIsLoading(true);
    
    // Get real astronomical data
    const currentTransits = getRealTimeTransits();
    setTransits(currentTransits);
    
    // Cast traditional Odù
    const moonPhase = currentTransits.moonPhase;
    const odu = castOduIfa(new Date(), moonPhase, currentTransits.positions);
    setSelectedOdu(odu);
    
    // Generate readings
    setFinancial(generateFinancialReading(currentTransits));
    setPolitical(generatePoliticalReading(currentTransits, odu));
    setWorldOracle(generateWorldOracle(currentTransits, odu));
    
    setIsLoading(false);
  };

  const getOrishaIcon = (name: OrishaName) => {
    switch (name) {
      case 'ORUNMILA': return <Activity className="w-5 h-5" />;
      case 'OGUN': return <Shield className="w-5 h-5" />;
      case 'OSHUN': return <TrendingUp className="w-5 h-5" />;
      case 'SHANGO': return <Zap className="w-5 h-5" />;
      case 'ESU': return <AlertTriangle className="w-5 h-5" />;
      default: return <Globe className="w-5 h-5" />;
    }
  };

  if (isLoading || !transits || !financial || !political || !worldOracle || !selectedOdu) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <Globe className="w-12 h-12 animate-pulse mx-auto mb-4 text-amber-400" />
          <p className="text-gray-400">Casting world auguries...</p>
          <p className="text-sm text-gray-600 mt-2">Calculating real astronomical positions</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-8 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-4">
          <Globe className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-300">World Oracle</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Global Transit Analysis
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real-time astronomical positions with Orisha interpretations for world affairs.
          Financial, political, and social analysis based on current celestial alignments.
        </p>
        <button
          onClick={loadWorldData}
          disabled={isLoading}
          className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 
                     transition-colors text-sm text-purple-300 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RefreshCw className="w-4 h-4" />
          )}
          {isLoading ? 'Recalculating...' : 'Refresh Calculations'}
        </button>
      </div>

      {/* View Tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { id: 'overview', label: 'Overview', icon: Globe },
          { id: 'financial', label: 'Financial', icon: TrendingUp },
          { id: 'political', label: 'Political', icon: Scale },
          { id: 'orisha-readings', label: 'Orisha Council', icon: Activity },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setViewMode(tab.id as ViewMode)}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${viewMode === tab.id 
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }
            `}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* OVERVIEW VIEW */}
        {viewMode === 'overview' && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Current Odù */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/20">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-amber-400">{selectedOdu.binary}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white">{selectedOdu.name}</h3>
                    <span className="text-sm text-amber-400">({selectedOdu.yorubaName})</span>
                  </div>
                  <p className="text-amber-200/80 mb-3">{selectedOdu.traditionalMeaning}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedOdu.themes.map(theme => (
                      <span key={theme} className="px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* World Interpretation */}
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-black/30">
                  <h4 className="text-sm font-medium text-green-400 mb-2">Financial</h4>
                  <p className="text-sm text-gray-300">{selectedOdu.worldInterpretation.financial}</p>
                </div>
                <div className="p-4 rounded-xl bg-black/30">
                  <h4 className="text-sm font-medium text-red-400 mb-2">Political</h4>
                  <p className="text-sm text-gray-300">{selectedOdu.worldInterpretation.political}</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <StatCard 
                label="Moon Phase"
                value={`${(transits.moonPhase * 100).toFixed(0)}%`}
                subtext={transits.moonPhase < 0.5 ? 'Waxing' : 'Waning'}
                color="amber"
              />
              <StatCard 
                label="Retrograde"
                value={transits.retrogradePlanets.length.toString()}
                subtext={transits.retrogradePlanets.join(', ') || 'None'}
                color="purple"
              />
              <StatCard 
                label="Outlook"
                value={financial.overallOutlook}
                subtext={`${(financial.confidence * 100).toFixed(0)}% confidence`}
                color={financial.overallOutlook === 'bullish' ? 'green' : financial.overallOutlook === 'bearish' ? 'red' : 'blue'}
              />
              <StatCard 
                label="Stability"
                value={political.overallStability}
                subtext={`${political.globalTrends.length} major trends`}
                color={political.overallStability === 'stable' ? 'green' : political.overallStability === 'volatile' ? 'red' : 'yellow'}
              />
            </div>

            {/* Synthesis */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-400" />
                Council Synthesis
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-indigo-400">Overall Theme</span>
                  <p className="text-white text-lg">{worldOracle.synthesis.overallTheme}</p>
                </div>
                <div>
                  <span className="text-sm text-indigo-400">Collective Lessons</span>
                  <ul className="mt-2 space-y-1">
                    {worldOracle.synthesis.collectiveLessons.slice(0, 3).map((lesson, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-indigo-400">•</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* FINANCIAL VIEW */}
        {viewMode === 'financial' && (
          <motion.div
            key="financial"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Financial Overview */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <h4 className="text-sm font-medium text-green-400 mb-2">Overall Outlook</h4>
                <p className={`text-2xl font-bold capitalize ${
                  financial.overallOutlook === 'bullish' ? 'text-green-400' :
                  financial.overallOutlook === 'bearish' ? 'text-red-400' :
                  financial.overallOutlook === 'volatile' ? 'text-yellow-400' : 'text-blue-400'
                }`}>
                  {financial.overallOutlook}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {(financial.confidence * 100).toFixed(0)}% confidence
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                <h4 className="text-sm font-medium text-amber-400 mb-2">Major Indicators</h4>
                <p className="text-sm text-gray-300">{financial.majorIndicators.jupiterSaturn.slice(0, 60)}...</p>
              </div>
              
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <h4 className="text-sm font-medium text-red-400 mb-2">Active Warnings</h4>
                <p className="text-sm text-gray-300">{financial.warnings.length} alerts active</p>
              </div>
            </div>

            {/* Sector Analysis */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Sector Analysis</h3>
              <div className="space-y-3">
                {financial.keySectors.map((sector, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{sector.sector}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        sector.outlook === 'strong' ? 'bg-green-500/20 text-green-400' :
                        sector.outlook === 'weak' ? 'bg-red-500/20 text-red-400' :
                        sector.outlook === 'volatile' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {sector.outlook}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{sector.analysis}</p>
                    <div className="flex flex-wrap gap-1">
                      {sector.keyTransits.map((transit, j) => (
                        <span key={j} className="text-xs text-gray-500">{transit}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asset Classes */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Asset Classes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {financial.assetClasses.map((asset, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{asset.asset}</h4>
                      <span className={`text-xs ${
                        asset.trend === 'up' ? 'text-green-400' :
                        asset.trend === 'down' ? 'text-red-400' :
                        asset.trend === 'volatile' ? 'text-yellow-400' : 'text-gray-400'
                      }`}>
                        {asset.trend}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{asset.analysis}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* POLITICAL VIEW */}
        {viewMode === 'political' && (
          <motion.div
            key="political"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Global Trends */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20">
              <h3 className="text-lg font-bold text-white mb-4">Global Trends</h3>
              <div className="space-y-4">
                {political.globalTrends.map((trend, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/30">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-white">{trend.theme}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        trend.intensity === 'extreme' ? 'bg-red-500/20 text-red-400' :
                        trend.intensity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        trend.intensity === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {trend.intensity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{trend.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Duration: {trend.duration}</span>
                      <span>•</span>
                      <span>Planets: {trend.drivingPlanets.join(', ')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conflict Zones */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/20">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Conflict Zones
              </h3>
              <div className="space-y-3">
                {political.conflictZones.map((conflict, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{conflict.type}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        conflict.risk === 'critical' ? 'bg-red-500/20 text-red-400' :
                        conflict.risk === 'high' ? 'bg-orange-500/20 text-orange-400' :
                        conflict.risk === 'moderate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {conflict.risk} risk
                      </span>
                    </div>
                    {conflict.location && (
                      <p className="text-sm text-gray-500 mb-1">Location: {conflict.location}</p>
                    )}
                    <p className="text-sm text-gray-400">{conflict.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Powers */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-bold text-white mb-4">Major Powers</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {political.majorPowers.map((power, i) => (
                  <div key={i} className="p-4 rounded-xl bg-black/30">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{power.nation}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        power.leadership === 'crisis' ? 'bg-red-500/20 text-red-400' :
                        power.leadership === 'challenged' ? 'bg-yellow-500/20 text-yellow-400' :
                        power.leadership === 'changing' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {power.leadership}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{power.outlook}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* ORISHA READINGS VIEW */}
        {viewMode === 'orisha-readings' && (
          <motion.div
            key="orisha-readings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {worldOracle.readings.map((reading, i) => (
              <div 
                key={reading.orisha}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                onClick={() => setExpandedOrisha(expandedOrisha === reading.orisha ? null : reading.orisha)}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${ORISHA_PERSONAS[reading.orisha].color}30` }}
                  >
                    {getOrishaIcon(reading.orisha)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-white">{reading.orisha}</h3>
                        <p className="text-sm text-gray-500">{ORISHA_PERSONAS[reading.orisha].title}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">
                          {(reading.confidence * 100).toFixed(0)}% confidence
                        </span>
                        {expandedOrisha === reading.orisha ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{reading.interpretation}</p>
                    
                    {expandedOrisha === reading.orisha && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto'}}
                        className="mt-4 space-y-4"
                      >
                        {/* Warnings */}
                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                          <h4 className="text-sm font-medium text-red-400 mb-2">Warnings</h4>
                          <ul className="space-y-1">
                            {reading.warnings.map((warning, j) => (
                              <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-red-400">⚠</span>
                                {warning}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Opportunities */}
                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                          <h4 className="text-sm font-medium text-green-400 mb-2">Opportunities</h4>
                          <ul className="space-y-1">
                            {reading.opportunities.map((opp, j) => (
                              <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-green-400">✦</span>
                                {opp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Timeframes */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2 rounded bg-white/5 text-center">
                            <span className="text-xs text-gray-500 block">Immediate</span>
                            <span className="text-sm text-gray-300">{reading.timeframes.immediate}</span>
                          </div>
                          <div className="p-2 rounded bg-white/5 text-center">
                            <span className="text-xs text-gray-500 block">Short Term</span>
                            <span className="text-sm text-gray-300">{reading.timeframes.shortTerm}</span>
                          </div>
                          <div className="p-2 rounded bg-white/5 text-center">
                            <span className="text-xs text-gray-500 block">Long Term</span>
                            <span className="text-sm text-gray-300">{reading.timeframes.longTerm}</span>
                          </div>
                        </div>
                        
                        {/* Predictions */}
                        <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                          <h4 className="text-sm font-medium text-indigo-400 mb-2">Specific Predictions</h4>
                          <ul className="space-y-1">
                            {reading.specificPredictions.map((pred, j) => (
                              <li key={j} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-indigo-400">◆</span>
                                {pred}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({ label, value, subtext, color }: { 
  label: string; 
  value: string; 
  subtext: string;
  color: 'green' | 'red' | 'blue' | 'yellow' | 'amber' | 'purple';
}) {
  const colorClasses = {
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    red: 'bg-red-500/10 border-red-500/20 text-red-400',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    amber: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
  };
  
  return (
    <div className={`p-4 rounded-xl border ${colorClasses[color]}`}>
      <span className="text-xs uppercase tracking-wider opacity-70">{label}</span>
      <p className="text-2xl font-bold mt-1">{value}</p>
      <p className="text-sm opacity-70 mt-1 truncate">{subtext}</p>
    </div>
  );
}
