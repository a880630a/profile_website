import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectData } from "@/components/projectData";

export default function FakeZoomWork({ setWorkSelected, setFakeZoom }) {
  const container = useRef(null);

  const stylePosition = [
    {
      num: 1,
      pos: {},
    },
    {
      num: "agv",
      pos: {
        // top: "-30vh",
        top: "10vh",
        left: "38%",
      },
    },
    {
      num: "as",
      pos: {
        top: "28vh",
        left: "10%",
      },
    },
    {
      num: 4,
      pos: {
        top: "38vh",
        left: "65%",
      },
    },
    {
      num: 5,
      pos: {
        top: "27.5vh",
        left: "5%",
      },
    },
    {
      num: 6,
      pos: {
        top: "27.5vh",
        left: "22.5vw",
      },
    },
  ];

  return (
    <div className="h-[500vh] w-[98vw]">
      <div ref={container} className="h-[103vh] ">
        <div className="sticky overflow-hidden top-0 w-[98vw] h-[100vh]">
          <motion.div className="w-full h-[100vh] top-0 absolute flex justify-center items-center">
            {projectData.map(({ imgName, projectName }, index) => {
              return (
                <div className="pos-el" key={index}>
                  <div
                    className="pos-change absolute w-[25%] "
                    // style={stylePosition[index].pos}
                  >
                    <Image
                      className="object-cover hover:scale-90 duration-200 cursor-pointer"
                      onClick={() => setWorkSelected(projectName)}
                      src={`/${imgName}`}
                      width={300}
                      height={300}
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
