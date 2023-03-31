import { AiOutlineDrag } from "react-icons/ai";
import { CgMouse } from "react-icons/cg";
import { TbHandClick } from "react-icons/tb";
import ProjectsCanvas from "../components/ProjectsCanvas";
import { useState } from "react";
import { BarLoader } from "react-spinners";
import SkillsCanvas from "../components/SkillsCanvas";

const Skills = () => {
     const [loading, setLoading] = useState<boolean>(false); // Controls if the loading spinner will show

     return (
          <div className="flex flex-col h-screen w-full items-center justify-center bg-black text-white">
               <div className="hidden z-10 absolute bg-white/5 bottom-10 left-10 md:flex items-center gap-4 border max-w-2xl text-sm w-full p-2 backdrop-blur-lg rounded-xl border-gray-900/75 shadow-blue-500/20 shadow-lg hover:border-white/50 duration-300 select-none">
                    <CgMouse size={40} />
                    <p className="text-gray-400">Use Scroll Wheel to Zoom</p>

                    <AiOutlineDrag size={50} />
                    <p className="text-gray-400">
                         Click and Drag to Move Camera
                    </p>

                    <TbHandClick size={50} />
                    <div className="flex flex-col justify-center divide-gray-400">
                         <p className="text-gray-400">Click to Move Ball</p>
                         <p className="text-gray-400">Double-Click to Reset</p>
                    </div>
               </div>
               {loading && (
                    <div className="absolute flex flex-col z-10 gap-1 items-center justify-center uppercase tracking-widest text-xs text-[#4ec2e2] pt-32">
                         <BarLoader color="#3E9DB8" width={125} height={15} />
                         <p className="animate-pulse">Loading</p>
                    </div>
               )}
               <SkillsCanvas setLoading={setLoading} />
          </div>
     );
};

export default Skills;
