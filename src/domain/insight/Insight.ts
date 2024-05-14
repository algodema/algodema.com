import { Language } from "domain/translation/Language";
import { ImageProps } from "../ImageProps";

export default interface Insight {
  language: Language;
  title: string;
  content: string;
  image: ImageProps;
  slug: string;
  externalUrl?: string;
}
