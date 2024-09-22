import Link from "next/link";
import React from "react";
import Typography from "./Typography";

const footLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#location",
    label: "Locate Us",
  },
  {
    link: "",
    label: "Order Online",
  },
];

const Footer = () => {
  return (
    <div className="bg-[#FFD4D4] footer-hero lg:py-[10rem] px-10 md:px-[80px] lg:px-[150px]">
      <div className="grid grid-cols-3">
        <div className="space-y-5">
          <Typography variant="base" size="sm" weight="semibold">
            Quick links
          </Typography>
          {footLinks.map(({ link, label }, index) => (
            <div key={index} >
              <Link href={link}>
                <Typography variant="base" size="sm" className="">
                  {label}
                </Typography>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div className="space-y-5">
            <Typography variant="base" size="sm" weight="semibold">
             Locations
            </Typography>
            {footLinks.map(({ link, label }, index) => (
              <div key={index}>
                <Link href={link}>
                  <Typography variant="base" size="sm" className="">
                    {label}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="space-y-5">
            <Typography variant="base" size="sm" weight="semibold">
              Quick links
            </Typography>
            {footLinks.map(({ link, label }, index) => (
              <div key={index}>
                <Link href={link}>
                  <Typography variant="base" size="sm" className="">
                    {label}
                  </Typography>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
