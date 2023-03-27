import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import React, { useRef } from "react";
import THREE, { DoubleSide } from "three";

interface WallPlaneProps {
     position: [number, number, number];
     rotation?: [number, number, number];
     width: number;
     height: number;
}

const WallPlane = ({ position, rotation, width, height }: WallPlaneProps) => {
     const [ref] = usePlane<any>(() => ({
          rotation,
          position,
     }));

     return (
          <mesh ref={ref} name="wall">
               <planeGeometry args={[width, height]} />
               <MeshReflectorMaterial
                    blur={[400, 100]}
                    resolution={1024}
                    mixBlur={0.97}
                    mixStrength={70}
                    depthScale={1}
                    minDepthThreshold={0.85}
                    color="#151515"
                    metalness={0}
                    roughness={1}
                    mirror={0}
               />
          </mesh>
     );
};

export default WallPlane;
