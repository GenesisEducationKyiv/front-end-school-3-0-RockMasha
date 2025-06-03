import { z } from 'zod'
import type { AudioFile } from '../audioFile/AudioFile'

const audioFileSchema = z
  .union([
    z.string().regex(/\.(mp3|wav|ogg|flac|aac|m4a)$/, {
      message:
        'Audio file must have a valid format: mp3, wav, ogg, flac, aac, or m4a',
    }),
    z.literal(''),
  ])
  .optional()
  .transform((val) => (val === '' ? undefined : val)) as z.ZodType<
  AudioFile | undefined
>

export const trackDataSchema = z.object({
  artist: z
    .string()
    .min(1, 'Artist is required')
    .max(25, 'Maximum number of characters for artist is 25'),
  genres: z.array(z.string()),
  title: z
    .string()
    .min(1, 'Title is required')
    .max(25, 'Maximum number of characters for title is 25'),
  album: z
    .string()
    .max(25, 'Maximum number of characters for album is 25')
    .optional(),
  coverImage: z
    .union([z.string().url('Must be a valid URL'), z.literal('')])
    .optional()
    .transform((val) => (val === '' ? undefined : val)),
  audioFile: audioFileSchema,
})

export type TrackData = z.infer<typeof trackDataSchema>
