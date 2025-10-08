import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import carousel1 from "@/assets/carousel-1.jpg";
import carousel2 from "@/assets/carousel-2.jpg";
import carousel3 from "@/assets/carousel-3.jpg";
import carousel4 from "@/assets/carousel-4.jpg";

const ImageCarousel = () => {
  const images = [
    {
      src: carousel1,
      alt: "Luxury modern home",
    },
    {
      src: carousel2,
      alt: "Beautiful property exterior",
    },
    {
      src: carousel3,
      alt: "Elegant house design",
    },
    {
      src: carousel4,
      alt: "Premium property view",
    },
  ];

  return (
    <section className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full h-full"
        opts={{ loop: true }}
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <div className="relative w-full h-[380px] md:h-[480px] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">
                    Find Your Dream Home
                  </h2>
                  <p className="text-lg md:text-xl">
                    Discover premium properties in exclusive locations
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
