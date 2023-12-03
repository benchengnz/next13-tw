// In a Next.js page or component
import Image from "next/image";
import Carousel from "./Carousel";

const CarouselTester = () => {
  return (
    <div
      id="carousel-container"
      className="flex justify-center py-2 px-2 m-4 bg-slate-100/30 w-auto"
    >
      <Carousel>
        <Image
          src="/images/avatars/dog-avatar-1.png"
          alt="Image 1"
          width={300}
          height={300}
        />
        <Image
          src="/images/avatars/dog-avatar-4.png"
          alt="Image 4"
          width={300}
          height={300}
        />
        <Image
          src="/images/avatars/dog-avatar-6.png"
          alt="Image 6"
          width={300}
          height={300}
        />
      </Carousel>
    </div>
  );
};

export default CarouselTester;
