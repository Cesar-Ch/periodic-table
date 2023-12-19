/* eslint-disable react/no-unknown-property */
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "./Loader"
import { useGLTF, OrbitControls, Preload } from "@react-three/drei"

const CanvasElement = ({ name, number }) => {
    const element = useGLTF(`/elements/element_${number.padStart(3,'0')}_${name.toLowerCase().trim()}.glb`)
    return (
        <mesh>
            <hemisphereLight intensity={3.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow />
            <primitive object={element.scene} rotation={[-0.01, -0.2, -0.1]} scale={10} />
        </mesh>
    )
}


const Element = ({ name, number }) => {
    return (
        <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls enableZoom={false}  />
                <CanvasElement name={name} number={number} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Element