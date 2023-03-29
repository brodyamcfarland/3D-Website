import { Gltf, Text3D } from "@react-three/drei";
import { useCompoundBody } from "@react-three/cannon";

const Laptop = () => {
     const [ref, api] = useCompoundBody(() => ({
          mass: 1,
          position: [0, 1, -120],
          shapes: [
               {
                    type: "Box",
                    args: [48, 4, 30],
                    position: [0, 7, 0], // offset the box shape so that it sits at the bottom of the laptop model
               },
               {
                    type: "Box",
                    args: [48, 31, 6],
                    position: [0, 19, -20], // position and size of the first box shape
               },
          ],
     }));

     return (
          <>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-26, 40, -145]}
                    size={10}
               >
                    Projects
                    <meshNormalMaterial />
               </Text3D>

               <Gltf
                    src="/models/laptop.gltf"
                    receiveShadow
                    castShadow
                    scale={14}
                    position={[0, 5, -120]}
                    ref={ref}
                    name="laptop"
               />
          </>
     );
};

export default Laptop;
