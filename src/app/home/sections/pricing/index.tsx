"use client";
import Container from "@/src/components/Container/Container";
import useFetch from "@/src/hooks/useFetch";
import Plan1SVG from "@/public/assets/Plan1.svg";
import Plan2SVG from "@/public/assets/Plan2.svg";
import Plan3SVG from "@/public/assets/Plan3.svg";
import Image from "next/image";

type FetchedData = {
  title: string;
  price: number | string;
  benefits: string[];
};

const Pricing = () => {
  const {
    isLoading,
    error,
    data,
  }: { isLoading: boolean; error: unknown; data: FetchedData[] } = useFetch(
    "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription"
  );

  const plansImages = [Plan1SVG, Plan2SVG, Plan3SVG];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <Container
      id="pricing"
      className="flex items-center justify-center h-screen"
    >
      <div className="flex flex-col items-center gap-5 py-20">
        <h4 className="text-3xl font-semibold">Choose Your Plan</h4>
        <p>
          Let&apos;s choose the package that is best for you and explore it
          happily and cheerfully.
        </p>
      </div>
      <div className="flex flex-row items-center justify-between w-full">
        {data.map((plan, index) => {
          return (
            <div
              key={plan.title}
              className={`flex flex-col items-center justify-between border-2 w-[30%] h-[70rem] gap-10 py-32 rounded-xl ${
                index === data.length - 1 ? "border-red-500" : "border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center gap-10">
                <div className="flex flex-col items-center gap-8">
                  <Image
                    src={plansImages[index]}
                    alt={`plan ${index + 1}`}
                    width={146}
                    height={167}
                  />
                  <h4 className="text-2xl">{plan.title}</h4>
                </div>
                <ul>
                  {plan.benefits.map((benefit) => {
                    return (
                      <div
                        key={benefit}
                        className="flex flex-row items-center gap-5"
                      >
                        <span>✅</span>
                        <li className="text-xl py-1">{benefit}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <h4 className="text-3xl font-semibold">
                  {typeof plan.price === "number" ? (
                    <div className="flex gap-2">
                      {`$${plan.price}`}
                      <h4 className="text-3xl font-normal">/ mo</h4>
                    </div>
                  ) : (
                    plan.price
                  )}
                </h4>
                <button
                  className={`flex rounded-3xl border-2 border-red-500 h-12 items-center text-red-500 font-bold px-20 ${
                    index === data.length - 1 && "bg-red-500 text-white"
                  }`}
                >
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Pricing;
