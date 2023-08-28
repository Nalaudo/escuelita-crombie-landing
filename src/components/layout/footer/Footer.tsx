import React from "react";
import Container from "../../Container/Container";
import Link from "next/link";
import CrombieIsotype from "@/public/assets/CrombieIsotype";

const Footer = () => {
  return (
    <Container className="h-44">
      <Link href={"/"} className="flex items-center gap-5">
        <CrombieIsotype width={50} height={50} />
        <h4 className="text-2xl font-semibold">
          Escuelita<strong>Crombie</strong>
        </h4>
      </Link>
    </Container>
  );
};

export default Footer;
