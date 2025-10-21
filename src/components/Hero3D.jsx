'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function OrbitSphere({ color, size, radius, verticalScale, depthScale, speed, offset, distort }) {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    const t = clock.getElapsedTime();
    const angle = t * speed + offset;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle * 0.85) * verticalScale;
    const z = Math.sin(angle * 0.6) * depthScale;
    sphereRef.current.position.set(x, y, z);
    sphereRef.current.rotation.y = angle;
  });

  return (
    <Sphere ref={sphereRef} args={[size, 48, 48]}>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={1.5}
        roughness={0.1}
        metalness={0.3}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </Sphere>
  );
}

function ScatterParticles({ count = 140 }) {
  const pointsRef = useRef();
  const positions = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.2 + Math.random() * 1.4;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.8;
      temp[i * 3] = Math.cos(angle) * radius;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = Math.sin(angle) * radius * 0.4;
    }
    return temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.05;
    pointsRef.current.rotation.x = Math.sin(t * 0.08) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#bfdbfe"
        sizeAttenuation
        transparent
        opacity={0.45}
      />
    </points>
  );
}

function GlowDisc() {
  const discRef = useRef();
  useFrame(({ clock }) => {
    if (!discRef.current) return;
    const t = clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 0.6) * 0.05;
    discRef.current.scale.set(scale, scale, scale);
    discRef.current.material.opacity = 0.18 + Math.sin(t * 0.8) * 0.03;
  });

  return (
    <mesh ref={discRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
      <ringGeometry args={[0.8, 3.2, 64]} />
      <meshBasicMaterial color="#cbd5f5" transparent opacity={0.2} />
    </mesh>
  );
}

function OrbitingSpheres() {
  const groupRef = useRef();
  const orbitConfigs = useMemo(
    () => [
      { color: '#c7d2fe', size: 0.48, radius: 1.8, verticalScale: 1.1, depthScale: 0.7, speed: 0.32, offset: 0.0, distort: 0.22 },
      { color: '#fde68a', size: 0.42, radius: 2.2, verticalScale: 1.0, depthScale: 0.6, speed: 0.38, offset: Math.PI / 3, distort: 0.28 },
      { color: '#bfdbfe', size: 0.36, radius: 1.5, verticalScale: 1.2, depthScale: 0.8, speed: 0.44, offset: Math.PI * 0.75, distort: 0.18 },
      { color: '#fecdd3', size: 0.4, radius: 2.5, verticalScale: 0.9, depthScale: 0.7, speed: 0.29, offset: Math.PI * 1.2, distort: 0.26 },
      { color: '#fef3c7', size: 0.28, radius: 1.2, verticalScale: 0.8, depthScale: 0.5, speed: 0.52, offset: Math.PI * 1.6, distort: 0.34 },
      { color: '#e0f2fe', size: 0.3, radius: 2.9, verticalScale: 1.3, depthScale: 0.9, speed: 0.25, offset: Math.PI * 0.4, distort: 0.24 },
      { color: '#d9f99d', size: 0.26, radius: 1.6, verticalScale: 0.7, depthScale: 0.55, speed: 0.48, offset: Math.PI * 1.8, distort: 0.3 },
      { color: '#fbcfe8', size: 0.34, radius: 2.1, verticalScale: 1.05, depthScale: 0.65, speed: 0.36, offset: Math.PI * 2.2, distort: 0.2 },
    ],
    []
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <ScatterParticles />
      <GlowDisc />
      <Sphere args={[0.55, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#ffffff"
          distort={0.18}
          speed={1.2}
          roughness={0.05}
          metalness={0.1}
          emissive="#f8fafc"
          emissiveIntensity={0.4}
        />
      </Sphere>
      {orbitConfigs.map((config, index) => (
        <OrbitSphere key={index} {...config} />
      ))}
    </group>
  );
}

export default function Hero3D({ variant = 'orbit' }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 48 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 1.8]}
      >
        <color attach="background" args={[variant === 'orbit' ? '#f8fafc' : '#ffffff']} />
        <ambientLight intensity={0.8} color="#f5f5f5" />
        <directionalLight position={[4, 6, 4]} intensity={0.6} color="#e0f2fe" />
        <directionalLight position={[-4, -2, -1]} intensity={0.35} color="#fee2e2" />

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
