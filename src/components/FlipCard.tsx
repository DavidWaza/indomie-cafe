import Image from "next/image";
import React from "react";
import Typography from "./Typography";
import Link from "next/link";
import { CircleArrowUp } from "lucide-react";

interface IFlipCardProps {
  imgSrc: string;
  // label: string;
}
const FlipCard: React.FC<IFlipCardProps> = ({ imgSrc }) => {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image
              src={imgSrc}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[98%] object-center object-contain"
            />
          </div>
          <div className="flip-card-back">
            <div className="py-10">
              <Typography variant="primary" size="md" weight="semibold">
                Cripsy Chicken Bites
              </Typography>
              <div className="pt-10 flex justify-center ">
                <Link href={"https://indomiecafe.ng/order-online/"}>
                  <button className="bg-[#FFCC2A] py-2 md:px-10 px-5 flex items-center text-black font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                    <CircleArrowUp size={20} className="rotate-45" />
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
