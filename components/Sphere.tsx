import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { LinearEncoding, Vector3 } from "three";
import { Select } from "@react-three/postprocessing";
import { useSphere } from "@react-three/cannon";
import { Mesh } from "three";

const Sphere = () => {
     const [hoverEffect, setHoverEffect] = useState<boolean>(false);
     const [physicsRef, api] = useSphere<any>(
          () => ({
               args: [0.75],
               mass: 10,
               position: [0, 0, 0],
               angularVelocity: [0, 0, 0],
               angularDamping: 1,
               onCollide: (e) => {
                    if (e.body.name.startsWith("wall")) {
                         console.log("collided");
                         api.position.set(0, 0, 0);
                         api.velocity.set(0, 0, 0);
                    }
               },
          }),
          useRef()
     );

     const sphereTextures = useTexture({
          map: "/textures/slab_tiles_diff_4k.jpg",
          displacementMap: "/textures/slab_tiles_disp_4k.jpg",
          aoMap: "/textures/slab_tiles_arm_4k.jpg",
          roughnessMap: "/textures/slab_tiles_arm_4k.jpg",
          metalnessMap: "/textures/slab_tiles_arm_4k.jpg",
          normalMap: "/textures/slab_tiles_nor_gl_4k.jpg",
     });

     const meshRef = useRef<Mesh>(null);

     const { gl, camera } = useThree();

     //Need to Fix this
     const pushSphere = (e: any) => {
          const direction = new Vector3();
          const worldPoint = new Vector3();
          camera.getWorldDirection(direction);
          worldPoint
               .copy(direction)
               .multiplyScalar(10)
               .add(physicsRef.current.position);
          const forceDirection = worldPoint.sub(e.point).normalize();
          const forceMagnitude = 50;
          const force = new Vector3(
               forceDirection.x * forceMagnitude,
               forceDirection.y * forceMagnitude,
               forceDirection.z * forceMagnitude
          );
          const velocity = direction.clone().multiplyScalar(400);
          api.velocity.set(velocity.x, velocity.y, velocity.z);
          api.applyForce(
               force.toArray(),
               physicsRef.current.position.toArray()
          );
     };

     useFrame(() => {
          if (!hoverEffect && meshRef.current) {
               meshRef.current.rotation.x += 0.005;
               meshRef.current.rotation.y += 0.005;
               gl.domElement.style.cursor = "default";
          }
     });

     useFrame(() => {
          if (hoverEffect && meshRef.current) {
               meshRef.current.rotation.x += 0.001;
               meshRef.current.rotation.y += 0.001;
               gl.domElement.style.cursor = "pointer";
          }
     });

     return (
          <Select enabled={hoverEffect}>
               <mesh
                    ref={physicsRef}
                    castShadow
                    onPointerDown={(e) => pushSphere(e)}
               >
                    <mesh
                         visible
                         ref={meshRef}
                         position={[0, 19.5, 0]}
                         onPointerOver={() => {
                              setHoverEffect(true);
                         }}
                         onPointerLeave={() => {
                              setHoverEffect(false);
                         }}
                    >
                         <sphereGeometry
                              attach="geometry"
                              args={[20, 32, 32]}
                         />
                         <meshStandardMaterial
                              {...sphereTextures}
                              normalMap-encoding={LinearEncoding}
                         />
                    </mesh>
               </mesh>
          </Select>
     );
};

export default Sphere;
