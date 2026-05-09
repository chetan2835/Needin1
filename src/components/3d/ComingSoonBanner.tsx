
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

function AnimatedText() {
    const textRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (textRef.current) {
            // Gentle floating/wobble
            textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
            textRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
                ref={textRef}
                fontSize={0.8}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff"
                outlineWidth={0.02}
                outlineColor="#ea580c"
            >
                COMING SOON
            </Text>
        </Float>
    );
}

import bgImage from "@/assets/hero-bg-final.jpg";

const ComingSoonBanner = () => {
    return (
        <div className="w-full h-[150px] md:h-[200px] relative overflow-hidden bg-gradient-to-r from-orange-900 to-black select-none z-20">
            <div
                className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <Sparkles count={50} scale={5} size={2} speed={0.4} opacity={0.5} color="#fb923c" />
                <AnimatedText />
            </Canvas>
            <div className="absolute bottom-2 left-0 right-0 text-center">
                <p className="text-orange-200/80 text-xs md:text-sm font-bold tracking-[0.2em] uppercase animate-pulse">
                    Launching Across India Soon
                </p>
            </div>
        </div>
    );
};

export default ComingSoonBanner;
