import { useBox } from "@react-three/cannon";
import { Box, Text3D, useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

// Create Links to all of the projects in the sphere component
// You will need to give all of the meshes a unique name to be called by the onCollide function
// Create Custom textures for all of the website faces

const ProjectCards = () => {
     // Physics
     const [ref, api] = useBox<any>(() => ({
          mass: 10,
          position: [-100, 40, -95],
          rotation: [0, Math.PI / 1.5, 0],
          args: [10, 80, 50],
     }));

     const [ref2, api2] = useBox<any>(() => ({
          mass: 10,
          position: [0, 40, -115],
          rotation: [0, Math.PI / 2, 0],
          args: [10, 80, 50],
     }));

     const [ref3, api3] = useBox<any>(() => ({
          mass: 10,
          position: [100, 40, -95],
          rotation: [0, Math.PI / 3, 0],
          args: [10, 80, 50],
     }));

     const [ref4, api4] = useBox<any>(() => ({
          mass: 10,
          position: [-130, 40, 0],
          rotation: [0, Math.PI, 0],
          args: [10, 80, 50],
     }));

     const [ref5, api5] = useBox<any>(() => ({
          mass: 10,
          position: [130, 40, 0],
          rotation: [0, Math.PI, 0],
          args: [10, 80, 50],
     }));

     // Textures for front face

     const textures = [
          "/textures/project_textures/coincamp.png",
          "/textures/project_textures/get.png",
          "/textures/project_textures/shipped.png",
          "/textures/project_textures/portfolio.png",
     ];

     return (
          <>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-121, 86, -75]}
                    rotation={[0, Math.PI / 6.3, 0]}
                    size={8}
               >
                    Coin Camp
                    <meshStandardMaterial />
               </Text3D>
               <Box name="coincamp" ref={ref} args={[10, 80, 50]}>
                    <meshStandardMaterial map={useTexture(textures[0])} />
               </Box>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-42, 86, -110]}
                    rotation={[0, 0, 0]}
                    size={8}
               >
                    GET Marketplace
                    <meshNormalMaterial />
               </Text3D>
               <Box name="get" ref={ref2} args={[10, 80, 50]}>
                    <meshStandardMaterial map={useTexture(textures[1])} />
               </Box>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[78, 86, -100]}
                    rotation={[0, -0.53, 0]}
                    size={8}
               >
                    Shipped
                    <meshNormalMaterial />
               </Text3D>
               <Box name="shipped" ref={ref3} args={[10, 80, 50]}>
                    <meshStandardMaterial map={useTexture(textures[2])} />
               </Box>
               <Text3D
                    font={"/3dFonts/Roboto.json"}
                    position={[-125, 86, 20]}
                    rotation={[0, Math.PI / 2, 0]}
                    size={8}
               >
                    Portfolio
                    <meshNormalMaterial />
               </Text3D>
               <Box name="portfolio" ref={ref4} args={[10, 80, 50]}>
                    <meshStandardMaterial map={useTexture(textures[3])} />
               </Box>
               <Box ref={ref5} args={[10, 80, 50]}>
                    <meshStandardMaterial color={"yellow"} />
               </Box>
          </>
     );
};

export default ProjectCards;
