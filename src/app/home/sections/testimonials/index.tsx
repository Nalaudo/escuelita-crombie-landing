"use client";
import Container from "@/src/components/Container/Container";
import { Carousel } from "./Carousel";
import { useTheme } from "@/src/context/ThemeContext";

const Testimonials = () => {
  const { theme } = useTheme();
  return (
    <Container
      id="testimonials"
      className={`min-h-[50vh] flex items-center justify-center pb-20 ${
        theme === "light" ? "text-black bg-white" : "text-white bg-zinc-900"
      }`}
      childClassName="h-full"
    >
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-4xl text-center font-semibold">
          Trusted by Thousands of Happy Customer
        </h4>
        <p className="text-center w-1/2">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>
      <Carousel />
    </Container>
  );
};

export default Testimonials;
