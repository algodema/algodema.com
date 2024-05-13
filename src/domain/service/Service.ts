import { ImageProps } from "next/image"
import { Language } from "domain/translation/Language"

export default interface Service {
  language: Language
  title: string
  content: string
  image: ImageProps
  slug: string
}
