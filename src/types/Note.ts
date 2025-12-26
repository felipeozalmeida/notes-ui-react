
import { z } from 'zod';

export const PRIORITY = {
  high: 'high',
  medium: 'medium',
  low: 'low',
} as const;

export const CATEGORY = {
  work: 'work',
  personal: 'personal',
} as const;

const noteSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  priority: z.enum(PRIORITY),
  category: z.enum(CATEGORY),
  description: z.string().min(1),
}).strict();

export default noteSchema;

export type Note = z.infer<typeof noteSchema>;
