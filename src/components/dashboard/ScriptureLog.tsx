'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ScriptureEntry, DigitalOdu } from '@/types';
import { getScripture, getPatternAnalysis, exportScripture, seedScripture } from '@/lib/content/scripture';
import { getOduById } from '@/data/odu';
import { 
  BookOpen, 
  Download, 
  TrendingUp, 
  Calendar,
  Sparkles,
  Filter,
  Moon,
  BarChart3
} from 'lucide-react';

export function ScriptureLog() {
  const [scripture, setScripture] = useState<ScriptureEntry[]>([]);
  const [analysis, setAnalysis] = useState<ReturnType<typeof getPatternAnalysis> | null>(null);
  const [filter, setFilter] = useState<'all' | 'positive' | 'controversial' | 'neutral'>('all');
  const [isSeeded, setIsSeeded] = useState(false);

  useEffect(() => {
    loadScripture();
  }, []);

  const loadScripture = () => {
    setScripture(getScripture());
    setAnalysis(getPatternAnalysis());
  };

  const handleSeed = () => {
    seedScripture();
    setIsSeeded(true);
    loadScripture();
  };

  const handleExport = (format: 'markdown' | 'json' | 'txt') => {
    const content = exportScripture(format);
    const blob = new Blob([content], { 
      type: format === 'json' ? 'application/json' : 'text/plain' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ori-cult-scripture.${format === 'markdown' ? 'md' : format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredScripture = scripture.filter(entry => {
    if (filter === 'all') return true;
    return entry.performance.sentiment === filter;
  });

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">The Book of Odù.Content</h2>
            <p className="text-xs text-gray-400">
              {scripture.length} entries logged
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isSeeded && scripture.length === 0 && (
            <button
              onClick={handleSeed}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 
                         hover:bg-amber-500/30 transition-colors text-sm"
            >
              <Sparkles className="w-4 h-4" />
              Seed Sample Data
            </button>
          )}
          
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
            <button
              onClick={() => handleExport('markdown')}
              className="px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors"
            >
              .md
            </button>
            <button
              onClick={() => handleExport('json')}
              className="px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors"
            >
              .json
            </button>
            <button
              onClick={() => handleExport('txt')}
              className="px-3 py-1.5 rounded-md text-xs text-gray-300 hover:bg-white/10 transition-colors"
            >
              .txt
            </button>
          </div>
        </div>
      </div>

      {/* Pattern Analysis */}
      {analysis && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {/* Top Odù */}
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Top Patterns</span>
            </div>
            {analysis.topOdu.length > 0 ? (
              <div className="space-y-2">
                {analysis.topOdu.slice(0, 3).map((odu, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{odu.oduId}</span>
                    <span className="text-indigo-400">{odu.count}×</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">Not enough data yet</p>
            )}
          </div>

          {/* Mood Distribution */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-center gap-2 mb-3">
              <Moon className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">Energy Distribution</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {Object.entries(analysis.moodDistribution).map(([mood, count]) => (
                <span 
                  key={mood}
                  className="px-2 py-1 rounded-full text-xs bg-amber-500/20 text-amber-300"
                >
                  {mood.replace('_', ' ')} ({count})
                </span>
              ))}
              {Object.keys(analysis.moodDistribution).length === 0 && (
                <p className="text-sm text-gray-500">No moods recorded</p>
              )}
            </div>
          </div>

          {/* Insights */}
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Insights</span>
            </div>
            {analysis.insights.length > 0 ? (
              <div className="space-y-2">
                {analysis.insights.map((insight, i) => (
                  <p key={i} className="text-xs text-gray-300 leading-relaxed">
                    • {insight}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">Continue logging to see patterns</p>
            )}
          </div>
        </motion.div>
      )}

      {/* Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-gray-500 shrink-0" />
        {(['all', 'positive', 'neutral', 'controversial'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`
              px-3 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-colors
              ${filter === f 
                ? 'bg-white/20 text-white' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }
            `}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Scripture Entries */}
      <div className="space-y-4">
        {filteredScripture.length === 0 ? (
          <div className="text-center py-16">
            <BookOpen className="w-12 h-12 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-500">No scripture entries yet.</p>
            <p className="text-sm text-gray-600 mt-2">
              Complete your first Daily Oracle to begin logging.
            </p>
          </div>
        ) : (
          filteredScripture.map((entry, index) => (
            <ScriptureEntryCard key={entry.id} entry={entry} index={index} />
          ))
        )}
      </div>
    </div>
  );
}

function ScriptureEntryCard({ entry, index }: { entry: ScriptureEntry; index: number }) {
  const [odu, setOdu] = useState<DigitalOdu | null>(null);

  useEffect(() => {
    setOdu(getOduById(entry.oduId) || null);
  }, [entry.oduId]);

  const sentimentColors = {
    'positive': 'text-green-400 border-green-500/30 bg-green-500/10',
    'neutral': 'text-gray-400 border-gray-500/30 bg-gray-500/10',
    'controversial': 'text-orange-400 border-orange-500/30 bg-orange-500/10'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-indigo-400">
              {entry.oduId.split('_')[1]}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-white">
              {odu?.name || entry.oduId}
            </h3>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
              <Calendar className="w-3 h-3" />
              {new Date(entry.date).toLocaleDateString('en-US', { 
                weekday: 'short', 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium capitalize border
            ${sentimentColors[entry.performance.sentiment]}
          `}>
            {entry.performance.sentiment}
          </span>
          {entry.performance.engagement > 0 && (
            <span className="text-xs text-gray-400">
              {Math.round(entry.performance.engagement)} engagement
            </span>
          )}
        </div>
      </div>

      {/* Council Wisdom */}
      <div className="mb-4 p-3 rounded-lg bg-white/5">
        <p className="text-sm text-gray-300 italic">
          "{entry.councilNotes}"
        </p>
      </div>

      {/* Pattern Notes */}
      {entry.patternNotes && (
        <div className="flex items-start gap-2 text-xs text-gray-500">
          <Sparkles className="w-3 h-3 mt-0.5 shrink-0" />
          <p>{entry.patternNotes}</p>
        </div>
      )}

      {/* Astro Context */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
        <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-400 text-xs">
          {entry.astroMood.replace('_', ' ')}
        </span>
        {entry.contentIds.slice(0, 3).map((id, i) => (
          <span key={i} className="px-2 py-1 rounded bg-white/5 text-gray-500 text-xs">
            {id.split('_')[0]}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
