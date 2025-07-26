import type { Genre } from '@/types'

export type TrackFormValues = {
  title: string
  genres: Genre
  artist: string
  album: string
  coverImage: string
}
