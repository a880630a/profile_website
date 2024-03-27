import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const homePage = () => {
  return (
    // 照片及介紹
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="flex flex-col-reverse lg:flex-row justify-evenly items-center w-full h-[100dvh] flex-nowrap "
      >
        <div className="w-[50%] text-center lg:h-[50dvh] lg:flex lg: flex-col lg:justify-center ">
          <p className="text-[3.5rem] text-center manual-font">嗨!</p>
          <p className="text-[3rem] text-nowrap text-center manual-font">
            我是<strong className="manual-font">品憲</strong>
          </p>
          <p className="text-[1.5rem] manual-font">#前端工程師</p>
          <p className="text-[1.5rem] manual-font">#軟體工程師</p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: "-20%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 2,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="w-[70%] h-auto min-h-[400px] lg:h-[50dvh] lg:w-[50%]"
        >
          <div className="relative">
            <Image
              className="sm:mx-3 absolute z-10 left-4 w-[400px] "
              src="/Xian.png"
              alt="xian"
              width={500}
              height={500}
            ></Image>
            <Image
              className="sm:mx-3 absolute w-[400px]"
              src="/bg_高畫質.png"
              alt="xian_bg"
              width={500}
              height={500}
            ></Image>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default homePage;
