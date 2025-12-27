import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import Scene from "./components/Scene";

function App() {
  // Adds a live control panel
  let { ringColor, diamondColor, environment } = useControls({
    ringColor: { value: "#fff0f0", label: "Ring Color" },
    diamondColor: { value: "#ffffff", label: "Diamond Color" },
    environment: { value: false, label: "Background" },
  });

  return (
    <>
      <Canvas
        shadows // Enables shadows
        dpr={[1, 1.5]} // Device pixel ratio for retina
        gl={{ antialias: false }} // Turns off anti-aliasing
        camera={{ position: [-5, 5, 14], fov: 20 }} // Sets initial camera
      >
        <Scene
          ringColor={ringColor}
          diamondColor={diamondColor}
          environment={environment}
        />
      </Canvas>
    </>
  );
}

export default App;
