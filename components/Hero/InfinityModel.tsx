"use client";

import React, { useState, useEffect, useRef } from "react";
import { useMemo } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useGraph, useLoader, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Ground() {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-80,0]}>
        <planeGeometry args={[1000,1000]}/>
        <meshStandardMaterial color={"grey"}/>
      </mesh>
    </>
  );
}

export default function InfinityModel() {

  const { nodes, materials,scene } = useLoader(GLTFLoader, "./aashiyanopt2.glb");
  // console.log(nodes, materials, scene);

  scene.scale.set(0.55, 0.55, 0.55);
  scene.castShadow = true;
  // scene.position.copy( new THREE.Vector3( 0, -10, -20) );
  let windowWidth = window.innerWidth;
  
  // if(windowWidth > 1439) scene.position.copy( new THREE.Vector3( 0, -10, -20) );
  // if(windowWidth > 1020) scene.position.copy( new THREE.Vector3( -50, -10, -20) );
  // if(windowWidth > 370) scene.position.copy( new THREE.Vector3( -200, -10, -20) );
  if(windowWidth > 1200){scene.position.copy( new THREE.Vector3( 0, -10, -20) );
     scene.scale.set(0.55, 0.55, 0.55);
    }
  else if(windowWidth > 1020){scene.position.copy( new THREE.Vector3( 0, -30, -20) );
     scene.scale.set(0.40, 0.40, 0.40)
    }
  else if(windowWidth > 760){scene.position.copy( new THREE.Vector3( 0, -10, -10) );
     scene.scale.set(0.35, 0.35, 0.35);
    }
  else if(windowWidth > 370){scene.position.copy( new THREE.Vector3( 0, -10, -10) );
     scene.scale.set(0.25, 0.25, 0.25);
    }
  useMemo(() => {
    Object.values(nodes).forEach((obj) => {
      //@ts-ignore
      if (obj.isMesh || obj.isObject3D) {
        Object.assign(obj, { castShadow: true, receiveShadow: true });
      }
    });
  }, [nodes]);


  return (
  <>
  <primitive object={scene} 
  //@ts-ignore
  castShadow receiveShadow/>;
  <Ground 
  //@ts-ignore
  receiveShadow/>
  </>
  );

}