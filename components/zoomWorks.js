import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { projects } from "@/components/data";

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
    <div ref={container} className="container">
      <div className="sticky">
        {projects.map(({ src, title }, index) => {
          return (
            <motion.div
              style={{ scale: scale[index] }}
              className="el"
              key={index}
            >
              <div className="imageContainer">
                <Image src={`/${src}`} fill alt={title} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
