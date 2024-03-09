import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const experience = () => {
  return (
    <div className="manual-font ">
      <motion.div
        className="mt-20 "
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <p className="text-[3rem] font-bold m-4 manual-font">
          工作經驗 | Experience
        </p>
        <div className="bg-black/10 my-5 w-full flex flex-col p-3 ">
          <div className="w-full flex flex-row justify-evenly items-center">
            <Image
              alt="rosati"
              src="/rosati.png"
              width={100}
              height={100}
            ></Image>
            <p className="">2022/8~2024/3 </p>
          </div>
          <div className="p-5 text-start ">
            <p>
              <strong>派車系統的前端（React）開發</strong> :
              使用者可進行多條件功能派車選擇與即時更新的派車地圖，可快速的確認目前的位置與車輛狀態資訊，並結合動畫（Css）使網頁互動性增加，與RWD設計可以兼容平板與電腦。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>派車系統後端（Flask）開發</strong> :
              使用Axios建立API與前端進行串接，主要處理使用者派車請求，並規劃路線，與獲取機器人作業系統ROS（Robot
              Operation System）內的Topic資訊即時更新車輛位置與電量資訊。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>自主式移動機器人 (AMR) 開發</strong> :
              與團隊進行自主式移動機器人 (AMR)
              的開發，集中在周邊設備韌體、自動充電、軟硬體對接以及派車系統等方面。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>硬體驅動開發</strong> :
              參與了BMS、LED、多功能IO等設備的韌體設計與實現。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>自動充電</strong> :
              自動充電流程設計與改進，並透過API將功能實現。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>自動化測試</strong> :
              開發自動化測試程式，減少測試時所花費的時間。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>與外國供應商長期對接合作</strong> :
              與新加坡跨國供應商,長時間合作並與他們路線規劃演算法進行軟硬體的對接。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
            <p>
              <strong>進駐設置AMR</strong> :
              曾參與知名面板廠商AMR的設置，並獲得實際應用中的經驗。
            </p>
            <hr className="bg-black/40 border-black/40 m-5" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default experience;
