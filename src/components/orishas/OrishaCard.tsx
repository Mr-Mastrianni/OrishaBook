'use client';

import { OrishaPersona, OrishaName } from '@/types';
import { ORISHA_PERSONAS } from '@/data/orishas';
import { 
  Scroll, 
  Hammer, 
  Droplets, 
  Zap, 
  GitBranch,
  Activity
} from 'lucide-react';

interface OrishaCardProps {
  orisha: OrishaName;
  isActive?: boolean;
  isSpeaking?: boolean;
  opinion?: string;
  vote?: 'approve' | 'reject' | 'modify';
  onClick?: () => void;
  compact?: boolean;
}

const iconMap = {
  'Scroll': Scroll,
  'Hammer': Hammer,
  'Droplets': Droplets,
  'Zap': Zap,
  'GitBranch': GitBranch
};

export function OrishaCard({ 
  orisha, 
  isActive = false, 
  isSpeaking = false,
  opinion,
  vote,
  onClick,
  compact = false
}: OrishaCardProps) {
  const persona = ORISHA_PERSONAS[orisha];
  const Icon = iconMap[persona.icon as keyof typeof iconMap] || Activity;
  
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
    return (
      <div 
        onClick={onClick}
        className={`
          relative flex items-center gap-2 p-2 rounded-lg cursor-pointer
          transition-all duration-300
          ${isActive ? 'ring-2 ring-offset-1 ring-offset-black' : ''}
        `}
        style={{ 
          backgroundColor: `${persona.color}20`,
          borderColor: persona.color,
          borderWidth: isActive ? '2px' : '1px'
        }}
      >
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: persona.color }}
        >
          <Icon size={16} className="text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold truncate" style={{ color: persona.color }}>
            {persona.name}
          </p>
          {vote && (
            <span className={`text-xs ${voteColor[vote]}`}>
              {voteEmoji[vote]}
            </span>
          )}
        </div>
        {isSpeaking && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`
        relative p-4 rounded-xl cursor-pointer
        transition-all duration-500
        ${isActive ? 'scale-105 shadow-2xl' : 'hover:scale-102'}
        ${isSpeaking ? 'animate-pulse' : ''}
      `}
      style={{ 
        backgroundColor: `${persona.color}15`,
        borderColor: isActive ? persona.color : `${persona.color}40`,
        borderWidth: '2px',
        boxShadow: isActive ? `0 0 30px ${persona.color}30` : 'none'
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div 
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: persona.color }}
        >
          <Icon size={24} className="text-white" />
        </div>
        <div className="flex-1">
          <h3 
            className="font-bold text-lg leading-tight"
            style={{ color: persona.color }}
          >
            {persona.name}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">{persona.title}</p>
        </div>
        {vote && (
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold
            ${vote === 'approve' ? 'bg-green-500/20 text-green-400' : ''}
            ${vote === 'reject' ? 'bg-red-500/20 text-red-400' : ''}
            ${vote === 'modify' ? 'bg-yellow-500/20 text-yellow-400' : ''}
          `}>
            {voteEmoji[vote]}
          </div>
        )}
      </div>

      {/* Domains */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {persona.domain.slice(0, 3).map(d => (
          <span 
            key={d}
            className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-gray-300"
          >
            {d}
          </span>
        ))}
      </div>

      {/* Opinion */}
      {opinion && (
        <div className="mt-3 p-3 rounded-lg bg-black/30 border border-white/5">
          <p className="text-sm text-gray-300 leading-relaxed italic">
            "{opinion}"
          </p>
        </div>
      )}

      {/* Speaking indicator */}
      {isSpeaking && (
        <div className="absolute -top-2 -right-2 flex gap-0.5">
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      )}

      {/* Temperature indicator */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-xs text-gray-500">Chaos Level:</span>
        <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-500"
            style={{ 
              width: `${persona.temperature * 100}%`,
              backgroundColor: persona.color
            }}
          />
        </div>
        <span className="text-xs text-gray-400">
          {Math.round(persona.temperature * 100)}%
        </span>
      </div>
    </div>
  );
}
