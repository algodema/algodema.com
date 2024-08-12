import Image from "../image/Image";
import { Language } from "../translation/Language";

export default interface Service {
  language: Language;
  title: string;
  content: string;
  image: Image;
  slug: string;
}
