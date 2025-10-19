'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function OrbitingSpheres() {
  const groupRef = useRef();
  const spheresData = useMemo(() => [
    { position: [2, 0, 0], color: '#FFA64D', size: 0.5 },
    { position: [-2, 0, 0], color: '#0066CC', size: 0.5 },
    { position: [0, 2, 0], color: '#FFA64D', size: 0.4 },
    { position: [0, -2, 0], color: '#0066CC', size: 0.4 },
    { position: [1.5, 1.5, 0], color: '#FFA64D', size: 0.3 },
    { position: [-1.5, -1.5, 0], color: '#0066CC', size: 0.3 },
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection Lines */}
      {spheresData.map((sphere, i) => {
        const nextIndex = (i + 1) % spheresData.length;
        const start = new THREE.Vector3(...sphere.position);
        const end = new THREE.Vector3(...spheresData[nextIndex].position);
        const points = [start, end];
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={`line-${i}`} geometry={lineGeometry}>
            <lineBasicMaterial color="#ffffff" opacity={0.3} transparent linewidth={1} />
          </line>
        );
      })}

      {/* Spheres */}
      {spheresData.map((sphere, i) => (
        <Sphere key={i} args={[sphere.size, 32, 32]} position={sphere.position}>
          <MeshDistortMaterial
            color={sphere.color}
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      ))}

      {/* Center Node */}
      <Sphere args={[0.3, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ffffff" emissive="#FFA64D" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
}

export default function Hero3D({ variant = 'orbit' }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {variant === 'orbit' && <OrbitingSpheres />}
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
