import React, { useState } from 'react'

import EmbeddedVideo from './components/EmbeddedVideo'
import Heading from './components/Heading'
import VideoModal from './components/VideoModal'

import './VideoWrapper.scss'

const VideoWrapper = ({ children }) => {
  const [show, setShow] = useState(false)

  const closeVideo = () => {
    setShow(false)
  }

  const openVideo = () => {
    setShow(true)
  }

  const videoData = {
    title: 'Seenit Camera Confidence Video',
    src: 'https://youtube.com/embed/OMMY3I1PjoI',
  }

  return (
    <div id="videoWrapper" className="VideoWrapper">
      <Heading
        headingText="How to overcome camera shyness"
        toggleVideo={openVideo}
        modalOpen={show}
      />
      {show && (
        <VideoModal open={show} toggle={closeVideo}>
          <EmbeddedVideo video={videoData} />
        </VideoModal>
      )}
    </div>
  )
}

export default VideoWrapper