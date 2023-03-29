import { useCompoundBody } from "@react-three/cannon";
import { Gltf, Text3D } from "@react-three/drei";

const Phone = () => {
     const [ref, api] = useCompoundBody(() => ({
          mass: 5,
          position: [140, 30, 0],
          rotation: [0, -Math.PI / 2, 0], // add the difference between Gltf rotation and Y-axis,
          shapes: [
               {
                    type: "Box",
                    args: [22, 46, 3],
                    position: [2, 19, 0], // offset the box shape so that it sits at the bottom of the laptop model
               },
          ],
     }));
     return (
          <>
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
                    scale={14}
                    rotation={[0, 4.4, 0]}
                    ref={ref}
               />
          </>
     );
};

export default Phone;
