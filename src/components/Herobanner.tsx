import React from "react";
import Image from "next/image";
import Typography from "./Typography";
import Link from "next/link";
import { CircleArrowUp, Utensils } from "lucide-react";

const Herobanner = () => {
  return (
    <div className="banner-hero relative bg-[#FFF6F7] ">
      <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 px-5 sm:px-10 md:px-[80px] lg:px-[150px] relative">
        <div className="2xl:col-span-2">
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727120293/Ellipse_1_k24x1n.svg"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[8%] sm:w-[5%] lg:w-[2%] h-auto object-center object-contain absolute z-20 top-[3rem] sm:top-[6rem] lg:translate-x-[10rem] translate-x-6 sm:translate-x-12"
          />
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727120292/Ellipse_4_fexaem.svg"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[20%] sm:w-[12%] lg:w-[10%] h-auto object-center object-contain absolute top-[3rem] sm:top-[6rem] lg:translate-x-[15rem] translate-x-6 sm:translate-x-12"
          />

          <div className="lg:pt-[10rem] md:pt-[5rem] py-10">
            <Typography
              variant="primary"
              size="xl"
              weight="bold"
              className="
    text-[31px] 
    leading-[32px] 
    sm:text-[30px] 
    sm:leading-[40px] 
    md:text-[48px] 
    md:leading-[60px] 
    lg:text-[35px] 
    lg:leading-[44px] 
    xl:text-[47px]
    xl:leading-[60px] 
    2xl:text-[70px] 
    2xl:leading-[80px] 
    text-center md:text-left w-full px-5 md:px-0 font-extrabold relative z-30
  "
            >
              We don&apos;t just cook, we serve delicious goodness!
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              weight="normal"
              className="block text-sm xl:block lg:hidden w-full mx-auto md:ml-0 pt-5 text-center md:text-left px-5 lg:text-[20px] lg:leading-[27px] md:px-0 xl:!text-[24px] xl:leading-[37px]"
            >
              Discover the divine array of our carefully <br /> curated menu,
              ready to tantalize your taste <br />
              buds!
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              weight="normal"
              className="hidden lg:block xl:hidden w-full mx-auto md:ml-0 pt-5 text-center md:text-left px-5 lg:text-[20px] lg:leading-[30px] md:px-0"
            >
              Discover the divine array of our carefully curated menu, ready to
              tantalize your taste buds!
            </Typography>

            <div className="flex items-center justify-center md:justify-start py-5 sm:py-10 gap-2 sm:gap-5">
              <Link href={"#topmenu"} id="#topmenu">
                <button className="bg-[#DA0A0C] py-2 px-4 sm:px-5 md:px-10 text-white flex items-center font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                  <Utensils size={20} />
                  Our Menu
                </button>
              </Link>
              <Link href={"https://indomiecafe.ng/order-online/"}>
                <button className="bg-[#FFD4D4] text-[#DA0A0C] py-2 px-4 sm:px-5 md:px-10 flex items-center font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                  <CircleArrowUp size={20} className="rotate-45" />
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:pt-[7rem] 2xl:pt-[8rem] relative">
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727120292/Ellipse_3_emqdmi.svg"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[8%] sm:w-[5%] lg:w-[2%] h-auto object-center object-contain absolute z-20 top-[3rem] sm:top-[6rem] lg:translate-x-[2rem] translate-x-6 sm:translate-x-12"
          />

          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727107893/Frame_7_nskyuq.png"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-center object-contain absolute z-20 top-10 -left-10 sm:-left-20 lg:translate-x-[7rem] translate-x-6 sm:translate-x-12"
          />
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727075820/Big_anqge4.svg"
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="lg:w-[30%] xl:w-[40%] m-auto h-auto object-center object-contain pulse-scale-1"
          />
          <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-10 relative">
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727075817/Hero_Food_o13gsz.svg"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[40%] sm:w-[30%] xl:w-1/2 m-auto h-auto object-center object-contain pulse-scale-2"
            />
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1727075821/Hero_Food_1_mhnqbx.svg"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[40%] sm:w-[30%] xl:w-1/2 m-auto h-auto object-center object-contain pulse-scale-2"
            />
            <Image
              src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1726955241/Frame_8_mnfivx.png"
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-center object-contain absolute lg:translate-x-[3rem] translate-x-6 sm:translate-x-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herobanner;
