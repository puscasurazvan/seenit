import React from 'react'
import EmbeddedVideo from './components/EmbeddedVideo'
import Heading from './components/Heading'
import './App.css'

const videoData = {
  title: 'Seenit Camera Confidence Video',
  src: 'https://youtube.com/embed/OMMY3I1PjoI',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading headingText="How to overcome camera shyness" />
      </header>
      <EmbeddedVideo video={videoData} />
    </div>
  )
}

export default App
