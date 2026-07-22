/**
 * Project — a portfolio project tracked and evaluated by depth, not just
 * completion status. A finished tutorial and a finished original system
 * are not the same accomplishment; `depth` is what encodes that
 * distinction for the scoring engine (introduced in a later milestone).
 */

export type ProjectStatus = 'idea' | 'in_progress' | 'near_done' | 'done'

/**
 * 1 = tutorial-following, 3 = applied/original, 5 = novel or
 * production-deployed.
 */
export type ProjectDepth = 1 | 2 | 3 | 4 | 5

export interface Project {
  id: string
  name: string
  notes: string
  status: ProjectStatus
  depth: ProjectDepth
  estMinutes: number
  repoUrl?: string
  lastTouched: number
  created: number
}