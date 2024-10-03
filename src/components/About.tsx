import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="about-hero bg-[#FFF6F7] py-20 lg:py-[15rem] px-10 md:px-[80px] lg:px-[150px]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Image
              src={`https://res.cloudinary.com/dgbl43ljm/image/upload/v1727334138/Frame_18_ewb3ax.png`}
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-center pt-[6rem] lg:pt-0 object-contain"
            />
          </div>
          <div className="bean-overlap-img">
            <Typography
              variant="secondary"
              size="sm"
              weight="medium"
              className="text-[24px]"
            >
              ABOUT US
            </Typography>
            <Typography
              variant="primary"
              size="md"
              weight="bold"
              className="leading-[40px] !font-[800] pb-3 pt-1"
            >
              Where your tastebuds <br />
              reaches heaven
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              className="py-2 lg:text-[20px] 2xl:leading-[40px] 2xl:!text-[22px]"
            >
              About Indomie Cafe Indomie Cafe, Nigeria’s first Noodle Bar, is
              revolutionizing fusion cuisine and winning over food enthusiasts!
              Our mouth-watering and creative recipes deliver a spicy kick and a
              feast for the eyes. With top-notch service, fresh ingredients,
              innovative dishes, affordable prices, and vibrant interiors,
              Indomie Cafe is set to become your favorite spot for delicious
              meals and fun times with friends and family. Experience the unique
              twist of the iconic noodle brand with our tempting meals like
              Africana, Prawn Mie, refreshing drinks, and much more.
            </Typography>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
