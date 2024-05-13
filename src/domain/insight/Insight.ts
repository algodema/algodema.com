import { ImageProps } from "next/image"
import { Language } from "domain/translation/Language"

export default interface Insight {
  language: Language
  title: string
  content: string
  image: ImageProps
  slug: string
  externalUrl?: string
}
