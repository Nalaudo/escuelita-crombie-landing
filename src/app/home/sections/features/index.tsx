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
      className={`flex justify-center items-center py-28 ${
        theme === "light" ? "text-black bg-gray-100" : "text-white bg-black"
      }`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="max-w-[50%]">
          <Image width={500} height={500} src={Image2} alt="Image 2" />
        </div>
        <div className="max-w-[50%]">
          <div className="flex flex-col w-11/12 gap-5">
            <h1 className="text-5xl font-bold leading-normal">
              We Provide Many Features You Can Use
            </h1>
            <p className="text-xl leading-[1.75]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul>
              <li className="text-xl leading-[1.75]">
                ✅Powerfull online protection.
              </li>
              <li className="text-xl leading-[1.75]">
                ✅Internet without borders.
              </li>
              <li className="text-xl leading-[1.75]">✅Supercharged VPN</li>
              <li className="text-xl leading-[1.75]">
                ✅No specific time limits.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
