import React from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Canvas } from "react-three-fiber";
import { Html, RoundedBox } from "drei";

const HTMLContent = () => {
  return (
    <Html fullscreen>
      <div className="container">
        <h1 className="title">Hello World</h1>
      </div>
    </Html>
  );
};

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 80 }}>
        <HTMLContent></HTMLContent>
      </Canvas>
    </>
  );
}
