import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Link from "next/link";
import { CircleArrowUp, Utensils } from "lucide-react";

const Herobanner = () => {
  return (
    <div className="banner-hero bg-[#FFD4D4] ">
      <div className="grid lg:grid-cols-2 md:px-[80px] lg:px-[150px]">
        <div className="md:pt-[10rem] pt-[5rem]">
          <Typography
            variant="primary"
            size="xl"
            weight="bold"
            className="md:!text-[62px] text-[30px] md:text-left text-center md:leading-[70.7px] font-extrabold"
          >
            We don&apos;t just cook,
            <br /> we serve delicious <br />
            goodness!
          </Typography>
          <Typography
            variant="primary"
            size="sm"
            weight="normal"
            className="md:w-[40%] w-[70%] m-auto md:ml-0 pt-5 md:text-left text-center"
          >
            Discover the divine array of our carefully curated menu, ready to
            tantalize your taste buds!
          </Typography>
          <div className="flex items-center justify-center md:justify-start py-10 gap-5">
            <Link href={"https://indomiecafe.ng/order-online/"}>
              <button className="bg-[#DA0A0C] py-2 md:px-10 px-5 flex items-center font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                <Utensils size={20} />
                Our Menu
              </button>
            </Link>
            <Link href={"https://indomiecafe.ng/order-online/"}>
              <button className="bg-[#FFD4D4] text-[#DA0A0C] py-2 md:px-10 px-5 flex items-center font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                <CircleArrowUp size={20} className="rotate-45" />
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="pt-[5rem] relative">
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1726952734/Hero_Food_jjdedw.svg"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[40%] m-auto h-auto object-center object-contain pulse-scale-1"
          />
          <div className="flex items-center relative">
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1726953662/Hero_Food_2_jemlzh.svg"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[30%] m-auto h-auto object-center object-contain pulse-scale-2"
            />
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1726953126/Hero_Food_1_ba3l2z.svg"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[30%] m-auto h-auto object-center object-contain pulse-scale-2"
            />
             <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1726955241/Frame_8_mnfivx.png"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[70%] h-auto object-center object-contain absolute lg:translate-x-[7rem] translate-x-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
