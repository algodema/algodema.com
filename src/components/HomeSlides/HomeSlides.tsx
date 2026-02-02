import { slides } from "@site/src/data/slides";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
        {slides.map((slide, idx) => (
          <div key={idx} className={clsx(`shadow--lw ${styles.slide}`)}>
            <div className={styles.content}>
              <h1 className={styles.title}>
                <span className={styles.titleText}>{slide.title}</span>
                <a
                  className={styles.titleMore}
                  href={useBaseUrl(slide.readMoreLink)}
                  aria-label={`Read more about ${slide.title}`}
                >
                  …
                </a>
              </h1>
              <h4 className={styles.description}>{slide.description}</h4>
              <a
                className={clsx(
                  `button button--primary ${styles.readMore}`
                )}
                href={useBaseUrl(slide.readMoreLink)}
              >
                {slide.readMoreLabel}
              </a>
            </div>
            {slide.image && (
              <div className={styles.imageWrap}>
                <img
                  src={useBaseUrl(slide.image.src)}
                  alt={slide.image.alt}
                  className={styles.slideImage}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HomeSlides;
