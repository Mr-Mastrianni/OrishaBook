'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TraditionalOdu, PRIMARY_ODU, getOduByName } from '@/data/oduIfa';
import { getRealTimeTransits } from '@/lib/jyotish/ephemeris';
import { 
  BookOpen, 
  Binary, 
  Scroll,
  Globe,
  TrendingUp,
  Scale,
  Users,
  Cpu,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Moon,
  Sun,
  Zap
} from 'lucide-react';

export function OduOfWeek() {
  const [currentOdu, setCurrentOdu] = useState<TraditionalOdu | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>('meaning');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOduId, setSelectedOduId] = useState<string | null>(null);
  const [weekOffset, setWeekOffset] = useState(0);

  useEffect(() => {
    loadOduOfWeek();
  }, [weekOffset]);

  const loadOduOfWeek = () => {
    setIsLoading(true);
    
    // Calculate which Odù is active based on current week
    const now = new Date();
    now.setDate(now.getDate() + weekOffset * 7);
    
    const weekOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (7 * 24 * 60 * 60 * 1000));
    const oduIndex = weekOfYear % PRIMARY_ODU.length;
    
    setCurrentOdu(PRIMARY_ODU[oduIndex]);
    setIsLoading(false);
  };

  const selectOdu = (oduId: string) => {
    const odu = PRIMARY_ODU.find(o => o.id === oduId);
    if (odu) {
      setSelectedOduId(oduId);
      setCurrentOdu(odu);
    }
  };

  const getOrishaIcon = (orisha: string) => {
    switch (orisha) {
      case 'ORUNMILA': return <Scroll className="w-4 h-4" />;
      case 'OGUN': return <Zap className="w-4 h-4" />;
      case 'OSHUN': return <Moon className="w-4 h-4" />;
      case 'SHANGO': return <Sun className="w-4 h-4" />;
      case 'ESU': return <AlertTriangle className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  if (isLoading || !currentOdu) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <BookOpen className="w-12 h-12 animate-pulse mx-auto mb-4 text-amber-400" />
          <p className="text-gray-400">Consulting the Odù...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-4">
          <BookOpen className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-300">Sacred Pattern Library</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">
          Odù of the Week
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore the 16 primary Odù Ifa patterns. Each week highlights a different sacred pattern 
          with detailed traditional meanings and world-level interpretations.
        </p>
        
        {/* Week Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setWeekOffset(prev => prev - 1)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-400">
            {weekOffset === 0 ? 'Current Week' : weekOffset > 0 ? `+${weekOffset} weeks` : `${weekOffset} weeks`}
          </span>
          <button
            onClick={() => setWeekOffset(prev => prev + 1)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
          <button
            onClick={() => setWeekOffset(0)}
            className="ml-4 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 text-sm hover:bg-amber-500/30 transition-colors"
          >
            <RefreshCw className="w-4 h-4 inline mr-1" /> Current
          </button>
        </div>
      </div>

      {/* Odù Selector */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <p className="text-sm text-gray-500 mb-3">Select an Odù to explore:</p>
        <div className="flex flex-wrap gap-2">
          {PRIMARY_ODU.map(odu => (
            <button
              key={odu.id}
              onClick={() => selectOdu(odu.id)}
              className={`
                px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${currentOdu.id === odu.id 
                  ? 'bg-amber-500/30 text-amber-300 border border-amber-500/50' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-transparent'
                }
              `}
            >
              <span className="font-mono text-xs opacity-70">{odu.id}</span>
              <span className="ml-2">{odu.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Odù Display */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-900/30 via-orange-900/20 to-amber-900/30 border border-amber-500/30">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
          <div className="w-24 h-24 rounded-2xl bg-amber-500/20 flex items-center justify-center shrink-0">
            <span className="text-3xl font-mono font-bold text-amber-400">{currentOdu.binary}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-3xl font-bold text-white">{currentOdu.name}</h3>
              <span className="text-lg text-amber-400">({currentOdu.yorubaName})</span>
            </div>
            <p className="text-amber-200/80 text-lg leading-relaxed">
              {currentOdu.traditionalMeaning}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {currentOdu.primaryOrisha.map(orisha => (
                <span 
                  key={orisha}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-white/10 text-amber-300"
                >
                  {getOrishaIcon(orisha)}
                  {orisha}
                </span>
              ))}
              {currentOdu.themes.map(theme => (
                <span 
                  key={theme}
                  className="px-3 py-1.5 rounded-full text-sm bg-amber-500/20 text-amber-300"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Expandable Sections */}
        <div className="space-y-4">
          {/* Sacred Teachings */}
          <ExpandableSection
            title="Sacred Teachings"
            icon={Scroll}
            isExpanded={expandedSection === 'teachings'}
            onToggle={() => setExpandedSection(expandedSection === 'teachings' ? null : 'teachings')}
          >
            <div className="space-y-4">
              {currentOdu.teachings.map((teaching, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 text-xs text-amber-400">
                    {i + 1}
                  </span>
                  <p className="text-gray-300 leading-relaxed">{teaching}</p>
                </div>
              ))}
            </div>
          </ExpandableSection>

          {/* World Interpretations */}
          <ExpandableSection
            title="World-Level Interpretations"
            icon={Globe}
            isExpanded={expandedSection === 'world'}
            onToggle={() => setExpandedSection(expandedSection === 'world' ? null : 'world')}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <InterpretationCard
                title="Financial"
                icon={TrendingUp}
                color="green"
                content={currentOdu.worldInterpretation.financial}
              />
              <InterpretationCard
                title="Political"
                icon={Scale}
                color="red"
                content={currentOdu.worldInterpretation.political}
              />
              <InterpretationCard
                title="Social"
                icon={Users}
                color="blue"
                content={currentOdu.worldInterpretation.social}
              />
              <InterpretationCard
                title="Technological"
                icon={Cpu}
                color="purple"
                content={currentOdu.worldInterpretation.technological}
              />
            </div>
          </ExpandableSection>

          {/* Warnings & Blessings */}
          <ExpandableSection
            title="Warnings & Blessings"
            icon={AlertTriangle}
            isExpanded={expandedSection === 'warnings'}
            onToggle={() => setExpandedSection(expandedSection === 'warnings' ? null : 'warnings')}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Warnings
                </h4>
                <ul className="space-y-2">
                  {currentOdu.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-red-400/50">⚠</span>
                      {warning}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Blessings
                </h4>
                <ul className="space-y-2">
                  {currentOdu.blessings.map((blessing, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-green-400/50">✦</span>
                      {blessing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ExpandableSection>

          {/* Binary Pattern */}
          <ExpandableSection
            title="Binary Pattern Analysis"
            icon={Binary}
            isExpanded={expandedSection === 'binary'}
            onToggle={() => setExpandedSection(expandedSection === 'binary' ? null : 'binary')}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-1">
                {currentOdu.binary.split('').map((bit, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold ${
                      bit === '1' 
                        ? 'bg-amber-500/30 text-amber-300' 
                        : 'bg-gray-800 text-gray-500'
                    }`}
                  >
                    {bit}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 text-center">
                Each Odù is represented by 8 binary digits (two figures of 4 lines each).
                This pattern is {currentOdu.binary} in binary, representing the {currentOdu.name} configuration.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-xs text-gray-500 block mb-1">Upper Figure</span>
                  <span className="text-lg font-mono text-amber-400">
                    {currentOdu.binary.slice(0, 4)}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/5">
                  <span className="text-xs text-gray-500 block mb-1">Lower Figure</span>
                  <span className="text-lg font-mono text-amber-400">
                    {currentOdu.binary.slice(4, 8)}
                  </span>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
        <p className="text-sm text-gray-400">
          Use the week navigation above to see which Odù governs different time periods, 
          or click any Odù in the selector to explore its meanings in depth.
        </p>
      </div>
    </div>
  );
}

function ExpandableSection({ 
  title, 
  icon: Icon, 
  isExpanded, 
  onToggle, 
  children 
}: { 
  title: string; 
  icon: any; 
  isExpanded: boolean; 
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-amber-400" />
          <span className="font-medium text-white">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="p-4 border-t border-white/10"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

function InterpretationCard({ 
  title, 
  icon: Icon, 
  color, 
  content 
}: { 
  title: string; 
  icon: any; 
  color: 'green' | 'red' | 'blue' | 'purple';
  content: string;
}) {
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

  return (
    <div className={`p-4 rounded-xl border ${colorClasses[color]}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${iconColors[color]}`} />
        <span className={`text-sm font-medium ${iconColors[color]}`}>{title}</span>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
    </div>
  );
}
