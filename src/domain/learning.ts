/**
 * LearningItem — covers structured courses, certificates, and fundamentals
 * study under one entity. Certificates are deliberately not a separate
 * domain model: `kind: 'cert'` is one case among three, weighted no
 * differently in the type system than 'fundamental' or 'applied'. Any
 * prioritization between them is a scoring-layer concern, not a modeling
 * one, and belongs in a later milestone.
 */

export type LearningKind = 'fundamental' | 'applied' | 'cert'
export type LearningStatus = 'queued' | 'in_progress' | 'done'

export interface LearningItem {
  id: string
  title: string
  notes: string
  kind: LearningKind
  status: LearningStatus
  estMinutes: number
  lastTouched: number
  created: number
}