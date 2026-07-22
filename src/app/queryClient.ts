import { QueryClient } from '@tanstack/react-query'

/**
 * Single QueryClient instance for the app's lifetime.
 * No cache or retry configuration yet.
 */
export const queryClient = new QueryClient()