import React, { useState } from 'react'

import MindNode from 'react-nodemap'
import sample from "./sample.json";
//import sampleImg from './sample.png'

import 'react-nodemap/dist/index.css'

function App() {
  const [data, setData] = useState(sample)

  return (
    <div>
      <MindNode
        value={data}
        onDataChange={(value) => setData(value)}
        fields="keepAll"
        /*exportWatermark={{
          imgSrc: sampleImg,
          format: 'PNG',
        }}*/
        style={{ width: 1000, height: 700 }}
      />
    </div>
  )
}

export default App
