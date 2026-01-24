
import { z } from 'zod';
import { CATEGORY, PRIORITY } from '../constants';

const noteSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  priority: z.enum(PRIORITY),
  category: z.enum(CATEGORY),
  description: z.string().min(1),
}).strict();

export default noteSchema;

export type Note = z.infer<typeof noteSchema>;
