import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useCallback, useMemo, useRef } from "react";

const Points = () => {
     const textureImage = "/circle.png";
     const texture = useLoader(TextureLoader, textureImage);
     const bufferRef = useRef<any>();
     const count = 100; // Number of points across 1 axis
     const seperation = 3; // Distance between each point
     let t = 0; // Phase Shift
     let f = 0.002; // Drives Frequency
     let a = 2;

     const graph = useCallback(
          (x: number, z: number) => {
               return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
          },
          [t, f, a]
     );

     let positions = useMemo(() => {
          let positions = [];
          for (let xi = 0; xi < count; xi++) {
               for (let zi = 0; zi < count; zi++) {
                    let x = seperation * (xi - count / 2);
                    let z = seperation * (zi - count / 2);
                    let y = graph(x, z);
                    positions.push(x, y, z);
               }
          }
          return new Float32Array(positions);
     }, [count, seperation, graph]);

     useFrame(() => {
          t += 10;
          const positions = bufferRef?.current?.array;
          let i = 0;
          for (let xi = 0; xi < count; xi++) {
               for (let zi = 0; zi < count; zi++) {
                    let x = seperation * (xi - count / 2);
                    let z = seperation * (zi - count / 2);
                    positions[i + 1] = graph(x, z);
                    i += 3;
               }
          }

          bufferRef.current.needsUpdate = true;
     });

     return (
          <points>
               <bufferGeometry>
                    <bufferAttribute
                         ref={bufferRef}
                         attach="attributes-position"
                         array={positions}
                         itemSize={3}
                         count={positions.length / 3}
                    />
               </bufferGeometry>
               <pointsMaterial
                    map={texture}
                    color={0x00aaff}
                    size={0.3}
                    sizeAttenuation
                    transparent={false}
                    alphaTest={0.5}
                    opacity={1.0}
               />
          </points>
     );
};

export default Points;
