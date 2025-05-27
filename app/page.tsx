export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/*Navbar*/}
      <div></div>
      {/*Main Content*/}
      <div className="grid grid-cols-4 grid-rows-3 gap-0">
        {/* Row 1: Cards */}
        <div className="col-span-1 row-span-1">Card 1</div>
        <div className="col-span-1 row-span-1">Card 2</div>
        <div className="col-span-1 row-span-1">Card 3</div>
        <div className="col-span-1 row-span-1">Card 4</div>
        {/* Row 2: Graph 1 spans 3 columns, Graph 2 spans 1 column */}
        <div className="col-span-3 row-span-1">Graph 1</div>
        <div className="col-span-1 row-span-1">Graph 2</div>
        {/* Row 3: Graph 3 spans 2 columns, Graph 4 spans 2 columns */}
        <div className="col-span-2 row-span-1">Graph 3</div>
        <div className="col-span-2 row-span-1">Graph 4</div>
      </div>
    </div>
  );
}
