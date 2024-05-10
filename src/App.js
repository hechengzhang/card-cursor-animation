import React, { useRef, useState } from 'react';
import './App.css';
import Card from './components/card';

const App = () => {
  // 光源随鼠标移动
  const [positon, setPositon] = useState({
    x: 0,
    y: 0
  })

  const onMouseMove = (e) => {
    const { clientX, clientY } = e
    setPositon({
      x: clientX,
      y: clientY
    })
  }

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <div className='center-container'>
        <div className="container-left">
          <Card positon={positon} style={{ height: 350 }}>
            <div>
              <div className='title'>Unleash Your Potential with Empower</div>
              <div className='desc'>
                Maximize your productivity and efficiency with our breakthrough project management tool. Set goals, monitor progress, and achieve success.
                <br />
                <br />
                Maximize your productivity and efficiency with our breakthrough project management tool. Set goals, monitor progress, and achieve success.
              </div>
            </div>
          </Card>
          <Card positon={positon} style={{ flex: 1 }}>
            <div>
              <div className='title'>Join the Colorfest</div>
              <div className='desc'>
                Add a splash of color to your life with our vibrant, top-quality paints. Perfect for artists, hobbyists, or anyone looking to add some creative flair.
                <br />
                <br />
                Perfect for artists hobbyists.
              </div>
            </div>
          </Card>
        </div>
        <div className="container-right">
          <Card positon={positon} style={{ width: '100%', height: 260 }} />
          <Card positon={positon} style={{ flex: 1, height: 320 }} />
          <Card positon={positon} style={{ flex: 1, height: 320 }} />
        </div>
      </div>
    </div>
  );
}

export default App;
