import { useSphere } from "@react-three/cannon";
import { Text3D, useTexture } from "@react-three/drei";

const Twitter = () => {
     const [physicsRef, api] = useSphere<any>(() => ({
          args: [20],
          mass: 10,
          position: [-110, 20, -100],
          angularDamping: 1,
          rotation: [0, -0.8, 0],
     }));

     const texture = useTexture("/textures/contact_textures/twitter.png");

     return (
          <>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-123, 47, -80]}
                    size={10}
                    rotation={[0, 0.8, 0]}
               >
                    Twitter
                    <meshNormalMaterial />
               </Text3D>
               <mesh ref={physicsRef} name="twitter">
                    <sphereGeometry args={[20, 32, 32]} />
                    <meshBasicMaterial map={texture} />
               </mesh>
          </>
     );
};

export default Twitter;
