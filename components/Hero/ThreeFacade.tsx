"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "./Loader";
import ModelLoader from "./ModelLoader";

function ThreeFacade() {
  return (
    <>
      <Canvas
        camera={{ position: [300, -7, 0], fov: 60, near: 0.1, far: 2000 }} //[300, -10, 0]
        shadows
      >
        <color attach="background" args={["grey"]} />
        <ModelLoader />
      </Canvas>
    </>
  );
}

export default ThreeFacade;
