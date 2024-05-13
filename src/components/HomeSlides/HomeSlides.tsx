import { slides } from "@site/src/data/slides";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSlides.module.css";
import clsx from "clsx";

function HomeSlides() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <div className={clsx(`slider-container ${styles.sliderContainer}`)}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className={clsx(`shadow--lw ${styles.slide}`)}>
            <h1 className={styles.title}>{slide.title}</h1>
            <h4 className={styles.description}>{slide.description}</h4>
            <a
              className={clsx(
                `button button--primary  button--lg ${styles.readMore}`
              )}
              href={slide.readMoreLink}
            >
              {slide.readMoreLabel}
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlides;
