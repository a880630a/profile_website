import React, { useState } from "react";
import NavBar2 from "@/components/navBar2";
import VideoBackground from "@/components/videoBackground";
import Image from "next/image";
import { motion } from "framer-motion";

const test = () => {
  const [imgFocus, setImgFocus] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const hoverStyle = {
    position: "fixed",
    left: `${mousePosition.x + 30}px`, // 滑鼠位置右側10px
    top: `${mousePosition.y - 5}px`, // 滑鼠位置下方10px
    display: imgFocus !== "" ? "block" : "none", // 根據狀態顯示或隱藏
  };

  return (
    <div className="w-[100%] h-[100vh] bg-violet-800">
      {/* {imgFocus === "Docker" ? <div>1</div> : <div></div>} */}
      <Image
        onMouseEnter={() => {
          setImgFocus("Docker");
        }}
        onMouseLeave={() => {
          setImgFocus("");
        }}
        className="hover:rotate-180 duration-1000"
        src="/Docker.png"
        alt="image"
        width={50}
        height={50}
      ></Image>
      {imgFocus !== "" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            duration: 0.5,
            ease: "easeIn",
          }}
          className="bg-black/30 text-blue-50 m-2 px-1"
          style={hoverStyle}
        >
          {imgFocus}
        </motion.div>
      )}
    </div>
  );
};

export default test;
