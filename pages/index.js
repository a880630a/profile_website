import Image from "next/image";
import Layout from "../components/layout";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollBar from "@/components/scrollBar";
import HomePage from "@/components/homePage";
import About from "@/components/about";
import Skill from "@/components/skill";
import Experience from "@/components/experience";
import Head from "next/head";
import BackgroundMusic from "@/components/backgroundMusic";
import NotZoomWork from "@/components/notZoomWorks";
import VideoBackground from "@/components/videoBackground";
import ProjectView from "@/components/projectView";
import { projectData } from "@/components/projectData";

export default function Home() {
  const [autoEnter1, setAutoEnter1] = useState(false);
  const [autoEnter2, setAutoEnter2] = useState(false);
  const [homwView, setHomeView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [showZoomWork, setShowZoomWork] = useState(false); // 用於判斷是否顯示Zoom效果
  const [workSelected, setWorkSelected] = useState(""); // 用於判斷哪個作品在Zoom中被點擊
  // 使用一個空對象來初始化refs容器
  const workRefs = useRef({});

  // project Home 自動滾輪
  const workHomeRef = useRef(null);
  const [workHome, setWorkHome] = useState(false);

  const [imgFocus, setImgFocus] = useState(""); //查看目前哪個技能img被hover
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); //設定目前鼠標位置

  useEffect(() => {
    if (workHome === true) {
      if (workHomeRef && workHomeRef.current) {
        workHomeRef.current.scrollIntoView({ behavior: "smooth" });
        setWorkHome(false);
      }
    }
  }, [workHome]);
  useEffect(() => {
    let target = null;
    if (workSelected === "GuiTab吉他譜生成網站") {
      target = 0;
    } else if (workSelected === "AS/RS自動倉儲模擬系統") {
      target = 1;
    } else if (workSelected === "AGV派車系統") {
      target = 2;
    } else if (workSelected === "燃料稅與牌照稅計算網站") {
      target = 3;
    }
    const scrollToWork = (index) => {
      const selectedWorkRef = workRefs.current[index];
      if (selectedWorkRef && selectedWorkRef.current) {
        selectedWorkRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    };
    scrollToWork(target);
    setWorkSelected("");
  }, [workSelected]);

  // 更新鼠標位置
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // hover後的懸浮視窗style
  const hoverStyle = {
    position: "fixed",
    left: `${mousePosition.x + 30}px`, // 滑鼠位置右側30px
    top: `${mousePosition.y - 5}px`, // 滑鼠位置上方5px
    display: imgFocus !== "" ? "block" : "none", // 根據狀態顯示或隱藏
  };

  useEffect(() => {
    const handleResize = () => {
      // 當畫面寬度大於等於 768px 時顯示 ZoomWork
      setShowZoomWork(window.innerWidth >= 1024);
    };

    // 監聽畫面大小變化
    window.addEventListener("resize", handleResize);

    // 初始檢查
    handleResize();

    // 移除監聽器以避免記憶體洩漏
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setAutoEnter1(true);
  }, []);

  useEffect(() => {
    console.log("music", playing);
  }, [playing]);

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
        className={`bg-fixed  ${
          homwView === false
            ? "bg-gradient-to-tr from-[#ffd90085] via-[#FF9A8B] to-[#8FD3F4] h-[101dvh]"
            : ""
        }`}
      >
        {playing === true ? <BackgroundMusic /> : ""}
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
                transition: { ease: "easeIn", duration: 1.5 },
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
              className=" flex justify-center items-center h-[100dvh]"
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
                <div className=" authorAnimation text-nowrap whitespace-nowrap overflow-hidden font-semibold sm:mx-3 text-[3rem] w-[30$] inline-block ">
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
                  <h1 className="">Welcome to my</h1>
                  <h1 className="ml-[3rem] ">profile website</h1>
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
                <div className="">By Xian Lin</div>
                <div className="flex flex-row">
                  <p className="">聲音</p>
                  <button
                    className={`mx-1  ${
                      playing === true ? "border-black  border-b-2" : ""
                    }`}
                    onClick={() => {
                      setPlaying(true);
                    }}
                  >
                    On
                  </button>
                  <p className="mx-1 "> | </p>
                  <button
                    className={`mx-1  ${
                      playing === false ? "border-black border-b-2" : ""
                    }`}
                    onClick={() => {
                      setPlaying(false);
                    }}
                  >
                    Off
                  </button>
                </div>
              </motion.div>
            </>
          )}
          {homwView === true && (
            <div className="dynamicBg  w-full h-full p-3">
              <HomePage />
              <About />

              <motion.div
                ref={workHomeRef}
                className="nor_font"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "tween",
                  duration: 1.5,
                  delay: 0.5,
                  ease: "easeOut",
                }}
              >
                <p className=" text-[3rem] font-bold m-4 ">專案 | Project</p>

                {showZoomWork === true ? (
                  <ProjectView setWorkSelected={setWorkSelected} />
                ) : (
                  <NotZoomWork className="notZoomWorks" picSrc="GuiTab.png" />
                )}
                <div>
                  {projectData.map((project, index) => {
                    if (!workRefs.current[index]) {
                      workRefs.current[index] = React.createRef();
                    }
                    return (
                      <div className="h-[600vh] relative" key={index}>
                        <VideoBackground
                          key={index}
                          setImgFocus={setImgFocus}
                          imgFocus={imgFocus}
                          hoverStyle={hoverStyle}
                          handleMouseMove={handleMouseMove}
                          workRef={workRefs.current[index]}
                          {...project}
                        ></VideoBackground>
                      </div>
                    );
                  })}
                  <div className="sticky w-full bottom-0 right-0 flex justify-end">
                    <Image
                      className="bg-black/50 m-5 rounded-lg cursor-pointer"
                      onClick={() => {
                        setWorkHome(true);
                      }}
                      src="/arrow-up.png"
                      alt="arrow"
                      width={30}
                      height={30}
                    ></Image>
                  </div>
                </div>

                <Skill
                  setImgFocus={setImgFocus}
                  imgFocus={imgFocus}
                  hoverStyle={hoverStyle}
                  handleMouseMove={handleMouseMove}
                />
                <Experience />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
