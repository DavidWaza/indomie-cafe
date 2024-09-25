"use client";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Navlinks } from "../../utils/data";

import Typography from "./Typography";
import { usePathname } from "next/navigation";
import { CircleArrowUp } from "lucide-react";
import Image from "next/image";
import { Link } from "react-scroll";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex bg-white items-center justify-between px-10 relative z-50">
      <div>
        <Image
          src={
            "https://res.cloudinary.com/dgbl43ljm/image/upload/v1726906276/Logo_hx9dol.svg"
          }
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-1/2 h-auto object-contain object-center"
        />
      </div>
      <div className="relative justify-end  py-5 ">
        {/* Hamburger Icon */}
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          direction="right"
          duration={0.5}
          color="#000"
        />

        {/* Dropdown Menu */}
        <div
          className={`absolute top-16 right-0 bg-white transition-all duration-500 ease-in-out ${
            isOpen ? "opacity-100 h-auto" : "opacity-0 h-0"
          } overflow-hidden shadow-lg rounded-lg`}
          style={{ minWidth: "200px" }}
        >
          {isOpen &&
            Navlinks.map(({ link, label }, index) => (
              <div key={index} className="p-3 border-b hover:bg-gray-100">
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  <Typography
                    variant="primary"
                    size="sm"
                    weight="medium"
                    className={`block ${
                      pathname === link ? "!text-[#DA0A0C]" : ""
                    }`}
                  >
                    {label}
                  </Typography>
                </Link>
              </div>
            ))}
          <a href="https://indomiecafe.ng/order-online/">
            <button className="bg-[#DA0A0C] py-2 px-10 flex items-center gap-2 hover:translate-x-6 transition-all text-white ease-in-out">
              <CircleArrowUp size={20} className="rotate-45" />
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
