import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { LinearEncoding, Vector3 } from "three";
import { Select } from "@react-three/postprocessing";
import { useSphere } from "@react-three/cannon";
import { Mesh } from "three";
import { useRouter } from "next/router";

interface Props {
     setLoading?: Dispatch<SetStateAction<boolean>>;
}

const Sphere = ({ setLoading }: Props) => {
     const [hoverEffect, setHoverEffect] = useState<boolean>(false);
     const router = useRouter();

     const [physicsRef, api] = useSphere<any>(() => ({
          args: [20],
          mass: 30,
          position: [0, 20, 0],
          angularDamping: 1,
          onCollide: (e) => {
               if (e.body.name.startsWith("laptop")) {
                    if (setLoading) {
                         setLoading(true);
                    }
                    api.position.set(0, 20, 0);
                    api.velocity.set(0, 0, 0);
                    setTimeout(() => {
                         router.push("/projects");
                    }, 3000);
               }
               if (e.body.name.startsWith("phone")) {
                    if (setLoading) {
                         setLoading(true);
                    }
                    api.position.set(0, 20, 0);
                    api.velocity.set(0, 0, 0);
                    setTimeout(() => {
                         router.push("/contact");
                    }, 3000);
               }
               if (e.body.name.startsWith("bookshelf")) {
                    if (setLoading) {
                         setLoading(true);
                    }
                    api.position.set(0, 20, 0);
                    api.velocity.set(0, 0, 0);
                    setTimeout(() => {
                         router.push("/skills");
                    }, 3000);
               }
               if (e.body.name.startsWith("door")) {
                    if (setLoading) {
                         setLoading(true);
                    }
                    api.position.set(0, 20, 0);
                    api.velocity.set(0, 0, 0);
                    setTimeout(() => {
                         router.push("https://website-v3-orcin.vercel.app/");
                    }, 3000);
               }
               if (e.body.name.startsWith("home_door")) {
                    if (setLoading) {
                         setLoading(true);
                    }
                    api.position.set(0, 20, 0);
                    api.velocity.set(0, 0, 0);
                    setTimeout(() => {
                         router.push("/");
                    }, 3000);
               }
          },
     }));

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

     const resetSphere = (e: any) => {
          api.position.set(0, 20, 0);
          api.velocity.set(0, 0, 0);
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
                    name="ball"
                    onDoubleClick={(e) => resetSphere(e)}
               >
                    <mesh
                         visible
                         ref={meshRef}
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
