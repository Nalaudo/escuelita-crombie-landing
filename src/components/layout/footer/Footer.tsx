import React from "react";
import Container from "../../Container/Container";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import Facebook from "@/public/assets/Facebook.svg";
import Twitter from "@/public/assets/Twitter.svg";
import Instagram from "@/public/assets/Instagram.svg";

const Footer = () => {
  return (
    <Container className="flex items-center justify-center min-h-96">
      <div className="flex justify-between h-96">
        <div className="flex flex-col w-1/3 gap-8">
          <Link href={"/"} className="flex items-center gap-5">
            <Image src={Logo} alt="Logo" />
          </Link>
          <p className="w-3/4">
            <strong>LaslesVPN </strong>
            is a private virtual network that has unique features and has high
            security.
          </p>
          <div className="flex gap-5">
            <Image src={Facebook} alt="Facebook" />
            <Image src={Twitter} alt="Twitter" />
            <Image src={Instagram} alt="Instagram" />
          </div>
          <p className="text-gray-500">&reg;2020LaslesVPN</p>
        </div>
        <div className="flex flex-col w-1/4 gap-8">
          <h4 className="font-semibold">Product</h4>
          <div className="flex flex-col gap-5 text-sm">
            <Link href={"/"}>Download</Link>
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>Locations</Link>
            <Link href={"/"}>Server</Link>
            <Link href={"/"}>Countries</Link>
            <Link href={"/"}>Blog</Link>
          </div>
        </div>
        <div className="flex flex-col w-1/4 gap-8">
          <h4 className="font-semibold">Engage</h4>
          <div className="flex flex-col gap-5 text-sm">
            <Link href={"/"}>LaslesVPN ?</Link>
            <Link href={"/"}>FAQ</Link>
            <Link href={"/"}>Tutorials</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms of Service</Link>
          </div>
        </div>
        <div className="flex flex-col w-1/4 gap-8">
          <h4 className="font-semibold">Earn Money</h4>
          <div className="flex flex-col gap-5 text-sm">
            <Link href={"/"}>Affiliate</Link>
            <Link href={"/"}>Become Partner</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
