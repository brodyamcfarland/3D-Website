import type { NextPage } from "next";
import AnimationCanvas from "../components/AnimationCanvas";
import { AiOutlineDrag } from "react-icons/ai";
import { TbHandClick } from "react-icons/tb";
import { CgMouse } from "react-icons/cg";

const Home: NextPage = () => {
     return (
          <div className="flex flex-col h-screen w-full items-center justify-center bg-black text-white">
               <div className="hidden z-10 absolute bg-white/5 bottom-10 left-10 md:flex items-center gap-4 border max-w-lg text-sm w-full p-2 backdrop-blur-lg rounded-xl border-gray-900/75 shadow-blue-500/20 shadow-lg hover:border-white/50 duration-300 select-none">
                    <CgMouse size={40} />
                    <p className="text-gray-400">Use Scroll Wheel to Zoom</p>

                    <AiOutlineDrag size={50} />
                    <p className="text-gray-400">
                         Click and Drag to Move Camera
                    </p>

                    <TbHandClick size={50} />
                    <p className="text-gray-400">
                         Hover and Click to Move Ball
                    </p>
               </div>
               <AnimationCanvas />
          </div>
     );
};

export default Home;
