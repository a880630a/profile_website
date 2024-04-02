import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { projectData } from "@/components/projectData";

export default function ZoomWork() {
  const container = useRef(null);
  const [bigWidth, setBigWidth] = useState(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // 監聽螢幕寬度
  useEffect(() => {
    const handleWindowWidth = () => {
      setBigWidth(window.innerWidth >= 1680); //因大於1680px的寬度時，間距會過大
    };
    window.addEventListener("resize", handleWindowWidth);

    handleWindowWidth();

    return () => window.removeEventListener("resize", handleWindowWidth);
  });

  // 每張圖片的縮放比例
  const scale = [
    useTransform(scrollYProgress, [0, 1], [1, 3]),
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
    useTransform(scrollYProgress, [0, 1], [1, 6]),
  ];

  return (
    <div ref={container} className="container1">
      <div className="sticky1">
        {projectData.map(({ imgName, projectName }, index) => {
          return (
            <motion.div
              style={{ scale: scale[index] }}
              className="el"
              key={index}
            >
              <div className="imageContainer">
                <Image
                  src={`/${imgName}`}
                  // fill
                  width={`${bigWidth === true ? 500 : 300}`}
                  height={`${bigWidth === true ? 500 : 300}`}
                  alt={projectName}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
