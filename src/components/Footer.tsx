import Link from "next/link";
import React from "react";
import Typography from "./Typography";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { footLinks, socialLinks } from "../../utils/data";
import { CircleArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-[#FFD4D4] footer-hero lg:py-[10rem] px-10 md:px-[80px] lg:px-[150px] flex flex-col items-center">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
  
        <div className="space-y-3 lg:space-y-5 pt-20 md:pt-0">
          <Typography variant="base" size="sm" weight="semibold">
            Quick links
          </Typography>
          {footLinks.map(({ link, label }, index) => (
            <div key={index}>
              <Link href={link}>
                <Typography variant="base" size="sm">
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
            <Select>
              <SelectTrigger className="w-full md:w-1/2">
                <SelectValue placeholder="Indomie Cafe Surulere" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Indomie Cafe Locations</SelectLabel>
                  <SelectItem value="abuja">Indomie Cafe Abuja</SelectItem>
                  <SelectItem value="jakada">Indomie Cafe Jakanda</SelectItem>
                  <SelectItem value="yaba">Indomie Cafe Yaba</SelectItem>
                  <SelectItem value="vi">Indomie Cafe VI</SelectItem>
                  <SelectItem value="ikeja">Indomie Cafe Ikeja</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Typography variant="base" size="sm">
              Leisure Mall, Adeniran Ogunsanya Street, <br />
              Surulere, Lagos <br />
              Lagos <br />
              08177779977
            </Typography>
          </div>
        </div>

        <div>
          <div className="space-y-5">
            <Typography variant="base" size="sm" weight="semibold">
              We are social
            </Typography>
            <div className="flex items-center gap-4 pb-5">
              {socialLinks.map(({ link, icon }, index) => (
                <div key={index}>
                  <Link href={link}>
                    <Image
                      src={icon}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-[80%] h-auto object-center object-contain"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <Link href={"https://indomiecafe.ng/order-online/"}>
              <button className="bg-[#FFCC2A] py-2 md:px-10 px-5 flex items-center text-black font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                <CircleArrowUp size={20} className="rotate-45" />
                Leave us Your Feedback
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Typography variant="base" size="sm" className="py-10">
        Tolaram Africa Enterprises Limited <br />
        Address: 44, Jimoh Odutola Street
      </Typography>
    </div>
  );
};

export default Footer;
