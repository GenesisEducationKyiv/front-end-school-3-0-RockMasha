import { z } from 'zod'

export const schemaZod = z.object({
  audioFile: z
    .any()
    .nullable()
    .optional()
    .refine((value) => value !== null && value !== undefined, {
      message: 'Please select a file',
    })
    .refine((value) => !value || value instanceof File, {
      message: 'Please select a file.',
    })
    .refine(
      (value) =>
        !value ||
        (value instanceof File &&
          ['audio/mpeg', 'audio/wav', 'audio/ogg'].includes(value.type)),
      {
        message: 'Only audio files are allowed',
      }
    )
    .refine(
      (value) =>
        !value || (value instanceof File && value.size <= 10 * 1024 * 1024),
      {
        message: 'File size must be less than 10MB.',
      }
    ),
})

export type AudioSchema = z.infer<typeof schemaZod>
