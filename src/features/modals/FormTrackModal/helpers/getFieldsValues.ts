import type { Slug } from '@/types'
import { getTrackBySlug } from '../../../../api/track'
import { getResultFromRequest } from '@/shared/helpers/getResultFromRequest'

async function getFieldsValues(trackSlug: Slug) {
  const answer = await getTrackBySlug(trackSlug)
  const track = getResultFromRequest(answer)
  if (!track) return
  const { artist, coverImage, title, album, genres } = track
  const values = {
    artist,
    coverImage: coverImage || '',
    genres: 'Rock',
    title,
    album: album || '',
  }

  return { values, genres }
}

export default getFieldsValues
