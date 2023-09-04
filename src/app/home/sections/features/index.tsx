"use client";
import Image2 from "@/public/assets/Image2.svg";
import Container from "@/src/components/Container/Container";
import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";

const Features = () => {
  const { theme } = useTheme();
  return (
    <Container
      id="features"
      className={`flex justify-center items-center py-10 ${
        theme === "light" ? "text-black bg-gray-100" : "text-white bg-zinc-900"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-[90%] md:max-w-[50%]">
          <Image width={500} height={500} src={Image2} alt="Image 2" />
        </div>
        <div className="flex flex-col w-11/12 gap-5 max-w-full md:max-w-[50%]">
          <h1 className="text-4xl md:text-5xl font-bold leading-normal text-center md:text-left">
            We Provide Many Features You Can Use
          </h1>
          <p className="text-base leading-[1.75] text-center md:text-left">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="flex items-center justify-center">
            <div className="flex flex-col justify-start">
              <li className="text-xl leading-[1.75] text-left">
                ✅Powerfull online protection.
              </li>
              <li className="text-xl leading-[1.75] text-left">
                ✅Internet without borders.
              </li>
              <li className="text-xl leading-[1.75] text-left">
                ✅Supercharged VPN
              </li>
              <li className="text-xl leading-[1.75] text-left">
                ✅No specific time limits.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Features;
