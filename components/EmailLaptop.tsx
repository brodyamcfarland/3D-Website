import { Gltf, Text3D } from "@react-three/drei";
import { useCompoundBody } from "@react-three/cannon";

const Laptop = () => {
     // When the laptop is hit make it open a gmail instance with my email in the TO: and a custom subject Line

     const [ref, api] = useCompoundBody(() => ({
          mass: 1,
          position: [0, 1, -120],
          shapes: [
               {
                    type: "Box",
                    args: [48, 4, 30],
                    position: [0, 7, 0],
               },
               {
                    type: "Box",
                    args: [48, 31, 6],
                    position: [0, 19, -20],
               },
          ],
     }));

     return (
          <>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-18, 49, -145]}
                    size={10}
               >
                    Email
                    <meshNormalMaterial />
               </Text3D>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-44, 40, -145]}
                    size={5}
               >
                    brodyamcfarland@gmail.com
                    <meshNormalMaterial />
               </Text3D>
               <Gltf
                    src="/models/laptop.gltf"
                    receiveShadow
                    castShadow
                    scale={14}
                    position={[0, 5, -120]}
                    ref={ref}
                    name="email_laptop"
               />
          </>
     );
};

export default Laptop;
