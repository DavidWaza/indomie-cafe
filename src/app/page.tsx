"use client";
import About from "@/components/About";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";
import HamburgerMenu from "@/components/HamburgerMenu";
import Header from "@/components/Header";
import Herobanner from "@/components/Herobanner";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import TopMenu from "@/components/TopMenu";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      lenis.on("scroll", (e) => {
        console.log(e);
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <div className="">
      <div className="hidden lg:block">
        <Header />
      </div>
      <div className="block lg:hidden">
        <HamburgerMenu />
      </div>
      <Herobanner />
      <HowItWorks />
      <About />
      <TopMenu />
      <Reviews />
      <Location />
      <AppDownload />
      <Footer />
    </div>
  );
}
