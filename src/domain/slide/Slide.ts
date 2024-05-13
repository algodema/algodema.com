import { ImageProps } from "../ImageProps";

export default interface Slide {
  image: ImageProps;
  title: string;
  description: string;
  readMoreLabel: string;
  readMoreLink: string;
}
