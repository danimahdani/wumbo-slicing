import React from "react";
import Image from "next/legacy/image";
import Icon from "@/images/icon.svg";

const Header = () => {
  return (
    <div className="absolute z-20 inset-0 overflow-hidden mt-12">
      <div className="max-w-7xl mx-auto bg-violet-500 p-5"></div>
    </div>
  );
};

export default Header;
