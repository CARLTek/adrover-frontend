import React from "react";
import GridComponent from "@/components/ui/GridComponent";
import Navbar from "@/components/ui/Navbar";
import MenuBar from "@/components/ui/MenuBar";

export default function Home() {
  return (
    <div className="flex flex-row gap-40">
      {/*Navbar*/}
      <div className="p-5"><Navbar/></div>
      {/*Main Content*/}
      <div className="flex flex-col w-full gap-40">
        <div><MenuBar/></div>
        <div className=""><GridComponent/></div>
      </div>
    </div>
  );
}
