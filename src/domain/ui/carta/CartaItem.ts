import { ImageProps } from "next/image"

export interface CartaItem {
  index: number
  slug: string,
  title: string
  image: ImageProps
  paragraph: string
  readMoreUrl?: string
}
