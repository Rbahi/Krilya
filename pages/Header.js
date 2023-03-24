import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="fixed flex w-full top-0 z-50 shadow-md my-auto bg-white p-3 opacity-80 hover:opacity-100 transition duration-200 focus-within:opacity-100">
      
      {/* Left */}
      <div className="relative flex items-center h-11 w-16">
        <Image
          src="/../public/favicon.ico"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="cursor-pointer"
        />
      </div>


      {/* Right */}
      <div className="flex items-center space-x-4 justify-end pl-5 w-full">
        <p className="inline-flex  text-gray-900 cursor-pointer">
          Become a Host
        </p>
        {/* <GlobeAltIcon className="text-gray-500 h-6 cursor-pointer" /> */}
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6 text-gray-600 cursor-pointer" />
          <UserCircleIcon className="h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
      
    </header>
  );
}

export default Header;