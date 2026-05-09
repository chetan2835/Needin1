import { useEffect, useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Text3D, Center } from "@react-three/drei";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bell, Sparkles, Rocket } from "lucide-react";
import { toast } from "sonner";
import * as THREE from "three";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Animated particles
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;

      // Orange/accent color palette
      colors[i * 3] = 0.9 + Math.random() * 0.1;
      colors[i * 3 + 1] = 0.4 + Math.random() * 0.3;
      colors[i * 3 + 2] = 0.2 + Math.random() * 0.2;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

// Glowing animated orb
function GlowingOrb({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// Animated rings
function AnimatedRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * -0.4;
      ring2Ref.current.rotation.z = t * 0.5;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.6;
      ring3Ref.current.rotation.z = t * -0.3;
    }
  });

  return (
    <group>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#ea580c" transparent opacity={0.2} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshBasicMaterial color="#fb923c" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

// Floating cubes
function FloatingCubes() {
  const cubes = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10 - 5,
      ] as [number, number, number],
      scale: 0.2 + Math.random() * 0.3,
      speed: 0.5 + Math.random() * 1.5,
    }));
  }, []);

  return (
    <>
      {cubes.map((cube, i) => (
        <Float key={i} speed={cube.speed} rotationIntensity={2} floatIntensity={2}>
          <mesh position={cube.position} scale={cube.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <MeshWobbleMaterial
              attach="material"
              color={i % 2 === 0 ? "#f97316" : "#ea580c"}
              factor={0.4}
              speed={1}
              transparent
              opacity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

// Main 3D scene
function Scene({ title }: { title: string }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#f97316" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ea580c" />

      <ParticleField />
      <AnimatedRings />
      <FloatingCubes />

      <GlowingOrb position={[0, 0, 0]} color="#f97316" scale={1.5} speed={0.8} />
      <GlowingOrb position={[-4, 2, -3]} color="#ea580c" scale={0.6} speed={1.2} />
      <GlowingOrb position={[4, -2, -2]} color="#fb923c" scale={0.4} speed={1.5} />
      <GlowingOrb position={[3, 3, -4]} color="#fdba74" scale={0.3} speed={0.9} />
    </>
  );
}

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const isVendor = location.pathname.includes("vendor");
  const title = isVendor ? "Needin Vendor Services" : "Needin Express";
  const description = isVendor
    ? "We're building something amazing! Our vendor services platform will connect you with trusted local professionals for all your needs."
    : "Express delivery is on its way! Soon you'll be able to send parcels and documents across India with Travel-Based Delivery.";

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // 1. Notification to Needin Admin
      console.log(`
        [MOCK EMAIL SERVICE] To: admin@needin.app
        Subject: New Subscriber for ${title}
        Body:
        Hello Admin,
        
        A new user has subscribed to be notified about ${title}.
        
        User Email: ${email}
        Page: ${isVendor ? 'Vendor Services' : 'Express Delivery'}
        Timestamp: ${new Date().toLocaleString()}
        
        Please add them to the mailing list.
      `);

      // 2. Auto-reply to User
      console.log(`
        [MOCK EMAIL SERVICE] To: ${email}
        Subject: You're on the list! - Needin
        Body:
        Hi there,
        
        Thanks for your interest in ${title}!
        
        We've added ${email} to our notification list. You'll be the first to know when we launch.
        
        In the meantime, feel free to explore our other services on needin.app.
        
        Best,
        The Needin Team
      `);

      toast.success("You've been added to the list! Check your console for the mock email.");
      setEmail("");
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>{title} - Coming Soon | Needin</title>
        <meta name="description" content={`${title} is coming soon. ${description}`} />
      </Helmet>

      <Header />

      <main className="min-h-screen relative overflow-hidden bg-background pt-16 md:pt-20">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
          >
            <Scene title={title} />
          </Canvas>
        </div>

        {/* Gradient overlays - Lighter for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80 z-[1]" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-primary/20 animate-fade-in shadow-sm hover:shadow-md transition-all">
              <Rocket className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-foreground font-bold tracking-wide">Coming Soon</span>
              <Sparkles className="w-5 h-5 text-accent" />
            </div>

            {/* Title - BOLDER */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in tracking-tight drop-shadow-sm"
              style={{ fontFamily: 'Poppins, sans-serif', animationDelay: '0.1s' }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease-in-out_infinite]">
                {title}
              </span>
            </h1>

            {/* Description - BOLDER */}
            <p
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in font-medium"
              style={{ animationDelay: '0.2s' }}
            >
              {description}
            </p>

            {/* Notify form */}
            <form
              onSubmit={handleNotify}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={loading}
                  className="w-full sm:w-96 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-md border border-input focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground shadow-sm text-lg"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full sm:w-auto relative overflow-hidden group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
              >
                {loading ? (
                  <span className="flex items-center">Sending...</span>
                ) : (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <Bell className="w-5 h-5 mr-2" />
                    Notify Me
                  </>
                )}
              </Button>
            </form>

            {/* Back button */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-2 border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm rounded-xl px-8 py-3 font-medium text-lg"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Features preview */}
            <div
              className="mt-20 grid sm:grid-cols-3 gap-8 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              {[
                { icon: "🚀", title: "Fast & Reliable", desc: isVendor ? "Quick vendor matching" : "Travel-Based Delivery" },
                { icon: "🔒", title: "Secure", desc: isVendor ? "Verified professionals" : "Tracked parcels" },
                { icon: "💰", title: "Affordable", desc: "Best rates guaranteed" },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <span className="text-5xl mb-6 block transform transition-transform group-hover:scale-110">{feature.icon}</span>
                  <h3 className="font-bold text-xl mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ComingSoon;
