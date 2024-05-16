import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three-stdlib';

const CarModel = () => {
    const obj = useLoader(OBJLoader, '/models/cars/mustang_GT.obj'); // Adjust the path accordingly
    const ref = useRef();

    return (
        <primitive object={obj} ref={ref} scale={[0.03, 0.03, 0.03]} />
    );
};

export default CarModel;