import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const AnimatedStars = () => {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const handleMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.02;
      ref.current.rotation.y += delta * 0.01;
      ref.current.rotation.x += (mouse.current.y * 0.1 - ref.current.rotation.x) * 0.02;
      ref.current.rotation.y += (mouse.current.x * 0.1 - ref.current.rotation.y) * 0.02;
    }
  });

  return <Stars ref={ref} radius={100} depth={60} count={2500} factor={4} saturation={0} fade speed={1.5} />;
};

const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
        <Suspense fallback={null}>
          <AnimatedStars />
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} intensity={0.5} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
