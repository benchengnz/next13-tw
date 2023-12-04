// components/CarouselSelector.tsx
import React from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";

interface CarouselSelectorProps {
  imagePaths: string[];
  onImageChange?: (currentIndex: number) => void;
}

const CarouselSelector: React.FC<CarouselSelectorProps> = ({
  imagePaths,
  onImageChange,
}) => {
  // Carousel logic here
  return (
    <div className="carousel-container">
      <Carousel onImageChange={onImageChange}>
        {imagePaths.map((path, index) => (
          <div key={index}>
            <Image
              src={path}
              alt={`Avatar ${index}`}
              width={275}
              height={275}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSelector;
