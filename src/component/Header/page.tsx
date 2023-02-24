import React from "react";
import Image from "next/legacy/image";
import Icon from "@/images/icon.svg";

const Header = () => {
  return (
    <div className="absolute z-20 inset-0 overflow-hidden">
      <div className="max-w-7xl mx-auto p-5 flex mt-12">
        <div className="flex-none flex items-center">
          <Icon className="mr-3 shadow-xl rounded-full" />
          <span className="font-bold text-base text-dark ">Wumbo</span>
        </div>
        <div className="flex flex-1 items-center flex-col lg:flex-row">
          <div className="my-auto mx-20 flex-1">
            <ul className="grid grid-flow-row lg:grid-cols-5 text-center">
              <li className="text-muted hover:text-dark hover:font-bold">
                Top
              </li>
              <li className="text-muted hover:text-dark hover:font-bold">
                For Everyone
              </li>
              <li className="text-muted hover:text-dark hover:font-bold">
                Features
              </li>
              <li className="text-muted hover:text-dark hover:font-bold">
                Preview
              </li>
              <li className="text-muted hover:text-dark hover:font-bold">
                License
              </li>
            </ul>
          </div>
          <div className="text-right my-auto">
            <button className="bg-white text-primary px-8 py-2 rounded-lg font-bold">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
