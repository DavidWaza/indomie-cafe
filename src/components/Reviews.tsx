import React from "react";
import Typography from "./Typography";
import Image from "next/image";
import CarouselReview from "./CarouselReview";

const Reviews = () => {
  return (
    <div className="bg-[#FFF6F7] relative h-full 2xl:h-screen py-20 px-10 md:px-[80px] lg:px-[150px]">
      <Image
        src={
          "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727118655/picture-tomato-tomato-with-word-tomato-it_1128301-3145_2_kltnol.svg"
        }
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-[7%] h-auto object-center object-contain"
      />
      <Image
        src={
          "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727118655/Screenshot_2024-09-20_175303_1_m279ym.svg"
        }
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="absolute right-10 w-[10%] h-auto object-center object-contain"
      />
      <Image
        src={
          "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727118656/picture-tomato-tomato-with-word-tomato-it_1128301-3145_1_yvogqb.svg"
        }
        alt="Tomato"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[10%] h-auto object-center object-contain"
      />

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
          size="lg"
          weight="bold"
          className="text-center !text-[42px]"
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
            <Image
              src={
                "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727117730/quote-down_mcfy84.svg"
              }
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-[20%] lg:w-[7%] h-auto object-center object-contain"
            />
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
