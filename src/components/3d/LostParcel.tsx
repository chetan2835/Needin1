
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Text } from "@react-three/drei";
import * as THREE from "three";

function LostBox() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
            meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Box ref={meshRef} args={[2, 2, 2]}>
                <meshStandardMaterial color="#ea580c" />
            </Box>
            {/* Tape on box */}
            <Box args={[2.1, 0.2, 2.1]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fed7aa" />
            </Box>
            <Box args={[0.2, 2.1, 2.1]} position={[0, 0, 0]}>
                <meshStandardMaterial color="#fed7aa" />
            </Box>
        </Float>
    );
}

const LostParcelScene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <LostBox />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={[0, -3.5, 0]}>
                <Text
                    fontSize={0.5}
                    color="#666"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff"
                >
                    Lost in Transit...
                </Text>
            </Float>
        </Canvas>
    );
};

export default LostParcelScene;
