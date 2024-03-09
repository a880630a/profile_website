import React from "react";

const scrollBar = () => {
  return (
    <div className="flex flex-row-reverse w-[2rem] h-[80dvh] bg-transparent absolute right-5 items-end">
      <div className="h-[80dvh] mr-[0.2rem] w-[0.3rem] rounded-2xl bg-slate-300 opacity-60 overflow-hidden">
        <div className="water-animation rounded-2xl bg-white h-[30dvh] w-[0.2rem]"></div>
      </div>
      <p className="manual-font text-[1rem] text-slate-200 font-semibold ">
        向下滑
      </p>
    </div>
  );
};

export default scrollBar;
