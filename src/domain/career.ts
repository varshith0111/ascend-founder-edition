/**
 * CareerTask — resume work, job applications, and interview prep under one
 * entity. `pipelineStage` is only meaningful when `kind === 'application'`;
 * it's optional rather than split into a separate type because an
 * application task moving through stages is still fundamentally the same
 * entity, not a different one.
 */

export type CareerKind = 'resume_gap' | 'application' | 'prep'
export type CareerStatus = 'open' | 'done'

export type PipelineStage =
  | 'not_started'
  | 'applied'
  | 'screen'
  | 'interview'
  | 'offer'
  | 'rejected'

export interface CareerTask {
  id: string
  title: string
  notes: string
  kind: CareerKind
  pipelineStage?: PipelineStage
  urgency: 1 | 2 | 3 | 4 | 5
  status: CareerStatus
  estMinutes: number
  lastTouched: number
  created: number
}