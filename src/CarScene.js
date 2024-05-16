import React from 'react';
import { Canvas } from '@react-three/fiber';
import CarModel from './CarModel';
import { OrbitControls } from '@react-three/drei';

const CarScene = () => {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <CarModel />
            <OrbitControls />
        </Canvas>
    );
};

export default CarScene;