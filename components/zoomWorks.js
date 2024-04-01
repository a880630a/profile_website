import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { projectData } from "@/components/projectData";

export default function ZoomWork() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
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
                  width={300}
                  height={300}
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
