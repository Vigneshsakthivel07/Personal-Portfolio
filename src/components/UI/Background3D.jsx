import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';

// --- Scene Components ---

function HomeScene() {
    const ref = useRef();
    // Memoize heavy calculations
    const positions = useMemo(() => {
        const pos = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000 * 3; i++) pos[i] = (Math.random() - 0.5) * 15;
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial transparent color="#39FF14" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
            </Points>
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

function ProjectsScene() {
    return (
        <group>
            <ambientLight intensity={0.5} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* Icosahedron */}
                <mesh position={[3, 2, -2]}>
                    <icosahedronGeometry args={[0.8, 0]} />
                    <meshBasicMaterial color="#39FF14" wireframe transparent opacity={0.4} />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={1.5}>
                {/* Cube */}
                <mesh position={[-3, -1, -3]}>
                    <boxGeometry args={[0.8, 0.8, 0.8]} />
                    <meshBasicMaterial color="#39FF14" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={2} floatIntensity={0.5}>
                {/* Octahedron */}
                <mesh position={[1, -3, -4]}>
                    <octahedronGeometry args={[0.6, 0]} />
                    <meshBasicMaterial color="#39FF14" wireframe transparent opacity={0.3} />
                </mesh>
            </Float>
            <Stars radius={50} count={2000} factor={2} fade />
        </group>
    );
}

function SkillsScene() {
    const count = 400;
    const { positions, sizes } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
            sizes[i] = Math.random();
        }
        return { positions, sizes };
    }, []);

    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (groupRef.current) {
            groupRef.current.rotation.y = time * 0.05;
            groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <points>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
                </bufferGeometry>
                <pointsMaterial size={0.04} color="#39FF14" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
            </points>
            <Stars radius={80} count={1000} factor={3} fade />
        </group>
    );
}

function ContactScene() {
    const meshRef = useRef();
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        }
    });

    return (
        <group>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial color="#39FF14" wireframe transparent opacity={0.1} />
            </mesh>
            <Stars radius={100} count={2000} factor={3} fade />
        </group>
    );
}

function AboutScene() {
    const ref = useRef();
    const positions = useMemo(() => {
        const pos = new Float32Array(1500 * 3);
        for (let i = 0; i < 1500 * 3; i++) pos[i] = (Math.random() - 0.5) * 15;
        return pos;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 6]}>
            <Points ref={ref} positions={positions} stride={3}>
                <PointMaterial transparent color="#ffffff" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
            </Points>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh position={[0, 0, -2]}>
                    <torusGeometry args={[2, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#39FF14" transparent opacity={0.2} />
                </mesh>
            </Float>
        </group>
    )
}

// --- Main Manager ---

function SceneManager({ route }) {
    switch (route) {
        case '/': return <HomeScene />;
        case '/about': return <AboutScene />;
        case '/projects': return <ProjectsScene />;
        case '/skills': return <SkillsScene />;
        case '/education': return <AboutScene />;
        case '/certifications': return <ProjectsScene />;
        case '/contact': return <ContactScene />;
        default: return <HomeScene />;
    }
}

const Background3D = () => {
    // 1. Get location OUTSIDE of Canvas
    const location = useLocation();

    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[var(--deep-black)]">
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-black)] via-transparent to-[var(--deep-black)] z-10 opacity-80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--deep-black)_100%)] z-10 opacity-50"></div>

            <Canvas
                camera={{ position: [0, 0, 6], fov: 60 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                dpr={[1, 2]} // Limit pixel ratio for performance
            >
                {/* 2. Pass route as prop */}
                <SceneManager route={location.pathname} />

                {/* Global Fog for Depth */}
                <fog attach="fog" args={['#050505', 5, 25]} />
            </Canvas>
        </div>
    );
};

export default Background3D;
