import Image from "next/image";
import Layout from "../components/layout";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [autoEnter1, setAutoEnter1] = useState(false);
  const [autoEnter2, setAutoEnter2] = useState(false);
  const [autoEnter3, setAutoEnter3] = useState(false);

  const animRef = useRef(null); // 用於參照動畫元素

  const testRef = useRef(null);

  console.log(testRef);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setAutoEnter2(true); // 當動畫結束時更新狀態
      setAutoEnter1(false);
    };

    const animElement = animRef.current;
    if (animElement) {
      // 確保animElement不是null
      animElement.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (animElement) {
        // 同樣在移除監聽時確保animElement不是null
        animElement.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [autoEnter1]); // 當autoEnter1被設定為true進入
  useEffect(() => {
    setAutoEnter1(true);
  }, []);

  return (
    <div>
      <div className="animateEnter bg-gradient-to-tr from-[#ffd90085] via-[#FF9A8B] to-[#8FD3F4] h-[500dvh] bg-fixed">
        {autoEnter1 === true && (
          <div className="flex justify-center items-center h-[100dvh]">
            <div className="obstacle lg:w-[33%]"></div>
            <div
              ref={animRef}
              className="animation1 flex lg:w-[33%] overflow-hidden justify-center items-center  box-border"
            >
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
              <div
                ref={testRef}
                className="authorAnimation text-nowrap whitespace-nowrap overflow-hidden font-semibold sm:mx-3 text-[3rem] w-[30$] inline-block "
              >
                By Xian Lin
              </div>
            </div>
            <div className="obstacle lg:w-[33%]"></div>
          </div>
        )}
        {autoEnter2 === true && (
          <>
            <div className="titleMark flex flex-col justify-center h-[90dvh] w-full items-center">
              <div className="text-gray-800 font-black text-[3rem]">
                <h1>Welcome to my</h1>
                <h1 className="ml-[3rem]">profile website</h1>
              </div>
            </div>
            <div className="bottomIntro font-semibold flex flex-row w-full justify-around text-[1rem] md:text-[2rem]">
              <div>By Xian Lin</div>
              <div className="flex flex-row">
                <p>聲音</p>
                <button className="mx-1">On</button>
                <p className="mx-1"> | </p>
                <button className="mx-1">Off</button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* {autoEnter2 === false && (
        <Layout>
          <div>這是首頁</div>
        </Layout>
      )} */}
    </div>
  );
}
