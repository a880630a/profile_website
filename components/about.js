import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const About = () => {
  const [openDetail, setOpenDetail] = useState(0);

  useEffect(() => {
    console.log("openDetail", openDetail);
  }, [openDetail]);
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, x: "-20%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "tween",
          duration: 1.5,
          delay: 0.5,
          ease: "easeOut",
        }}
      >
        <p className="text-[3rem] font-bold m-4 ">關於 | About</p>
      </motion.div>
      <div className="flex flex-row justify-center items-end flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: "30%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 0.3,
            ease: "easeOut",
          }}
          className=" w-[100vw] h-[100vw] lg:w-[50vw] mb-3 lg:h-[50vw] md:m-4 text-center rounded-full bg-gradient-to-tr from-[#698dccaf] via-[#e48779] to-[#395eb683] flex justify-center items-center"
        >
          <p className=" m-4 text-[1.2rem] font-medium p-6">
            我是<strong>林品憲</strong>，今年25歲，來自台南，畢業於
            <strong>逢甲大學資訊工程學系</strong>
            ，已擁有一年的軟體工程師經驗，但未來期望能繼續在
            <strong>前端</strong>這塊領域持續精進⾃⼰！
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "30%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="text-[1rem] md:text-[1rem] leading-relaxed  font-medium w-[100vw] h-[100vw] lg:w-[25vw] lg:h-[25vw] md:m-4 text-start rounded-full bg-gradient-to-tr from-[#7fa4e5af] via-[#e48779] to-[#4c6cb683] flex justify-center items-center"
        >
          <ul>
            <li>
              <p onClick={() => setOpenDetail(1)}>
                1. 有獨立開發與團隊合作的能力
              </p>
            </li>
            <li>
              <p onClick={() => setOpenDetail(2)}>
                2. 擁有開發前/後端專案的經驗
              </p>
            </li>
            <li>
              <p onClick={() => setOpenDetail(3)}>
                3. 具有自主學習與解決問題 的能力
              </p>
            </li>
            <li>
              <p onClick={() => setOpenDetail(4)}>4. 熱於分享技術與經驗</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
