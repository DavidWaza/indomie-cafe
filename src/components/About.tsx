import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name="about">
      <div className="about-hero bg-[#FFF6F7] lg:py-[15rem] px-10 md:px-[80px] lg:px-[150px]">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Image
              src={`https://res.cloudinary.com/dgbl43ljm/image/upload/v1727076042/Frame_18_ykhpih.svg`}
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-center pt-[6rem] lg:pt-0 object-contain"
            />
          </div>
          <div className="bean-overlap-img">
            <Typography variant="secondary" size="sm" weight="medium" className="text-[24px]">
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
            <Typography variant="primary" size="sm" className="py-2 lg:text-[20px] 2xl:leading-[40px] 2xl:!text-[22px]">
              Indomie Cafe is the first Noodle Bar in Nigeria which is making
              fusion food a big hit among many foodies! Our delicious and
              innovative recipes offer spicy taste and visual treats for all our
              customers. With our world-class experience, fresh ingredients,
              innovative recipes, affordable prices and vibrant and lively
              interiors- Indomie is going to be your go-to place for delicious
              food and a great time with friends and family. Get ready to taste
              the twist offered by the iconic brand of noodles. Our appetizing
              dishes include Yummie Rolls, Frittatas, Frizzled Eggs, Prawn Mie,
              refreshing drinks and a lot more.
            </Typography>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
