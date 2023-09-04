"use client";
import Container from "@/src/components/Container/Container";
import Image from "next/image";
import React from "react";
import map from "@/public/assets/map.svg";
import Sponsored from "@/public/assets/Sponsored.svg";
import { useTheme } from "@/src/context/ThemeContext";

const Location = () => {
  const { theme } = useTheme();
  return (
    <Container
      id="location"
      className={`min-h-[50vh] flex items-center justify-center ${
        theme === "light" ? "text-black bg-white" : "text-white bg-zinc-900"
      }`}
      childClassName="h-full"
    >
      <div className="flex flex-col items-center justify-center h-full gap-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <h4 className="text-4xl md:text-5xl font-bold leading-normal text-center md:text-left">
            Huge Global Network of Fast VPN
          </h4>
          <p className="text-base leading-[1.75] text-center">
            See <strong>LaslesVPN</strong> everywhere to make it easier for you
            when you move locations.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image width={1000} height={1000} src={map} alt="World map" />
        </div>
        <div className="flex items-center justify-center">
          <Image width={1000} height={1000} src={Sponsored} alt="World map" />
        </div>
      </div>
    </Container>
  );
};

export default Location;
