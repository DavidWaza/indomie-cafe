import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import Image from "next/image";

const AppDownload = () => {
  return (
    <div className="bg-[#FFD4D4] py-10 md:py-[7rem] px-10 md:px-[80px] lg:px-[150px]">
      <div className="grid md:grid-cols-2">
        <div>
          <div className="bean-overlap-img">
            <Typography variant="secondary" size="sm" weight="semibold">
              APP DOWNLOAD
            </Typography>
            <Typography
              variant="primary"
              size="md"
              weight="bold"
              className="leading-[40px] py-3 lg:block hidden"
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
              className="lg:w-1/2 lg:pt-5"
            >
              Lorem ipsum dolor sit amet, consectetur adipisic ingelit, sed do
              eiusmod tempor incididunt utlabo re et dolore magna aliqua.
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
        <div className="doodle-bg">
          <Image
            src={`https://res.cloudinary.com/dgbl43ljm/image/upload/v1727028669/Bike_and_Phone_qy8ec1.png`}
            alt="banner image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-1/2 h-auto m-auto object-center lg:pt-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
