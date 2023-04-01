import { useSphere } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { Texture } from "three";

interface BallProps {
     position: [x: number, y: number, z: number];
     texture: Texture;
}

const Ball = ({ position, texture }: BallProps) => {
     const [physicsRef, api] = useSphere<any>(() => ({
          args: [15],
          mass: 10,
          position,
          angularDamping: 1,
     }));

     return (
          <mesh ref={physicsRef}>
               <sphereGeometry args={[10, 32, 32]} />
               <meshBasicMaterial map={texture} />
          </mesh>
     );
};

const SkillsBalls = () => {
     const textures = [
          useTexture("/textures/skill_textures/typescript.png"),
          useTexture("/textures/skill_textures/ethereum.png"),
          useTexture("/textures/skill_textures/git.jpg"),
          useTexture("/textures/skill_textures/javascript.png"),
          useTexture("/textures/skill_textures/solidity.png"),
          useTexture("/textures/skill_textures/tailwind.png"),
          useTexture("/textures/skill_textures/DREI.jpg"),
          useTexture("/textures/skill_textures/node.png"),
          useTexture("/textures/skill_textures/firebase.jpg"),
          useTexture("/textures/skill_textures/postgres.png"),
          useTexture("/textures/skill_textures/prisma.png"),
     ];

     const balls: BallProps[] = [
          { position: [-10, 100, 10], texture: textures[0] },
          { position: [-40, 90, 10], texture: textures[1] },
          { position: [10, 80, -10], texture: textures[2] },
          { position: [30, 70, 10], texture: textures[3] },
          { position: [10, 60, 30], texture: textures[4] },
          { position: [30, 80, 60], texture: textures[5] },
          { position: [30, 100, -20], texture: textures[6] },
          { position: [30, 110, 40], texture: textures[7] },
          { position: [10, 90, 40], texture: textures[8] },
          { position: [10, 90, -30], texture: textures[9] },
          { position: [10, 110, -50], texture: textures[10] },
     ];

     return (
          <>
               {balls.map((ball, index) => (
                    <Ball
                         key={index}
                         position={ball.position}
                         texture={ball.texture}
                    />
               ))}
          </>
     );
};

export default SkillsBalls;
