import Slide from "@site/src/domain/slide/Slide";
import { useEffect, useState } from "react";

interface CarouselProps {
  slides: Slide[];
  autoplayDelay?: number;
}
const Carousel = ({ slides, autoplayDelay = 3000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, autoplayDelay);
    return () => clearInterval(interval);
  });

  return (
    <div className=" relative">
      <div className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`h-96 w-full ${index === currentIndex ? "" : "hidden"}`}
            >
              <img
                src={slide.image.src}
                alt={slide.image.alt}
                width={1450}
                height={450}
                className="w-full object-cover"
              />
              <div className="absolute  inset-0 flex items-center justify-center bg-black bg-opacity-10">
                <div className="text-center text-primary-500">
                  <h2 className="mb-2 text-2xl font-bold">{slide.title}</h2>
                  <p className="text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-l-md bg-primary-800 px-4 py-2 text-white"
        onClick={goToPrevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-r-md bg-primary-800 px-4 py-2 text-white"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
