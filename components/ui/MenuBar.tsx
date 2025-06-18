"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function MenuBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-5 py-3 rounded-full bg-white dark:bg-[#161616]  text-black dark:text-white">
      <Image
        src="/ad-rover-logo.svg"
        alt="ad-rover-Logo"
        width={150}
        height={0}
      />
      <div className="flex items-center gap-4">
        {/* Light/Dark Mode Toggle */}
        <Button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="text-white dark:text-white rounded-full bg-gray-800 dark:bg-[#272727]"
        >
          {theme === "light" ? <Moon size={25} /> : <Sun size={25} />}
        </Button>

        {/* Logout */}
        <Button variant="default" className="rounded-full px-10 py-6 text-sm">
          Log Out
        </Button>
      </div>
    </div>
  );
}
