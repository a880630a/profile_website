import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const VideoBackground = ({
  setImgFocus,
  imgFocus,
  handleMouseMove,
  theme,
  projectName,
  projectIntro,
  projectDescription,
  backgroundVideoName,
  url,
  imgName,
  requireSkill,
  projectSkill,
  hoverStyle,
}) => {
  const [themeDark, setThemeDark] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      setThemeDark(true);
    }
  }, [theme]);
  return (
    <>
      <video
        className="w-[100vw] h-[100vh] object-cover sticky top-0 blur"
        autoPlay
        muted
        loop
        playsinline
      >
        <source src={`/videos/${backgroundVideoName}.mp4`} type="video/mp4" />
      </video>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1.8,
          delay: 0.5,
          ease: "easeOut",
        }}
        className={`absolute w-[100%] flex flex-col justify-center items-center ${
          themeDark === true ? "text-black" : "text-blue-50"
        }`}
      >
        <div className="w-full h-[100dvh] top-[50vh] flex flex-col justify-center items-center">
          <h2 className="manual-font text-[3rem] font-bold m-4 ">
            {projectName}
          </h2>
          <hr className="bg-gradient-to-r from-white to-gray-500 h-[2px] w-[50%] border-none" />
          <p className="m-2">{projectIntro}</p>
        </div>
        <div className="w-full h-[100dvh] flex flex-row justify-evenly items-center flex-wrap">
          <div className="mx-2 w-[100%] lg:w-[48%] h-[45%] object-cover overflow-hidden relative flex justify-center items-center">
            <Image
              src={`/${imgName}`}
              alt="image"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="mx-2 w-[100%] lg:w-[48%] h-[45%] flex flex-col justify-center items-start">
            <p>{projectDescription}</p>
            <a
              className="m-2 text-blue-400 underline hover:text-blue-200"
              href={url}
              target="_blank"
            >
              {" "}
              了解更多
            </a>
          </div>
        </div>
        <div className="w-full h-[200dvh] flex flex-col justify-evenly items-center flex-wrap">
          <h2 className="manual-font text-[3rem] font-bold m-4 ">技能概述</h2>
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center flex-wrap">
            <h2 className="manual-font text-[3rem] font-normal m-4 ">前端</h2>
            <div className="md:w-1/2">
              {requireSkill["前端"].map((value, index) => {
                return (
                  <>
                    <p
                      className={`m-2 border-b-[0.5px] md:border-none ${
                        themeDark === true ? "border-black" : "border-blue-50"
                      }`}
                      key={index}
                    >
                      {value}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center flex-wrap">
            <h2 className="manual-font text-[3rem] font-normal m-4 ">後端</h2>
            <div className="md:w-1/2">
              {requireSkill["後端"].map((value, index) => {
                return (
                  <>
                    <p
                      className={`m-2 border-b-[0.5px] md:border-none ${
                        themeDark === true ? "border-black" : "border-blue-50"
                      }`}
                      key={index}
                    >
                      {value}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-evenly items-center flex-wrap">
            <h2 className="manual-font text-[3rem] font-normal m-4 ">工具</h2>
            <div className="md:w-1/2">
              {requireSkill["工具"].map((value, index) => {
                return (
                  <>
                    <p
                      className={`m-2 border-b-[0.5px] md:border-none ${
                        themeDark === true ? "border-black" : "border-blue-50"
                      }`}
                      key={index}
                    >
                      {value}
                    </p>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full h-[100dvh] flex flex-row justify-evenly items-center flex-wrap">
          <h2 className="manual-font text-[3rem] font-bold m-4 ">
            專案技能與工具
          </h2>
          <div className="flex flex-row  justify-center items-center flex-wrap">
            {projectSkill.map((value, index) => {
              return (
                <div key={index} className="m-5 ">
                  <Image
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => {
                      setImgFocus(value);
                    }}
                    onMouseLeave={() => {
                      setImgFocus("");
                    }}
                    className="hover:rotate-180 duration-1000"
                    width={50}
                    height={50}
                    src={`/${value}.png`}
                    alt="image"
                  ></Image>
                  {imgFocus === value && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "tween",
                        duration: 0.5,
                        ease: "easeIn",
                      }}
                      className="bg-black/30 text-blue-50 z-50 px-1"
                      style={hoverStyle}
                    >
                      {imgFocus}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default VideoBackground;
