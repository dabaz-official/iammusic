export interface Episode {
  id: number
  title: string
  published: Date
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
}

export const episodes = [
  {
    id: 1,
    title: 'UR THE MOON',
    published: '2025-01-01T00:00:00Z',
    description: 'UR THE MOON',
    content: 'UR THE MOON',
    audio: [
      {
        src: 'https://iammusic.dabaz.me/audio/01-URTHEMOON.mp3',
        type: 'audio/mpeg',
      },
    ],
  }
]
