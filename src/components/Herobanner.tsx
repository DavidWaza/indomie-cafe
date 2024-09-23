import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Link from "next/link";
import { CircleArrowUp, Utensils } from "lucide-react";

const Herobanner = () => {
  return (
    <div className="banner-hero bg-[#FFF6F7] ">
      <div className="grid lg:grid-cols-2 2xl:grid-cols-2 md:px-[80px] lg:px-[150px]">
        <div className="lg:pt-[10rem] md:pt-[5rem] py-10">
          <Typography
            variant="primary"
            size="xl"
            weight="bold"
            className="
    text-[30px] 
    leading-[40px] 
    md:text-[48px] 
    md:leading-[60px] 
    lg:text-[62px] 
    lg:leading-[70px] 
    xl:text-[70px] 
    xl:leading-[80px] 
    text-center md:text-left w-full px-5 md:px-0 font-extrabold
  "
          >
            We don&apos;t just cook, we serve delicious goodness!
          </Typography>
          <Typography
            variant="primary"
            size="sm"
            weight="normal"
            className="
    w-full 
    mx-auto 
    md:ml-0 
    pt-5 
    text-center 
    md:text-left 
    px-5 
    md:px-0
    !text-[24px]
  "
          >
            Discover the divine array of our carefully curated menu, ready to
            tantalize your taste <br />
            buds!
          </Typography>

          <div className="flex items-center justify-center md:justify-start py-10 gap-5">
            <Link href={"#topmenu"} id="#topmenu">
              <button className="bg-[#DA0A0C] py-2 md:px-10 text-white px-5 flex items-center font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
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
        <div className="lg:pt-[7rem] 2xl:pt-[5rem] relative">
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727107893/Frame_7_nskyuq.png"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[70%] h-auto object-center object-contain absolute z-20 -top-1 lg:translate-x-[7rem] translate-x-12"
          />
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727075820/Big_anqge4.svg"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[40%] m-auto h-auto object-center object-contain pulse-scale-1"
          />
          <div className="flex items-center relative">
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727075817/Hero_Food_o13gsz.svg"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[30%] m-auto h-auto object-center object-contain pulse-scale-2"
            />
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727075821/Hero_Food_1_mhnqbx.svg"
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
