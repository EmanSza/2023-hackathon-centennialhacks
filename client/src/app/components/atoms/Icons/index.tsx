"use client";

import React from "react";
/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @return {React.Component} Icon component
 */
interface IconProps {
  name: string;
  className?: string;
  onClick?: Function;
  text?: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = "", onClick = () => {}, text = "", color = "", ...props }) => {
  if (name === "") {
    return null;
  }
  try {
    const Image = require(`./stock/${name}`).default;
    if (Image) {
      const handleClick = () => {
        onClick(); // Call the onClick function passed to the Icon component
      };

      return <Image aria-label={name} className={`${className}`} onClick={handleClick} {...props} />;
    }
    return null;
  } catch (error: any) {
    return null;
  }
};

export default Icon;
