import React from "react";
import Image from "next/image";
import { projectData } from "@/components/projectData";

const projectView = ({ setWorkSelected }) => {
  return (
    <div className=" w-full">
      <div className="flex flex-row  w-full flex-wrap justify-evenly items-center mb-8">
        {projectData.map(({ projectName, imgName }, key) => {
          return (
            <div
              key={key}
              className="flex flex-col justify-center items-center m-2"
            >
              <p>{projectName}</p>
              <Image
                className="object-cover h-[300px]  border-2 p-1 rounded-lg hover:scale-90 duration-200 cursor-pointer"
                onClick={() => setWorkSelected(projectName)}
                src={`/${imgName}`}
                width={550}
                height={300}
                alt={projectName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default projectView;
