import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

function Box() {
  return (
    <div id="canvas-container" style={{position:"absolute"}}>
      <Canvas>
        <camera>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
  <sphereGeometry args={[1, 16, 16]} />
  <meshStandardMaterial color="hotpink" transparent />
</mesh>
        </camera>
      </Canvas>
  </div>
  )
}

export default Box