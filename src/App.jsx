import { ContactShadows, Environment, Float, Html, OrbitControls, PresentationControls, Text, useGLTF } from '@react-three/drei'
import React from 'react'

function App() {
  const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
  return (

    <>
      <Environment preset='city' />

      <color args={['#59595b']} attach="background" />

      <PresentationControls

        global
        rotation={[0.13, 0.5, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 4, tenstion: 400 }}
        snap={{ mass: 6, tenstion: 400 }}
      >

        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'whitesmoke'}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive
            object={computer.scene}
            position-y={-1.2}
          >
            <Html transform
              wrapperClass='htmlScreen'
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            ><iframe src='http://127.0.0.1:5501/' /></Html>
          </primitive>
          <Text
            position={[2, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign='center'
          >.Ai world</Text>
        </Float>
      </PresentationControls>

      <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        scale={5}
        blur={5}
      />
    </>
  )
}

export default App