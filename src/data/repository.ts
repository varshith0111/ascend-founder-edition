import type { CareerTask, LearningItem, Project } from '@/domain'

/**
 * Generic persistence contract. Every method is `userId`-scoped, even
 * though v1 will call every one of these with a single hardcoded
 * constant — this is what lets a later Supabase (or any real backend)
 * implementation slot in without changing a single call site.
 *
 * `update`'s `Partial<T>` is a deliberate placeholder, not a final design.
 * It allows patching any subset of fields today, but once real business
 * rules exist (e.g. "status can only move forward", "depth can't change
 * after a project is marked done"), this should be replaced with
 * entity-specific update DTOs that only allow the fields and transitions
 * that are actually valid. Do not build logic that assumes `Partial<T>`
 * is permanent.
 */
export interface Repository<T> {
  list(userId: string): Promise<T[]>
  get(userId: string, id: string): Promise<T | null>
  create(userId: string, item: Omit<T, 'id'>): Promise<T>
  update(userId: string, id: string, patch: Partial<T>): Promise<T>
  remove(userId: string, id: string): Promise<void>
}

export type ProjectRepository = Repository<Project>
export type LearningRepository = Repository<LearningItem>
export type CareerRepository = Repository<CareerTask>