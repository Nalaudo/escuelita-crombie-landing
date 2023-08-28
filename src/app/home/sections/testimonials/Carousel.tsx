"use client";
import NextButtonSVG from "@/public//assets/NextButton.svg";
import PrevButtonSVG from "@/public/assets/PrevButton.svg";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useQuery } from "react-query";

type FetchedData = {
  avatar: string;
  fullName: string;
  testimonial: string;
};

export const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const scrollToNextCard = () => {
    const container = carouselRef.current;

    if (container) {
      const cardWidth = container.scrollWidth / container.children.length;

      const currentScroll = container.scrollLeft;
      const nextCardPosition = currentScroll + cardWidth;

      container.scrollTo({
        left: nextCardPosition,
        behavior: "smooth",
      });
      if (selectedCardIndex < container.children.length - 1)
        setSelectedCardIndex(selectedCardIndex + 1);
    }
  };

  const scrollToPrevCard = () => {
    const container = carouselRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / container.children.length;

      const currentScroll = container.scrollLeft;
      const prevCardPosition = currentScroll - cardWidth;
      container.scrollTo({
        left: prevCardPosition,
        behavior: "smooth",
      });

      if (selectedCardIndex > 0) setSelectedCardIndex(selectedCardIndex - 1);
    }
  };

  const scrollToSelectedCard = (index: number) => {
    const container = carouselRef.current;
    if (container) {
      const cardWidth = container.scrollWidth / container.children.length;
      const selectedCardPosition = index * cardWidth;

      container.scrollTo({
        left: selectedCardPosition,
        behavior: "smooth",
      });

      setSelectedCardIndex(index);
    }
  };

  const { isLoading, error, data } = useQuery(["testimonialData"], () =>
    fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/testimonial"
    ).then((res) => res.json())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <div
        className="flex flex-row w-3/4 overflow-scroll gap-5 no-scrollbar my-10"
        ref={carouselRef}
      >
        {data.map((testimonial: FetchedData, index: number) => {
          return (
            <button
              onClick={() => scrollToSelectedCard(index)}
              key={testimonial.testimonial}
              className={`flex flex-col items-center justify-center gap-5 min-w-[33.333333%] border-2 rounded-xl p-5 ${
                index === selectedCardIndex
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <div className="flex flex-row items-center gap-5">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.fullName}
                  width={50}
                  height={50}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
                <p>{testimonial.fullName}</p>
              </div>
              <p>{testimonial.testimonial}</p>
            </button>
          );
        })}
      </div>
      <div className="flex w-3/4 justify-between">
        <div className="flex gap-5 items-center">
          {data.map((_: FetchedData, index: number) => (
            <span
              key={index}
              className={`cursor-pointer h-3 rounded-full ${
                index === selectedCardIndex
                  ? "bg-red-500 w-10"
                  : "bg-gray-300 w-3"
              }`}
              onClick={() => scrollToSelectedCard(index)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center gap-5">
          <button onClick={scrollToPrevCard}>
            <Image
              src={PrevButtonSVG}
              alt="Previous Button"
              width={50}
              height={50}
            />
          </button>
          <button onClick={scrollToNextCard}>
            <Image
              src={NextButtonSVG}
              alt="Next Button"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
