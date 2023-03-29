import { useCompoundBody } from "@react-three/cannon";
import { Gltf, Text3D } from "@react-three/drei";

const Door = () => {
     const [ref, api] = useCompoundBody(() => ({
          mass: 1,
          position: [0, 5, 147],
          rotation: [0, -Math.PI, 0], // add the difference between Gltf rotation and Y-axis,
          shapes: [
               {
                    type: "Box",
                    args: [25, 47, 5],
                    position: [0, 24, 0], // offset the box shape so that it sits at the bottom of the laptop model
               },
          ],
     }));
     return (
          <>
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
                    ref={ref}
               />
          </>
     );
};

export default Door;
