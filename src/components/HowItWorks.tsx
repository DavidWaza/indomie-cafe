import Image from "next/image";
import React from "react";
import Typography from "./Typography";
import { CradDetails } from "../../utils/data";

const HowItWorks = () => {
  return (
    <div className="bg-[#FFF6F7] py-20 px-10 md:px-[80px] lg:px-[150px] ">
      <Image
        src={
          "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726960529/Vector_7_rb1yst.svg"
        }
        alt="banner image"
        width={0}
        height={0}
        sizes="100vw"
        className="lg:w-[15%] w-1/2 m-auto h-auto object-center object-contain"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 py-10">
        {CradDetails.map(({ link, title, label }, index) => (
          <div
            className="darksoul-card border border-[#9B7706]"
            key={index}
          >
            <div className="circle"></div>
            <div className="content z-50 py-5">
              <Image
                src={link}
                alt="banner image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-[30%] m-auto h-auto object-center object-contain z-"
              />

              <Typography
                variant="primary"
                size="xl"
                weight="semibold"
                className="text-center py-2 md:w-[60%] m-auto"
              >
                {title}
              </Typography>
              <Typography
                variant="primary"
                size="sm"
                weight="normal"
                className="text-center py-2 w-[70%] m-auto"
              >
                {label}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2">
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726960528/Vector_6_jugmwg.svg"
            }
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="lg:w-[30%] w-1/2 m-auto h-auto object-center object-contain"
          />
        </div>
        <div>
          <Image
            src={
              "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726960528/Vector_6_jugmwg.svg"
            }
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="lg:w-[30%] w-1/2 m-auto h-auto object-center lg:block hidden object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
