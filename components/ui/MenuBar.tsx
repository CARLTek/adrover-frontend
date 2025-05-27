import React from "react";

export default function MenuBar(){
  return (
    <div className="fixed flex flex-row justify-between bg-black text-white w-200 z-20 rounded-full text-center py-5 px-10 overflow-hidden">
      <div>Logo</div>
      <div className="flex flex-row items-center gap-5">
        <div>light/dark mode</div>
        <div>Log out</div>
      </div>
    </div>
  );
};
