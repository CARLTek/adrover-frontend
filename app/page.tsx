import React from "react";
import VerticalBarComponent from "@/components/ui/VerticalBarComponent";
import PieChartComponent from "@/components/ui/PieChartComponent";
import HorizontalBarComponent from "@/components/ui/HorizontalBarComponent"
import LineChartDotComponent from "@/components/ui/LineChartDotComponent";
import CardComponent from "@/components/ui/CardComponent";


export default function Home() {
  return (
    <div className="flex flex-row">
      {/*Navbar*/}
      <div></div>
      {/*Main Content*/}
      <div className="grid grid-cols-4 grid-rows-3 gap-10">
        {/* Row 1: Cards */}
        <div className="col-span-1 row-span-1"><CardComponent/></div>
        <div className="col-span-1 row-span-1"><CardComponent/></div>
        <div className="col-span-1 row-span-1"><CardComponent/></div>
        <div className="col-span-1 row-span-1"><CardComponent/></div>
        {/* Row 2: Graph 1 spans 3 columns, Graph 2 spans 1 column */}
        <div className="col-span-3 row-span-1"><VerticalBarComponent /></div>
        <div className="col-span-1 row-span-1"><PieChartComponent/></div>
        {/* Row 3: Graph 3 spans 2 columns, Graph 4 spans 2 columns */}
        <div className="col-span-2 row-span-1"><LineChartDotComponent/></div>
        <div className="col-span-2 row-span-1"><HorizontalBarComponent/></div>
      </div>
    </div>
  );
}
