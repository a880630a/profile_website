import React from "react";
import Image from "next/image";

const navBar2 = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-slate-500">
      <div className="">
        <Image src="/mark_去背.png" alt="LOGO" width={80} height={80}></Image>
      </div>
      <div>
        <div>關於</div>
        <div>專案</div>
        <div>技能</div>
        <div>工作經驗</div>
      </div>
    </div>
  );
};

export default navBar2;
