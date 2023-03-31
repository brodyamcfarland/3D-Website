import { useTexture } from "@react-three/drei";
import { Texture } from "three";

interface Ball {
     position: [x: number, y: number, z: number];
     textureIndex: number;
}

const SkillsBalls = () => {
     const textures = [
          useTexture("/textures/skill_textures/typescript.png"),
          useTexture("/textures/skill_textures/typescript.png"),
          useTexture("/textures/skill_textures/typescript.png"),
          useTexture("/textures/skill_textures/typescript.png"),
          useTexture("/textures/skill_textures/typescript.png"),
     ];

     const balls: Ball[] = [
          { position: [-10, 100, 10], textureIndex: 0 },
          { position: [-40, 90, 10], textureIndex: 1 },
          { position: [10, 80, -10], textureIndex: 2 },
          { position: [30, 70, 10], textureIndex: 3 },
          { position: [10, 60, 30], textureIndex: 4 },
     ];

     return (
          <>
               {balls.map((ball, index) => (
                    <mesh key={index} position={ball.position}>
                         <sphereGeometry args={[10, 32, 32]} />
                         <meshBasicMaterial map={textures[ball.textureIndex]} />
                    </mesh>
               ))}
          </>
     );
};

export default SkillsBalls;
