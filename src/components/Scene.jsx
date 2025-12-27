import {
  Center,
  Environment,
  OrbitControls,
  useEnvironment,
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  N8AO,
  ToneMapping,
} from "@react-three/postprocessing";
import Ring from "./Ring";

const Scene = ({ ringColor, diamondColor, environment }) => {
  let env = useEnvironment({
    files:
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/peppermint_powerplant_2_1k.hdr",
  });
  return (
    <>
      {/* Main light source casting shadows */}
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />

      <group position={[0, -0.25, 0]}>
        {/* Automatically centers your 3D object in the scene. */}
        <Center top position={[0, -0.12, 0]} rotation={[-0.1, 0, 0.085]}>
          <Ring
            ringColor={ringColor}
            diamondColor={diamondColor}
            env={env}
            scale={0.11}
          />
        </Center>
      </group>

      {/* Allows the user to rotate/zoom */}
      <OrbitControls
        enablePan={false}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.25}
      />

      {/* Post-Processing */}
      <EffectComposer>
        {/* Ambient occlusion */}
        <N8AO aoRadius={0.05} intensity={4} distanceFalloff={2} />
        {/* Glow on bright surfaces */}
        <Bloom
          luminanceThreshold={3.5}
          intensity={0.85}
          levels={9}
          mipmapBlur
        />
        {/* Adds cinematic look */}
        {/* <ToneMapping /> */}
      </EffectComposer>

      {/* Sets HDRI as both lighting and background */}
      <Environment map={env} background={environment} />
    </>
  );
};

export default Scene;
