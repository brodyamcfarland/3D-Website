import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Gltf } from "@react-three/drei";

const SpinningReact = () => {
     const ref = useRef<any>();
     useFrame(() => {
          ref.current.rotation.y += 0.01;
     });

     return (
          <Gltf
               src="/models/reactlogo.gltf"
               receiveShadow
               castShadow
               scale={25}
               position={[0, 40, -120]}
               ref={ref}
          />
     );
};

export default SpinningReact;
