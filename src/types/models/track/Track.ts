import { z } from 'zod'
import { trackDataSchema } from './TrackData'

export const trackSchema = z.object({
  id: z.string().min(1, 'ID is required'),
  slug: z.string().min(1, 'Slug is required'),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ...trackDataSchema.shape,
})

export type Track = z.infer<typeof trackSchema>
