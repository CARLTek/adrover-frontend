"use client";

import React from "react";
import { LayoutDashboard, Settings } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen px-1 rounded-full bg-[#161616] text-white py-6">
      {/* Top Logo */}
      <Image src="/retractable-icon.svg" alt="Logo" width={25} height={25} />

      {/* Middle Icons */}
      <div className="p-4 bg-white/10 rounded-full">
        <LayoutDashboard size={30} />
      </div>

      {/* Bottom Avatar */}
      <div className="border-t border-gray-600 pt-4">
        <Image
          src="/avatar.png" // Replace with your actual avatar path
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
