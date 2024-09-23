import React from "react";
import Typography from "./Typography";
import Image from "next/image";
import { Quote } from "lucide-react";
import CarouselReview from "./CarouselReview";

const Reviews = () => {
  return (
    <div className="bg-white h-full py-20 px-10 md:px-[80px] lg:px-[150px]">
      <div className="py-5">
        <Typography
          variant="secondary"
          size="sm"
          weight="semibold"
          className="text-center"
        >
          REVIEWS
        </Typography>
        <Typography
          variant="primary"
          size="sm"
          weight="bold"
          className="text-center"
        >
          What our customer say
        </Typography>
      </div>
      <div className="pt-10">
        <div className="grid md:grid-cols-2">
          <Image
            src={
              "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727012992/Frame_31_myujvo.svg"
            }
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            className="w-full lg:w-2/3 m-auto h-auto object-center object-contain"
          />
          <div className="py-10 lg:pt-[10rem] px-5">
            <Quote size={30} color="#FFCC2A" className="rotate-180" />
            <div className="pt-10">
              <CarouselReview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
