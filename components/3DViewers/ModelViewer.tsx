import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Astronaut from '../3DModels/Astronaut';

export default function ModelViewer() {
    return (
        <Canvas
            className='z-0 w-screen h-screen inset-0 bg-black'
            camera={{
                position: [0, 0, 5],
                fov: 80,
                near: 0.1,
                far: 13000,
            }}
        >
            <Suspense fallback={null}>
                <Astronaut />
                <ambientLight intensity={2} />
                <OrbitControls
                    enableRotate={true}
                    enableZoom={false}
                    enablePan={true}
                    rotateSpeed={-0.6}
                    target={[180, 0, 0]}
                />
            </Suspense>
        </Canvas>
    );
}