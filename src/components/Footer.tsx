import Link from "next/link";
import React, { useState } from "react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { footLinks, ILocation, locations, socialLinks } from "../../utils/data";
import { CircleArrowUp, X } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Footer = () => {
  const [selectedLocation, setSelectedLocation] = useState<ILocation | null>(
    null
  );
  return (
    <div className="bg-[#FFF6F7] footer-hero lg:pt-[10rem] px-10 md:px-[80px] lg:px-[150px] flex flex-col items-center">
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
            <div>
              <Select
                onValueChange={(value: string) =>
                  setSelectedLocation(
                    locations.find((loc) => loc.location === value) || null
                  )
                }
              >
                <SelectTrigger className="w-full md:w-1/2 lg:w-[70%]">
                  <SelectValue placeholder="Indomie Cafe Surulere" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Indomie Cafe Locations</SelectLabel>
                    {locations.map(({ index, location }) => (
                      <SelectItem value={location} key={index}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {selectedLocation && (
                <p className="mt-4 text-sm">
                  {selectedLocation.location}
                  <br />
                  <a
                    href={selectedLocation.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFCC2A] font-semibold py-3 hover:underline"
                  >
                    View on Map
                  </a>
                </p>
              )}
            </div>
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
            <AlertDialog>
              <AlertDialogTrigger className="bg-[#FFCC2A] py-2 md:px-10 px-5 flex items-center text-black font-medium gap-2 hover:translate-x-2 transition-all ease-in-out text-nowrap">
                <CircleArrowUp size={20} className="rotate-45" />
                Leave us Your Feedback
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-black flex justify-between items-center py-6">
                    Write to us
                    <AlertDialogCancel className="border-0">
                      <X size={20} />
                    </AlertDialogCancel>
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    <form>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <Label htmlFor="first name" className="!text-sm">
                            First Name
                          </Label>
                          <Input
                            type="text"
                            placeholder="Enter first name"
                            className="bg-[#F8FDFE]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="first name" className="!text-sm">
                            Last Name
                          </Label>
                          <Input
                            type="text"
                            placeholder="Enter last name"
                            className="bg-[#F8FDFE]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="first name" className="!text-sm">
                            Email address
                          </Label>
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            className="bg-[#F8FDFE]"
                          />
                        </div>
                        <div>
                          <Label htmlFor="first name" className="!text-sm">
                            Phone number
                          </Label>
                          <Input
                            type="number"
                            placeholder="Enter phone number"
                            className="bg-[#F8FDFE]"
                          />
                        </div>
                      </div>
                      <div className="my-5">
                        <Label htmlFor="first name" className="!text-sm">
                          Message
                        </Label>
                        <Textarea
                          placeholder="Enter message here..."
                          className="bg-[#F8FDFE]"
                        />
                      </div>
                    </form>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="pb-6">
                  <AlertDialogAction className="bg-[#DA0A0C] w-full flex items-center gap-3">
                    Submit
                    <CircleArrowUp size={20} className="rotate-45" />
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
      <Typography variant="base" size="sm" className="py-10">
        Tolaram Africa Enterprises Limited <br />
        Address: 44, Jimoh Odutola Street
      </Typography>
      <Typography variant="secondary" size="sm" className="py-3 text-center hover:underline">
        <Link href={"https://akriveiainfotech.com/"}>&copy; 2024 akriveiainfotech</Link>
      </Typography>
    </div>
  );
};

export default Footer;
