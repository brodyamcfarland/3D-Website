import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Points from "./Points";
import { Gltf, OrbitControls, Stars, Stats, Text3D } from "@react-three/drei";
import Sphere from "./Sphere";
import {
     Selection,
     EffectComposer,
     Outline,
} from "@react-three/postprocessing";
import { Physics } from "@react-three/cannon";
import FloorPlane from "./FloorPlane";
import WallPlane from "./WallPlane";

const AnimationCanvas = () => {
     return (
          <>
               <Canvas camera={{ position: [50, 15, 90], fov: 75 }}>
                    <directionalLight
                         args={["#ffffff", 1]}
                         position={[0, 100, -10]}
                    />
                    <pointLight position={[100, 100, 0]} />
                    <Physics>
                         <Suspense fallback={null}>
                              <Points />
                         </Suspense>
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
                         <Text3D
                              font={"/3dFonts/Roboto.json"}
                              position={[-26, 34, -145]}
                              size={10}
                         >
                              Projects
                              <meshNormalMaterial />
                         </Text3D>
                         <Gltf
                              src="/models/laptop.gltf"
                              receiveShadow
                              castShadow
                              position={[0, -5, -122]}
                              scale={14}
                         />
                         <Text3D
                              font={"/3dFonts/Roboto.json"}
                              position={[-143, 43, 18]}
                              rotation={[0, Math.PI / 2, 0]}
                              size={10}
                         >
                              Skills
                              <meshNormalMaterial />
                         </Text3D>
                         <Gltf
                              src="/models/bookshelf.gltf"
                              receiveShadow
                              castShadow
                              position={[-143, 0, 0]}
                              scale={21}
                              rotation={[0, Math.PI / 2, 0]}
                         />
                         <Gltf
                              src="/models/keyboard.gltf"
                              receiveShadow
                              castShadow
                              position={[-137, 0, 0]}
                              scale={12}
                              rotation={[0, Math.PI / 2, 0]}
                         />
                         <Text3D
                              font={"/3dFonts/Roboto.json"}
                              position={[140, 50, -23]}
                              rotation={[0, -Math.PI / 2, 0]}
                              size={10}
                         >
                              Contact
                              <meshNormalMaterial />
                         </Text3D>
                         <Gltf
                              src="/models/phone.gltf"
                              receiveShadow
                              castShadow
                              position={[140, 6, 0]}
                              scale={14}
                              rotation={[0, 4.4, 0]}
                         />
                         <Text3D
                              font={"/3dFonts/Roboto.json"}
                              position={[33, 50, 147]}
                              rotation={[0, -Math.PI, 0]}
                              size={8}
                         >
                              Return to 2-D
                              <meshNormalMaterial />
                         </Text3D>
                         <Gltf
                              src="/models/door.gltf"
                              receiveShadow
                              castShadow
                              position={[0, 0.5, 147]}
                              rotation={[0, -Math.PI, 0]}
                              scale={18}
                         />
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
                              <Sphere />
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

export default AnimationCanvas;
