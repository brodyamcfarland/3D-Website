import { Canvas } from "@react-three/fiber";
import { Dispatch, SetStateAction, Suspense, useRef } from "react";
import Points from "./Points";
import { OrbitControls, Stars, Stats } from "@react-three/drei";
import Sphere from "./Sphere";
import {
     Selection,
     EffectComposer,
     Outline,
} from "@react-three/postprocessing";
import { Physics, Debug } from "@react-three/cannon";
import FloorPlane from "./FloorPlane";
import WallPlane from "./WallPlane";
import Door from "./Door";
import Phone from "./Phone";
import Bookshelf from "./Bookshelf";
import Laptop from "./Laptop";

interface Props {
     setLoading: Dispatch<SetStateAction<boolean>>;
}

const HomeCanvas = ({ setLoading }: Props) => {
     return (
          <>
               <Canvas camera={{ position: [50, 15, 90], fov: 75 }}>
                    <directionalLight
                         args={["#ffffff", 1]}
                         position={[0, 100, -10]}
                    />
                    <pointLight position={[100, 100, 0]} />
                    <Suspense fallback={null}>
                         <Points />
                    </Suspense>
                    <Physics gravity={[0, -15, 0]}>
                         <FloorPlane />
                         <WallPlane
                              position={[0, 25, -150]}
                              rotation={[0, 0, 0]}
                              height={50}
                              width={300}
                         />
                         <WallPlane
                              position={[150, 25, 0]}
                              rotation={[0, -Math.PI / 2, 0]}
                              height={50}
                              width={300}
                         />
                         <WallPlane
                              position={[-150, 25, 0]}
                              rotation={[0, Math.PI / 2, 0]}
                              height={50}
                              width={300}
                         />
                         <WallPlane
                              position={[0, 25, 150]}
                              rotation={[0, Math.PI, 0]}
                              height={50}
                              width={300}
                         />
                         <Laptop />
                         <Bookshelf />
                         <Phone />
                         <Door />
                         <Selection>
                              <EffectComposer
                                   multisampling={8}
                                   autoClear={false}
                              >
                                   <Outline
                                        blur
                                        visibleEdgeColor={0x09991}
                                        edgeStrength={100}
                                        width={10000}
                                   />
                              </EffectComposer>
                              <Sphere setLoading={setLoading} />
                         </Selection>
                         <OrbitControls
                              maxPolarAngle={Math.PI / 2}
                              rotateSpeed={0.5}
                              minDistance={50}
                         />
                         <Stats />
                         <Stars fade count={1000} speed={1.4} saturation={1} />
                    </Physics>
               </Canvas>
          </>
     );
};

export default HomeCanvas;
