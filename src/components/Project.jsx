import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';

const texture = new THREE.TextureLoader().load('./bitmap.png');
const RotatingCylinder = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.3, 0.3, 0.2]}>
      <cylinderGeometry args={[1.5, 1.5, 2, 50, 1, true] } />
      <meshStandardMaterial color="titanium" side={THREE.DoubleSide} transparent map={texture}/>
    </mesh>
  );
};

const Project = () => {
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Canvas anitialsantialias={true}>
        <ambientLight intensity={1} />
        <directionalLight position={[1, 0, 1]} />
        <RotatingCylinder />
        <OrbitControls 
          enableZoom={false}
          enableDamping={true} 
          dampingFactor={0.01}   
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2} 
        />
      </Canvas>
    </div>
  );
};

export default Project;
