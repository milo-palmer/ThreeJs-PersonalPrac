/* eslint-disable react/no-unknown-property */
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

function Cardmodel(props) {
  const shoe = useGLTF(props.model)
  const { camera } = useThree()
  camera.position.z = 3.5
  camera.position.y = 2

  return (
    <>
      <OrbitControls autoRotate={true} />
      <ambientLight />
      <primitive object={shoe.scene} />
    </>
  )
}

export default Cardmodel
