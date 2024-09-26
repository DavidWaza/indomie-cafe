import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import Image from "next/image";

const AppDownload = () => {
  return (
    <div className="bg-[#FFF6F7] relative py-10 md:py-[7rem] px-10 md:px-[80px] lg:px-[150px]">
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
      <div className="grid md:grid-cols-2">
        <div>
          <div>
            <Typography
              variant="secondary"
              size="sm"
              weight="medium"
              className="text-[24px]"
            >
              APP DOWNLOAD
            </Typography>
            <Typography
              variant="primary"
              size="md"
              weight="bold"
              className="leading-[40px] py-3 lg:block hidden "
            >
              Download Our App Today! <br />
              Treat Your Taste Buds To <br />
              Heaven
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              weight="bold"
              className="leading-[30px] py-3 lg:hidden block !text-[22px]"
            >
              Download Our App Today! <br />
              Treat Your Taste Buds To Heaven
            </Typography>
            <Typography
              variant="primary"
              size="sm"
              className="w-full lg:pt-5 text-[24px]"
            >
              Join the Trybe! Download the Indomie Cafe app today to enjoy
              exclusive offers and discounts today.
            </Typography>
            <div className="flex items-center gap-5 py-10">
              <Link href={""}>
                <Image
                  src={`https://res.cloudinary.com/dgbl43ljm/image/upload/v1727014808/google-store_afjlrc.png`}
                  alt="banner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-center lg:pt-0 object-contain"
                />
              </Link>
              <Link href={""}>
                <Image
                  src={`https://res.cloudinary.com/dgbl43ljm/image/upload/v1727014808/app-store_xzptxe.png`}
                  alt="banner image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-center lg:pt-0 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="doodle-bg lg:block hidden relative">
          <Image
            src={`https://res.cloudinary.com/dgbl43ljm/image/upload/v1727283602/Delievery_man_v1rcgy.png`}
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="lg:w-[75%] w-full h-auto absolute right-6 top-0 object-center lg:pt-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
