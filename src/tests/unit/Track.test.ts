import { trackSchema } from '@/types'
import { trackDataSchema } from '@/types/models/track/TrackData'
import { describe, test, expect } from 'vitest'

const createTrack = (
  overrides: Record<string, unknown> = {}
): Record<string, unknown> => ({
  id: '1',
  slug: 'song-1',
  createdAt: new Date('2025-01-01'),
  updatedAt: new Date('2025-06-01'),
  artist: 'Artist Name',
  genres: ['Rock'],
  title: 'Song Title',
  album: 'Album Name',
  coverImage: 'https://example.com/cover.jpg',
  audioFile: 'song.mp3',
  ...overrides,
})

const createTrackData = (
  overrides: Record<string, unknown> = {}
): Record<string, unknown> => ({
  artist: 'Artist Name',
  genres: ['Rock'],
  title: 'Song Title',
  album: 'Album Name',
  coverImage: 'https://example.com/cover.jpg',
  audioFile: 'song.mp3',
  ...overrides,
})

describe('trackSchema', () => {
  test('should validate correct track', () => {
    const validTrack = createTrack()
    const result = trackSchema.parse(validTrack)
    expect(result).toEqual(validTrack)
  })
  test('should fail with missing ID', () => {
    const invalidTrack = createTrack({ id: '' })
    expect(() => trackSchema.parse(invalidTrack)).toThrow('ID is required')
  })
  test('should fail with empty slug', () => {
    const invalidTrack = createTrack({ slug: '' })
    expect(() => trackSchema.parse(invalidTrack)).toThrow('Slug is required')
  })
  test('should transform string dates to Date objects', () => {
    const trackWithStringDates = createTrack({
      createdAt: '2025-01-01',
      updatedAt: '2025-06-01',
    })
    const result = trackSchema.parse(trackWithStringDates)
    expect(result.createdAt).toBeInstanceOf(Date)
    expect(result.updatedAt).toBeInstanceOf(Date)
  })
})

describe('trackDataSchema', () => {
  test('should validate correct trackData', () => {
    const validTrackData = createTrackData()
    const result = trackDataSchema.parse(validTrackData)
    expect(result).toEqual(validTrackData)
  })
  test('should fail with missing artist', () => {
    const invalidTrackData = createTrackData({ artist: '' })
    expect(() => trackDataSchema.parse(invalidTrackData)).toThrow(
      'Artist is required'
    )
  })
  test('should fail with title longer than 25 characters', () => {
    const longTitle = 'a'.repeat(26)
    const invalidTrackData = createTrackData({ title: longTitle })
    expect(() => trackDataSchema.parse(invalidTrackData)).toThrow(
      'Maximum number of characters for title is 25'
    )
  })
  test('should validate correct audioFile format', () => {
    const validAudio = createTrackData({ audioFile: 'song.mp3' })
    const result = trackDataSchema.parse(validAudio)
    expect(result.audioFile).toBe('song.mp3')
  })
  test('should fail with invalid audioFile format', () => {
    const invalidAudio = createTrackData({ audioFile: 'song.txt' })
    expect(() => trackDataSchema.parse(invalidAudio)).toThrow(
      'Audio file must have a valid format: mp3, wav, ogg, flac, aac, or m4a'
    )
  })
  test('should transform empty audioFile to undefined', () => {
    const emptyAudio = createTrackData({ audioFile: undefined })
    const result = trackDataSchema.parse(emptyAudio)
    expect(result.audioFile).toBeUndefined()
  })
  test('should transform empty coverImage to undefined', () => {
    const emptyCover = createTrackData({ coverImage: '' })
    const result = trackDataSchema.parse(emptyCover)
    expect(result.coverImage).toBeUndefined()
  })
  test('should fail with invalid coverImage URL', () => {
    const invalidCover = createTrackData({ coverImage: 'invalid-url' })
    expect(() => trackDataSchema.parse(invalidCover)).toThrow(
      'Must be a valid URL'
    )
  })
})
