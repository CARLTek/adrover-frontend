import React from "react";
import GridComponent from "@/components/ui/GridComponent";
import Navbar from "@/components/ui/Navbar";
import MenuBar from "@/components/ui/MenuBar";

export default function Home() {
  return (
    <div className="flex flex-row bg-[#272727]">
      {/* Sidebar */}
      <div >
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {/* Top Bar */}
        <MenuBar />

        {/* Main Grid Content */}
        <main className="pt-5">
          <GridComponent />
        </main>
      </div>
    </div>
  );
}
