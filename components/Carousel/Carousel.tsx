// Carousel.tsx
import React, { useState, ReactNode, useCallback } from "react";

interface CarouselProps {
  children: ReactNode[];
  onImageChange?: (currentIndex: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ children, onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const notifyChange = (index: number) => {
    if (onImageChange) onImageChange(index);
  };
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : children.length - 1;
      notifyChange(newIndex);
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex < children.length - 1 ? prevIndex + 1 : 0;
      notifyChange(newIndex);
      return newIndex;
    });
  };

  return (
    <div className="relative inline-block">
      <div className="flex items-center justify-center w-auto">
        {children[currentIndex]}
      </div>
      <button
        type="button"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black"
        onClick={goToPrevious}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-black"
        onClick={goToNext}
      >
        &#10095; {/* Right Arrow */}
      </button>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 py-2">
        {children.map((_, index) => (
          <span
            key={index}
            className={`block h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-gray-600" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
