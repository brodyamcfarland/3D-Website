import { useSphere } from "@react-three/cannon";
import { Text3D, useTexture } from "@react-three/drei";

const LinkedIn = () => {
     const [physicsRef, api] = useSphere<any>(() => ({
          args: [20],
          mass: 10,
          position: [-110, 20, 0],
          angularDamping: 1,
          rotation: [0, 0, 0],
     }));

     const texture = useTexture("/textures/contact_textures/linkedin.png");

     return (
          <>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-110, 47, 27]}
                    size={10}
                    rotation={[0, Math.PI / 2, 0]}
               >
                    LinkedIn
                    <meshNormalMaterial />
               </Text3D>
               <mesh ref={physicsRef} name="linkedin">
                    <sphereGeometry args={[20, 32, 32]} />
                    <meshBasicMaterial map={texture} />
               </mesh>
          </>
     );
};

export default LinkedIn;
