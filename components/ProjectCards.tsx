import { useBox } from "@react-three/cannon";
import { Box } from "@react-three/drei";

const ProjectCards = () => {
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

     return (
          <>
               <Box ref={ref} args={[10, 80, 50]}>
                    <meshStandardMaterial color={"hotpink"} />
               </Box>
               <Box ref={ref2} args={[10, 80, 50]}>
                    <meshStandardMaterial color={"white"} />
               </Box>
               <Box ref={ref3} args={[10, 80, 50]}>
                    <meshStandardMaterial color={"blue"} />
               </Box>
               <Box ref={ref4} args={[10, 80, 50]}>
                    <meshStandardMaterial color={"red"} />
               </Box>
               <Box ref={ref5} args={[10, 80, 50]}>
                    <meshStandardMaterial color={"yellow"} />
               </Box>
          </>
     );
};

export default ProjectCards;
