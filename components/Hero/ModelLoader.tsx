"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Stats,
  useHelper,
  Environment,
} from "@react-three/drei";
import { Sky } from "@react-three/drei";
import InfinityModel from "./InfinityModel";
import Loader from "./Loader";
import { DirectionalLightHelper } from "three";

function ModelLoader() {

  return (
    <>
        <ambientLight intensity={0.3} />
        {/* <Environment files='./sunrise_1k.exr' background  /> */}
        <directionalLight
          color="white"
          intensity={0.5}
          // ref={lightRef}
          // target={target}
          position={[-500, 300, 0]}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-radius={10}
          shadow-bias={-0.0001}
        />
        <directionalLight
          color="white"
          intensity={0.5}
          // ref={lightRef2}
          // target={target}
          position={[500, 500, 500]}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-radius={10}
          shadow-bias={-0.0001}
        />
        <directionalLight
          color="white"
          intensity={1}
          // ref={lightRef3}
          // target={target}
          position={[500, 300, -500]}
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
          shadow-radius={10}
          shadow-bias={-0.0001}
        />

        {/* <axesHelper args={[500]} /> */}
        <InfinityModel />
        {/* <OrbitControls /> */}
        <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={(Math.PI * 5) / 10}
            maxPolarAngle={(Math.PI * 5) / 10}
            minAzimuthAngle = {Math.PI / 5}
            maxAzimuthAngle = {(3 * Math.PI)/4}
          />

        {/* <Sky
          distance={4500}
          sunPosition={[sunset.x, sunset.y, sunset.z]}
          inclination={sunset.inclination}
          azimuth={sunset.azimuth}
          mieCoefficient={sunset.mieCoefficient}
          mieDirectionalG={sunset.mieDirectionalG}
          rayleigh={sunset.rayleigh}
          turbidity={sunset.turbidity}
        /> */}
        <Sky
          distance={4500}
          sunPosition={[-8.5, 0.08, -8]}
          inclination={-0.37}
          azimuth={93.5}
          mieCoefficient={0}
          mieDirectionalG={0.17}
          rayleigh={3.19}
          turbidity={37.41}
        />
    </>
  );
}

export default ModelLoader;
