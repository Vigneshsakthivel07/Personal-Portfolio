import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

const FloatingText3D = ({ text, position = [0, 0, 0] }) => {
    const textRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (textRef.current) {
            textRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2;
            textRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
        }
    });

    return (
        <Center ref={textRef} position={position}>
            <Text3D
                font="/fonts/helvetiker_regular.typeface.json"
                size={0.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
            >
                {text}
                <meshStandardMaterial
                    color="#39FF14"
                    emissive="#39FF14"
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Text3D>
        </Center>
    );
};

export default FloatingText3D;
