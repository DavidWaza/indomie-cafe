import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { Utensils } from "lucide-react";
import FlipCard from "./FlipCard";

const FlipCardData = [
  {
    imgSrc:
      "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727379886/Fries_and_Ketchup_atg6xm.jpg",
    label: "Fries & Ketchup",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727379897/Cheezeralla_plate_vjlh1u.jpg",
    label: "Cheezeralla Plate",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727379923/Frizzled_Egg_plate_slfkwv.jpg",
    label: "Frizzled Egg",
  },

  {
    imgSrc:
      "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727380008/Asian_Beef_plate_1_zoi3sh.jpg",
    label: "Asian beef Plate",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727379954/Africana_plate_ink88e.jpg",
    label: "Africana Plate",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dgbl43ljm/image/upload/v1727938042/Goat_Meat_Peppersoup_1_qbsa7v.jpg",
    label: "Goat Meat Peppersoup",
  },
];
const TopMenu = () => {
  return (
    <section id="topmenu">
      <div className="bg-[#500505] py-20 h-full ">
        <div className="px-10 md:px-[80px] 2xl:px-[150px]">
          <div className="grid lg:grid-cols-2">
            <div className=" ">
              <Typography
                variant="tertiary"
                size="sm"
                weight="medium"
                className="text-[24px]"
              >
                TOP MENU
              </Typography>
              <div className="">
                <Typography
                  variant="base"
                  size="md"
                  weight="bold"
                  className="pt-3 text-[22px] leading-[35px] lg:!text-[26px] 2xl:!text-[36px] md:leading-[40px] border-[9px] border-y-0 border-l-0 border-[#FFCC2A]"
                >
                  Craft Your Culinary Journey: <br />
                  Personalize Your Plate with <br />
                  Infinite Flavors!
                </Typography>
              </div>
            </div>
            <div className="lg:px-10 2xl:px-20 py-5 md:py-0">
              <div className="">
                <Typography
                  variant="base"
                  size="sm"
                  className="lg:text-[20px] 2xl:text-[24px] lg:leading-[30px] 2xl:leading-[44px]"
                >
                  Indulge in the divine assortment from our exclusive menu
                  selection!
                </Typography>
                <div className="pt-4">
                  <Link href={"https://indomiecafe.ng/order-online/"}>
                    <button className="bg-[#FFCC2A] py-2 md:px-10 px-5 flex items-center text-black font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                      <Utensils size={20} />
                      Explore & Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-20">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {FlipCardData.map(({ imgSrc, label }, index) => (
                <FlipCard key={index} imgSrc={imgSrc} label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopMenu;
