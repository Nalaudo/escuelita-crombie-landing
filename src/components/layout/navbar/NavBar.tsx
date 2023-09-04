"use client";
import Logo from "@/public/assets/Logo.svg";
import Container from "@/src/components/Container/Container";
import { useTheme } from "@/src/context/ThemeContext";
import { Menu } from "@headlessui/react";
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
    <>
      <Container
        className={`flex ${
          theme === "light" ? "text-black bg-white" : "text-white bg-zinc-900"
        } fixed top-0 z-50 justify-center border-b-2`}
      >
        <nav className="hidden xl:block">
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
              <div
                className="relative w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <svg
                    className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform translate-x-0 transition-transform`}
                    height="200px"
                    width="200px"
                    id="Layer_1"
                    viewBox="0 0 473.931 473.931"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <circle
                        style={{ fill: "#F2BE3E" }}
                        cx="236.966"
                        cy="236.966"
                        r="236.966"
                      ></circle>{" "}
                      <circle
                        style={{ fill: "#F1EB75" }}
                        cx="236.966"
                        cy="236.966"
                        r="117.154"
                      ></circle>{" "}
                    </g>
                  </svg>
                ) : (
                  <svg
                    className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform translate-x-6 transition-transform`}
                    fill="#000000"
                    viewBox="0 0 56 56"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 34.9374 32.9453 C 36.5546 32.9453 38.1952 32.5938 39.1796 32.2422 C 39.4374 32.1719 39.6014 32.1484 39.7421 32.1484 C 40.1171 32.1484 40.5155 32.4766 40.5155 32.9687 C 40.5155 33.0625 40.4921 33.3672 40.3749 33.6719 C 38.6874 37.9375 33.8358 41.3828 28.2109 41.3828 C 20.4999 41.3828 14.6171 35.875 14.6171 28.1640 C 14.6171 22.6562 17.8749 17.4062 22.7265 15.4844 C 23.0312 15.3672 23.3124 15.3438 23.4765 15.3438 C 23.9687 15.3438 24.2499 15.7422 24.2499 16.0938 C 24.2499 16.2109 24.2265 16.3984 24.1093 16.7031 C 23.6874 17.8047 23.2890 19.8906 23.2890 21.3672 C 23.2890 28.4687 27.8358 32.9453 34.9374 32.9453 Z"></path>
                    </g>
                  </svg>
                )}
              </div>
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
      <div>
        <nav
          className={`flex items-center justify-between w-full p-5 xl:hidden fixed border-b-2 ${
            theme === "light" ? "text-black bg-white" : "text-white bg-zinc-900"
          }`}
        >
          <Link href={"/"} className="flex items-center justify-center gap-5">
            <Image src={Logo} alt="logo" />
            <h1 className="text-xl font-bold">
              Lasles<strong>VPN</strong>
            </h1>
          </Link>
          <Menu as="div" className="flex flex-row gap-5 text-left">
            <div
              className="relative w-12 h-6 bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={toggleTheme}
            >
              {theme === "light" ? (
                <svg
                  className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform translate-x-0 transition-transform`}
                  height="200px"
                  width="200px"
                  id="Layer_1"
                  viewBox="0 0 473.931 473.931"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle
                      style={{ fill: "#F2BE3E" }}
                      cx="236.966"
                      cy="236.966"
                      r="236.966"
                    ></circle>{" "}
                    <circle
                      style={{ fill: "#F1EB75" }}
                      cx="236.966"
                      cy="236.966"
                      r="117.154"
                    ></circle>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform translate-x-6 transition-transform`}
                  fill="#000000"
                  viewBox="0 0 56 56"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 34.9374 32.9453 C 36.5546 32.9453 38.1952 32.5938 39.1796 32.2422 C 39.4374 32.1719 39.6014 32.1484 39.7421 32.1484 C 40.1171 32.1484 40.5155 32.4766 40.5155 32.9687 C 40.5155 33.0625 40.4921 33.3672 40.3749 33.6719 C 38.6874 37.9375 33.8358 41.3828 28.2109 41.3828 C 20.4999 41.3828 14.6171 35.875 14.6171 28.1640 C 14.6171 22.6562 17.8749 17.4062 22.7265 15.4844 C 23.0312 15.3672 23.3124 15.3438 23.4765 15.3438 C 23.9687 15.3438 24.2499 15.7422 24.2499 16.0938 C 24.2499 16.2109 24.2265 16.3984 24.1093 16.7031 C 23.6874 17.8047 23.2890 19.8906 23.2890 21.3672 C 23.2890 28.4687 27.8358 32.9453 34.9374 32.9453 Z"></path>
                  </g>
                </svg>
              )}
            </div>
            <Menu.Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke={theme === "light" ? "black" : "white"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Menu.Button>
            <Menu.Items
              className={`flex flex-col absolute top-[70px] right-0 z-50 w-full h-[calc(100vh-70px)] origin-top-right divide-y-2 divide-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                theme === "light"
                  ? "text-black bg-white"
                  : "text-white bg-zinc-900"
              }`}
            >
              {links.map((element) => {
                return (
                  <Menu.Item key={element.href}>
                    <Link
                      href={element.href}
                      className="h-[14.2857142857%] flex items-center justify-end text-xl"
                    >
                      {element.label}
                    </Link>
                  </Menu.Item>
                );
              })}
              <Menu.Item>
                <Link
                  href={"/sign-in"}
                  className="flex items-center justify-end text-xl h-[calc(14.2857142857%/2)]"
                >
                  <strong>Sign In</strong>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link
                  href={"/sign-up"}
                  className="flex items-center justify-end text-xl h-[calc(14.2857142857%/2)]"
                >
                  <strong>Sign Up</strong>
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
