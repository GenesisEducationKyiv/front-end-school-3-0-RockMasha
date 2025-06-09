import { genres } from '@/api/genres'
import type { Genre } from '@/types'

export function isGenre(value: string): value is Genre {
  return genres.includes(value as Genre)
}
