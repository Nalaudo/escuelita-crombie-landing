"use client";
import Logo from "@/public/assets/Logo.svg";
import Container from "@/src/components/Container/Container";
import { useTheme } from "@/src/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const links: { href: string; label: string }[] = [
    { href: "#about", label: "About" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#location", label: "Location" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#help", label: "Help" },
  ];
  const { theme, toggleTheme } = useTheme();

  return (
    <Container
      className={`flex ${
        theme === "light" ? "text-black bg-white" : "text-white bg-black"
      } fixed top-0 w-full z-50 justify-center border-b-2`}
    >
      <nav>
        <div className="flex items-center w-full py-3 justify-between mx-auto">
          <Link href={"/"} className="flex items-center justify-center gap-5">
            <Image src={Logo} alt="logo" />
            <h1 className="text-xl font-bold">
              Lasles<strong>VPN</strong>
            </h1>
          </Link>
          <ul className="flex gap-8 text-lg">
            {links.map((element) => {
              return (
                <Link key={element.href} href={element.href}>
                  {element.label}
                </Link>
              );
            })}
          </ul>
          <ul className="flex gap-8 items-center text-lg">
            <button onClick={toggleTheme}>Theme</button>
            <Link href={"/sign-in"}>
              <strong>Sign In</strong>
            </Link>
            <Link
              href={"/sign-up"}
              className="flex rounded-3xl border-2 border-red-500 h-12 items-center"
            >
              <strong className="text-red-500 px-12">Sign Up</strong>
            </Link>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
