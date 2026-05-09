import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const NetworkNodes = () => {
    const groupRef = useRef<THREE.Group>(null);

    const particleCount = 30;
    const connectionDistance = 3;

    // Generate random positions
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < particleCount; i++) {
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 5;
            temp.push(new THREE.Vector3(x, y, z));
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
        }
    });

    const connections = useMemo(() => {
        const lines: THREE.Vector3[][] = [];
        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                if (particles[i].distanceTo(particles[j]) < connectionDistance) {
                    lines.push([particles[i], particles[j]]);
                }
            }
        }
        return lines;
    }, [particles]);

    return (
        <group ref={groupRef}>
            {particles.map((pos, i) => (
                <Sphere key={i} args={[0.05, 16, 16]} position={pos}>
                    <meshStandardMaterial color="#ea580c" emissive="#ea580c" emissiveIntensity={2} />
                </Sphere>
            ))}
            {connections.map((line, i) => (
                <Line
                    key={i}
                    points={line}
                    color="#f97316"
                    transparent
                    opacity={0.1}
                    lineWidth={1}
                />
            ))}
        </group>
    );
};

const GalleryHeroScene = () => {
    return (
        <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-slate-950 overflow-hidden">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <NetworkNodes />
                <fog attach="fog" args={['#0f172a', 5, 15]} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>
    );
};

export default GalleryHeroScene;
