import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { projects } from "@/components/data";

export default function ZoomWork({ setWorkSelected }) {
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
    <div ref={container} className="h-[300vh] relative">
      <div className="sticky hidden top-0 w-[98vw] h-screen">
        {projects.map(({ src, title }, index) => {
          return (
            <motion.div
              style={{ scale: scale[index] }}
              className="w-full h-full top-0 absolute flex items-center justify-center"
              key={index}
            >
              <div className="el relative w-[25%] h-[25vh]">
                <Image
                  className="object-cover "
                  onClick={() => setWorkSelected(title)}
                  src={`/${src}`}
                  fill
                  alt={title}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
