"use client";
import Image from "next/image";
import React from "react";
import Typography from "./Typography";
import { CircleArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { Navlinks } from "../../utils/data";
import { Link } from "react-scroll";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white h-24">
      <div className="flex justify-between items-center lg:px-[150px] px-20 py-5">
        <div>
          <Image
            src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1726906276/Logo_hx9dol.svg"
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[70%] h-auto object-contain object-center"
          />
        </div>
        <div className="flex space-x-4">
          {Navlinks.map(({ link, label }, index) => (
            <div key={index}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Typography
                  variant="primary"
                  size="sm"
                  weight="medium"
                  className={pathname === link ? "!text-[#DA0A0C]" : ""}
                >
                  {label}
                </Typography>
              </Link>
            </div>
          ))}
        </div>
        {/* External link should use <a> tag or next/link */}
        <a href="https://indomiecafe.ng/order-online/">
          <button className="bg-[#DA0A0C] py-2 px-10 flex items-center gap-2 hover:translate-x-6 transition-all text-white ease-in-out">
            <CircleArrowUp size={20} className="rotate-45" />
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
