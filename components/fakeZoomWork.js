import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectData } from "@/components/projectData";

export default function FakeZoomWork({ setWorkSelected, setFakeZoom }) {
  const container = useRef(null);
  const [bigWidth, setBigWidth] = useState(null);

  // 監聽螢幕寬度
  useEffect(() => {
    const handleWindowWidth = () => {
      setBigWidth(window.innerWidth >= 1680); //因大於1680px的寬度時，間距會過大
    };
    window.addEventListener("resize", handleWindowWidth);

    handleWindowWidth();

    return () => window.removeEventListener("resize", handleWindowWidth);
  });

  return (
    <div className="h-[500vh] w-[98vw]">
      <div ref={container} className="h-[103vh] ">
        <div className="sticky overflow-hidden top-0 w-[98vw] h-[100vh]">
          <motion.div className="w-full h-[100vh] top-0 absolute flex justify-center items-center">
            {projectData.map(({ imgName, projectName }, index) => {
              return (
                <div className="pos-el" key={index}>
                  <div
                    className="pos-change absolute w-[25%] h-[25vh]"
                    // style={stylePosition[index].pos}
                  >
                    <Image
                      className="object-cover hover:scale-90 duration-200 cursor-pointer"
                      onClick={() => setWorkSelected(projectName)}
                      src={`/${imgName}`}
                      // fill
                      width={`${bigWidth === true ? 500 : 300}`}
                      height={`${bigWidth === true ? 500 : 300}`}
                      alt={projectName}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <hr className=""></hr>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          type: "tween",
        }}
        onAnimationComplete={() => {
          setFakeZoom(true);
        }}
      ></motion.div>
    </div>
  );
}
