import { useCompoundBody } from "@react-three/cannon";
import { Gltf, Text3D } from "@react-three/drei";

const Bookshelf = () => {
     const [ref, api] = useCompoundBody<any>(() => ({
          mass: 1,
          position: [0, 4, 0],
          fixedRotation: true,
          shapes: [
               {
                    type: "Box",
                    args: [10, 45, 40],
                    position: [-143, 23, 0], // offset the box shape so that it sits at the bottom of the laptop model
               },
               {
                    type: "Box",
                    args: [27, 2, 50],
                    position: [-125, 2, 0], // position and size of the first box shape
               },
          ],
          onCollide: (e) => {
               if (e.body.name.startsWith("ball")) {
                    // I want the laptop to fly up a bit when hit
               }
          },
     }));
     return (
          <>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-143, 43, 18]}
                    rotation={[0, Math.PI / 2, 0]}
                    size={10}
               >
                    Skills
                    <meshNormalMaterial />
               </Text3D>
               <group ref={ref}>
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
               </group>
          </>
     );
};

export default Bookshelf;
