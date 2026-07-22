export * from './project'
export * from './learning'
export * from './career'

import type { Project } from './project'
import type { LearningItem } from './learning'
import type { CareerTask } from './career'

/** Union of every entity a repository or the (future) scoring engine may
 *  need to treat polymorphically. */
export type ScorableItem = Project | LearningItem | CareerTask