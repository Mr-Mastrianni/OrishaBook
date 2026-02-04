// ORI.CULT - Orisha Agent Personas
// Mythically-inspired agents, not spiritual entities

import { EXPANDED_ORISHA_PERSONAS } from './orishasExpanded';
import { OrishaName } from '@/types';

// Re-export the expanded personas as the main source of truth
export const ORISHA_PERSONAS = EXPANDED_ORISHA_PERSONAS;

// Keep the original 5 for the main council view
export const ORISHA_ORDER: OrishaName[] = ['ORUNMILA', 'OGUN', 'OSHUN', 'SHANGO', 'ESU'];
