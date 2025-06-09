import { z } from 'zod'
import { isGenre } from '@/types'

const isImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    const contentType = response.headers.get('Content-Type')
    return contentType?.startsWith('image/') ?? false
  } catch {
    return await new Promise<boolean>((resolve) => {
      const img = new Image()
      img.src = url
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
    })
  }
}

export const schemaZon = z.object({
  title: z
    .string()
    .max(25, 'Maximum number of characters 25')
    .refine((v: string) => v.trim().length > 0, {
      message: 'Field is required',
    }),

  artist: z
    .string()
    .max(25, 'Maximum number of characters 25')
    .refine((v: string) => v.trim().length > 0, {
      message: 'Field is required',
    }),

  album: z
    .string()
    .max(25, 'Maximum number of characters 25')
    .min(2, 'Min value must have 2 symbol'),

  genre: z
    .string()
    .refine((val: string) => !val || isGenre(val), {
      message: 'Invalid genre',
    })
    .optional(),

  coverImage: z
    .string()
    .url("This don't url")
    .refine(
      async (val: string | undefined) => {
        if (!val) return true
        return await isImageUrl(val)
      },
      { message: "URL don't to img" }
    )
    .optional(),
})

export type FormValues = z.infer<typeof schemaZon>
