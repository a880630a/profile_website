import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function NotZoomWork(props) {
  const { picSrc } = props;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // 每張圖片的縮放比例
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div ref={container} className="not-container">
      <div className="not-sticky">
        <motion.div style={{ scale }} className="not-el">
          <div className="not-imageContainer">
            <Image src={`/${picSrc}`} width={500} height={500} alt="image" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
