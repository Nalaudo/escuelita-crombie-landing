"use client";
import Container from "@/src/components/Container/Container";
import Image from "next/image";
import Image1 from "@/public/assets/Image1.svg";
import Users from "@/public/assets/Users.svg";
import Locations from "@/public/assets/Locations.svg";
import Servers from "@/public/assets/Servers.svg";
import { useTheme } from "@/src/context/ThemeContext";

const About = () => {
  const { theme } = useTheme();
  return (
    <Container
      id="about"
      className={`flex flex-col items-center pt-24 pb-10 ${
        theme === "light" ? "text-black bg-white" : "text-white bg-zinc-900"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between pb-20">
        <div className="flex flex-col gap-5 items-center md:items-start max-w-full md:max-w-[50%] px-5 md:px-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-normal text-center md:text-left">
            Want anything to be easy with <strong>LaslesVPN.</strong>
          </h1>
          <p className="text-base leading-[1.75] text-center md:text-left">
            Provide a network for all your needs with ease and fun using
            <strong> LaslesVPN</strong> discover interesting features from us.
          </p>
          <button className="bg-red-500 w-1/2 md:w-1/3 h-14 font-bold text-white my-10 rounded-xl shadow-2xl shadow-red-500">
            Get Started
          </button>
        </div>
        <div className="max-w-[90%] md:max-w-[50%]">
          <Image width={500} height={500} src={Image1} alt="Image 1" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-around h-40">
        <div className="flex items-center flex-col md:flex-row justify-center gap-10 w-1/3 h-full">
          <Image width={50} height={50} src={Users} alt="Image 2" />
          <div className="text-center">
            <strong className="text-3xl">90+</strong>
            <p>Users</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 border-x-2 w-1/3 h-full">
          <Image width={50} height={50} src={Locations} alt="Image 3" />
          <div className="text-center">
            <strong className="text-3xl">30+</strong>
            <p>Locations</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-1/3 h-full">
          <Image width={50} height={50} src={Servers} alt="Image 4" />
          <div className="text-center">
            <strong className="text-3xl">50+</strong>
            <p>Servers</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
