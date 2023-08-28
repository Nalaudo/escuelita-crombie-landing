import Container from "@/src/components/Container/Container";
import Image from "next/image";
import Image1 from "@/public/assets/Image1.svg";
import Users from "@/public/assets/Users.svg";
import Locations from "@/public/assets/Locations.svg";
import Servers from "@/public/assets/Servers.svg";

const About = () => {
  return (
    <Container id="about" className="flex flex-col items-center py-20">
      <div className="flex flex-row items-center justify-between py-20">
        <div className="max-w-[50%]">
          <div className="flex flex-col w-11/12 gap-5">
            <h1 className="text-5xl font-bold leading-normal">
              Want anything to be easy with <strong>LaslesVPN.</strong>
            </h1>
            <p className="text-base leading-[1.75]">
              Provide a network for all your needs with ease and fun using
              <strong> LaslesVPN</strong> discover interesting features from us.
            </p>
            <button className="bg-red-500 w-1/3 h-14 font-bold text-white my-10 rounded-xl shadow-2xl shadow-red-500">
              Get Started
            </button>
          </div>
        </div>
        <div className="max-w-[50%]">
          <Image width={500} height={500} src={Image1} alt="Image 1" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-around h-40">
        <div className="flex items-center justify-center gap-10 w-1/3 h-full">
          <Image width={50} height={50} src={Users} alt="Image 1" />
          <div className="text-center">
            <strong className="text-3xl">90+</strong>
            <p>Users</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 border-x-2 w-1/3 h-full">
          <Image width={50} height={50} src={Locations} alt="Image 1" />
          <div className="text-center">
            <strong className="text-3xl">30+</strong>
            <p>Locations</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-10 w-1/3 h-full">
          <Image width={50} height={50} src={Servers} alt="Image 1" />
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
