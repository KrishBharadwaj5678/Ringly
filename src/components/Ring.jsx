import React from "react";
import { useControls } from "leva";
import { MeshRefractionMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Ring = ({ ringColor, diamondColor, env, ...props }) => {
  let { nodes, materials } = useGLTF("/ring.glb");
  return (
    <group {...props} dispose={null}>
      {/* Ring Frame */}
      <mesh
        geometry={nodes.mesh_0.geometry}
        material={
          materials["/white pe d-2-50d22ca8-70fb-4d34-982b-7ca0f3dddf44"]
        }
      >
        {/* Physically-based material for metals and realistic reflections */}
        <meshStandardMaterial
          color={ringColor}
          roughness={0.15}
          metalness={1}
          envMapIntensity={1.5}
        />
      </mesh>

      <mesh
        castShadow
        geometry={nodes.mesh_9.geometry}
        material={materials.WhiteMetal}
      />

      {/* Ring Diamond */}
      <instancedMesh
        args={[nodes.mesh_4.geometry, materials.__DEFAULT, 65]}
        instanceMatrix={nodes.mesh_4.instanceMatrix}
      >
        {/* Glassy, refractive material for diamonds. */}
        <MeshRefractionMaterial
          color={diamondColor}
          side={THREE.DoubleSide}
          envMap={env}
          aberrationStrength={0.02}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
};

export default Ring;
