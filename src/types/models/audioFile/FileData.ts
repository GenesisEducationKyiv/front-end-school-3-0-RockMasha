export interface FileData {
  audioFile: FileInfo | null
}

interface FileInfo {
  name: string
  lastModified: number
  lastModifiedDate: Date
  webkitRelativePath: string
  size: number
  type: FileInfoType
}

type FileInfoType =
  | 'audio/mpeg'
  | 'audio/wav'
  | 'audio/ogg'
  | 'audio/aac'
  | 'audio/flac'
