import Image from "next/image";
import Layout from "../components/layout";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollBar from "@/components/scrollBar";
import HomePage from "@/components/homePage";
import About from "@/components/about";
import Card from "@/components/card";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Head from "next/head";

import { projects } from "@/components/data";

export default function Home() {
  const [autoEnter1, setAutoEnter1] = useState(false);
  const [autoEnter2, setAutoEnter2] = useState(false);
  const [homwView, setHomeView] = useState(false);

  useEffect(() => {
    setAutoEnter1(true);
  }, []);

  useEffect(() => {
    // 這個函數用於處理滾動事件
    if (autoEnter2 === true) {
      const handleScroll = () => {
        setHomeView(true);
        // 設置延時，避免滾動時過於頻繁地調用scrollToTarget
      };

      // 添加事件監聽器
      window.addEventListener("scroll", handleScroll);

      return () => {
        // 移除事件監聽器
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [autoEnter2]);

  return (
    <>
      <Head>
        <title>Xian Lin website</title>
      </Head>
      <div
        className={`bg-fixed ${
          homwView === false
            ? "bg-gradient-to-tr from-[#ffd90085] via-[#FF9A8B] to-[#8FD3F4] h-[101dvh]"
            : ""
        }`}
      >
        <AnimatePresence mode="wait">
          {autoEnter1 === true && (
            <motion.div
              key="modal"
              initial={{
                opacity: 0,
                paddingRight: "40%",
                paddingLeft: "40%",
              }}
              animate={{
                opacity: 1,
                paddingRight: 0,
                paddingLeft: 0,
              }}
              exit={{
                opacity: 0,
                paddingRight: "40%",
                paddingLeft: "40%",
                transition: { ease: "easeIn", duration: 3 },
              }}
              transition={{
                type: "tween",
                duration: 2,
                delay: 0.3,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setAutoEnter2(true); // 當動畫結束時更新狀態
                setAutoEnter1(false);
              }}
              className="manual-font flex justify-center items-center h-[100dvh]"
            >
              <div className="obstacle lg:w-[33%]"></div>
              <div className="flex lg:w-[33%] overflow-hidden justify-center items-center box-border">
                <Image
                  className="sm:mx-3 inline-block overflow-hidden"
                  src="/arrow-next.png"
                  alt="arrow"
                  width={50}
                  height={50}
                ></Image>
                <Image
                  className="sm:mx-3 inline-block overflow-hidden"
                  src="/line.png"
                  alt="line"
                  width={50}
                  height={50}
                ></Image>
                <div className="manual-font authorAnimation text-nowrap whitespace-nowrap overflow-hidden font-semibold sm:mx-3 text-[3rem] w-[30$] inline-block ">
                  By Xian Lin
                </div>
              </div>

              <div className="obstacle lg:w-[33%]"></div>
            </motion.div>
          )}

          {autoEnter2 === true && homwView === false && (
            <>
              <motion.div
                key="modal2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "tween",
                  duration: 1,
                  delay: 0.1,
                  ease: "easeInOut",
                }}
                className=" flex flex-row justify-center h-[90dvh] items-center"
              >
                <div className="text-gray-800 font-black text-[3rem]">
                  <h1 className="manual-font">Welcome to my</h1>
                  <h1 className="ml-[3rem] manual-font">profile website</h1>
                </div>
                <ScrollBar />
              </motion.div>

              <motion.div
                key="modal3"
                initial={{ opacity: 0, y: "-10%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "tween",
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className=" font-semibold flex flex-row justify-around text-[1rem] md:text-[2rem]"
              >
                <div className="manual-font">By Xian Lin</div>
                <div className="flex flex-row">
                  <p className="manual-font">聲音</p>
                  <button className="mx-1 manual-font">On</button>
                  <p className="mx-1 manual-font"> | </p>
                  <button className="mx-1 manual-font">Off</button>
                </div>
              </motion.div>
            </>
          )}
          {homwView === true && (
            <div className="dynamicBg h-[1100dvh] w-full">
              <HomePage />
              <About />

              <motion.div
                className="nor_font"
                initial={{ opacity: 0, x: "-20%" }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "tween",
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <p className="manual-font text-[3rem] font-bold m-4 ">
                  專案 | Project
                </p>

                {projects.map((project, i) => {
                  return <Card key={`p_${i}`} {...project} i={i} />;
                })}
                <Skill />
                <Experience />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
