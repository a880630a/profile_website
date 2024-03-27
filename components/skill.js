import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const languageList = [
  {
    name: "React",
    imageUrl: "",
  },
  {
    name: "JavaScript",
    imageUrl: "",
  },
  {
    name: "Next.JS",
    imageUrl: "",
  },
  {
    name: "SCSS",
    imageUrl: "",
  },
  {
    name: "TailwindCSS",
    imageUrl: "",
  },
  {
    name: "Python",
    imageUrl: "",
  },

  {
    name: "Flask",
    imageUrl: "",
  },
  {
    name: "Ros",
    imageUrl: "",
  },
];

const toolList = [
  {
    name: "Git",
    imageUrl: "",
  },
  {
    name: "Docker",
    imageUrl: "",
  },
  {
    name: "Windows",
    imageUrl: "",
  },
  {
    name: "Linux",
    imageUrl: "",
  },
];

const skill = ({ setImgFocus, imgFocus, hoverStyle, handleMouseMove }) => {
  return (
    <div className="manual-font">
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <p className="text-[3rem] font-bold m-4 manual-font">技能 | Skill</p>
        <p className="text-[1.5rem] font-medium manual-font m-2 w-full text-center">
          語言及框架
        </p>
        <div className="w-full bg-black/30 flex flex-row  justify-center items-center flex-wrap">
          {languageList.map((value, index) => {
            return (
              <div key={index} className="m-5 ">
                <Image
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => {
                    setImgFocus(value.name);
                  }}
                  onMouseLeave={() => {
                    setImgFocus("");
                  }}
                  className="hover:rotate-180 duration-1000"
                  width={50}
                  height={50}
                  src={`/${value.name}.png`}
                  alt="image"
                ></Image>
                {imgFocus === value.name && (
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
        <p className="text-[1.5rem] font-medium manual-font m-2 mt-6 w-full text-center">
          工具及作業系統
        </p>
        <div className="w-full bg-black/30 flex flex-row  justify-center items-center flex-wrap">
          {toolList.map((value, index) => {
            return (
              <div key={index} className="m-5 ">
                <Image
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => {
                    setImgFocus(value.name);
                  }}
                  onMouseLeave={() => {
                    setImgFocus("");
                  }}
                  className="hover:rotate-180 duration-1000"
                  width={50}
                  height={50}
                  src={`/${value.name}.png`}
                  alt="image"
                ></Image>
                {imgFocus === value.name && (
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
      </motion.div>
    </div>
  );
};

export default skill;
