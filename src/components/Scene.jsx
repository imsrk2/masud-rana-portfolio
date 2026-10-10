import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  TorusKnot,
  Points,
  PointMaterial,
} from '@react-three/drei'
import * as THREE from 'three'

/**
 * A slowly drifting, mouse-reactive field of glowing particles.
 */
function ParticleField({ count = 2600, radius = 14 }) {
  const ref = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Distribute points inside a sphere shell
      const r = radius * Math.cbrt(Math.random())
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count, radius])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.045
    ref.current.rotation.x += delta * 0.012
    // subtle reaction to pointer
    ref.current.rotation.z = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      state.pointer.x * 0.15,
      0.04,
    )
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.055}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

/**
 * Central floating wireframe "core" made of a few interlocking shapes.
 */
function CoreCluster() {
  const group = useRef()

  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.18
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.35,
      0.05,
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.35,
      0.05,
    )
  })

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.4}>
        <Icosahedron args={[2.1, 1]}>
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#6d28d9"
            emissiveIntensity={0.6}
            wireframe
            transparent
            opacity={0.85}
          />
        </Icosahedron>
      </Float>

      <Float speed={1.1} rotationIntensity={0.9} floatIntensity={2}>
        <TorusKnot args={[3.1, 0.22, 160, 24]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#d946ef"
            emissive="#d946ef"
            emissiveIntensity={1.1}
            transparent
            opacity={0.6}
          />
        </TorusKnot>
      </Float>

      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={2.6}>
        <Icosahedron args={[0.5, 0]} position={[3.4, 1.6, -1.5]}>
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.4}
          />
        </Icosahedron>
      </Float>

      <Float speed={2} rotationIntensity={1.2} floatIntensity={2.2}>
        <Icosahedron args={[0.36, 0]} position={[-3.2, -1.4, 1.2]}>
          <meshStandardMaterial
            color="#f0abfc"
            emissive="#f0abfc"
            emissiveIntensity={1.2}
          />
        </Icosahedron>
      </Float>
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 9], fov: 55 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={1.4} color="#8b5cf6" />
      <pointLight position={[-6, -4, -6]} intensity={1.1} color="#22d3ee" />
      <Suspense fallback={null}>
        <ParticleField />
        <CoreCluster />
      </Suspense>
      <fog attach="fog" args={['#05060a', 8, 22]} />
    </Canvas>
  )
}
