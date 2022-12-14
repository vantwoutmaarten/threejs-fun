import React, { Suspense } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";

import { Canvas } from "react-three-fiber";

import { Html, useGLTFLoader } from "drei";

const Model = () => {
  const gltf = useGLTFLoader("/armchairGreen.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

const HTMLContent = () => {
  return (
    <group position={[0, 25, 0]}>
      <mesh position={(0, 35, 0)}>
        <Model />
      </mesh>
      <Html fullscreen>
        <div className="container">
          <h1 className="title">Hello World</h1>
        </div>
      </Html>
    </group>
  );
};

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 80 }}>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}
