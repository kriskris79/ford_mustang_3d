import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OBJLoader, MTLLoader } from 'three-stdlib';

const CarModel = () => {
    const objRef = useRef();
    const { scene } = useThree();

    useEffect(() => {
        const mtlLoader = new MTLLoader();
        mtlLoader.load('/models/cars/mustang_GT.mtl', (materials) => {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load('/models/cars/mustang_GT.obj', (object) => {
                objRef.current.add(object);
            });
        });
    }, [scene]);

    return <group ref={objRef} scale={[0.05, 0.05, 0.05]} />;
};

export default CarModel;