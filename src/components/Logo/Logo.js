import React from "react";
import Link from "next/link";
import { Title } from "../Core";
import logo from "../../assets/image/png/Sage-logo-transparent.png";



const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        <Title color={color} variant="cardLg" className="mb-0">
        <img src={logo} alt="Sage Flowers" style={{maxWidth: 150}} />
        </Title>
      </a>
    </Link>
  );
};

export default Logo;
