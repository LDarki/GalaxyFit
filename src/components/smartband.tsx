import { useEffect, useRef, useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Euler, Group } from "three";
import Background from "@/assets/img/background.png";

const rotations = [
  new Euler(0, Math.PI / 2, 0),
  new Euler(0, 2.5, 0),
  new Euler(0, Math.PI / 2, -Math.PI / 4),
];

const RotatingModel = ({ gltf, index }) => {
  const modelRef = useRef<Group | null>(null);
  const [windowIsActive, setWindowIsActive] = useState(1);

  useEffect(() => {
    window.addEventListener("focus", () => setWindowIsActive(1));
    window.addEventListener("blur", () => setWindowIsActive(0));
    return () => {
      window.removeEventListener("focus", () => setWindowIsActive(1));
      window.removeEventListener("blur", () => setWindowIsActive(0));
    };
  });

  useFrame((state, delta) => {
    if (!windowIsActive) return;
    if (modelRef.current) {
      modelRef.current.rotation.x +=
        (rotations[index].x - modelRef.current.rotation.x) * delta;
      modelRef.current.rotation.y +=
        (rotations[index].y - modelRef.current.rotation.y) * delta;
      modelRef.current.rotation.z +=
        (rotations[index].z - modelRef.current.rotation.z) * delta;
    }
  });

  return (
    <primitive
      castShadow
      ref={modelRef}
      object={gltf.scene}
      position={[0, 1.2, 0]}
      rotation={rotations[2]}
    />
  );
};

const Smartband = () => {
  const gltf = useLoader(
    GLTFLoader,
    new URL("@/assets/models/smartband.glb", import.meta.url).href,
  );

  const [index, setIndex] = useState(0);
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <article className="smartbandModel">
      <img
        src={Background}
        style={{ width: "45%", marginTop: "7em" }}
        alt="background"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          shadows
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "40em",
            zIndex: 1,
            position: "absolute",
          }}
        >
          <directionalLight position={[5, 2, 5]} intensity={5} color="white" />

          <directionalLight position={[-5, 0, 5]} intensity={1} color="white" />

          <directionalLight position={[-5, 5, -5]} intensity={5} castShadow />

          <RotatingModel gltf={gltf} index={index} />

          <OrbitControls
            target={[0, 1, 0]}
            ref={controlsRef}
            enablePan={false}
            enableRotate
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            onChange={() => {
              if (controlsRef.current) {
                const yRotation = controlsRef.current.getAzimuthalAngle();
                controlsRef.current.object.rotation.set(0, yRotation, 0);
              }
            }}
          />

          <mesh
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
          >
            <planeGeometry args={[10, 10]} />
            <shadowMaterial opacity={0.4} />
          </mesh>
        </Canvas>
      </Suspense>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "8em" }}
      >
        {rotations.map((_, i) => (
          <div
            key={i}
            style={{
              width: "1em",
              height: "1em",
              margin: "0 5px",
              outline: "1px solid #ccc",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
                backgroundColor: index === i ? "gray" : "",
              }}
            />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Smartband;
