import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleSwarm = () => {
  const count = 1500;
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#4F49F5" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
};

export default function WebGLBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-white">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}