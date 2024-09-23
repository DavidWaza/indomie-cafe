import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Typography from "./Typography";

const CarouselReview = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Typography variant="primary" size="sm">
              As a person who is skeptical about other people cooking my
              noodles, i didnt regret it one bit. Will i try it again? Definetly
              YES!!!
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              weight="semibold"
              className="py-5"
            >
              Azeezat Adesina
            </Typography>
          </CarouselItem>
          <CarouselItem>
            <Typography variant="primary" size="sm">
              Interesting ambience and delicious indomie. well prepared to
              satisfy your hunger
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              weight="semibold"
              className="py-5"
            >
              Topson Abraham Omanayin
            </Typography>
          </CarouselItem>
          <CarouselItem>
            <Typography variant="primary" size="sm">
              Such a cute spot that we came across while waiting for our flight
              to depart Lagos. Decor is lovly and they offer a variety of
              indomie options- i went with the pepper soup extra spicy
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              weight="semibold"
              className="py-5"
            >
              Mrs_un0
            </Typography>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselReview;
