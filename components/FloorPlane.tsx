import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";

const FloorPlane = () => {
     const [ref] = usePlane<any>(() => ({
          rotation: [-Math.PI / 2, 0, 0],
     }));

     return (
          <mesh ref={ref}>
               <planeGeometry args={[300, 300]} />
               <MeshReflectorMaterial
                    blur={[400, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={100}
                    depthScale={1}
                    minDepthThreshold={0.85}
                    color="#151515"
                    metalness={1}
                    roughness={1}
                    mirror={0}
               />
          </mesh>
     );
};

export default FloorPlane;
