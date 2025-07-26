import type { Track } from "@/types/models/track/Track"

export type TrackListData = {
  data: Track[]
  meta: {
    limit: number
    page: number
    total: number
    totalPages: number
  }
}
