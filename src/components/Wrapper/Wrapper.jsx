import React, { useState, lazy, Suspense } from 'react'

import Heading from '../Heading'
import VideoModal from '../VideoModal'

import './Wrapper.scss'

const EmbeddedVideo = lazy(() => import('../EmbeddedVideo'))

const VideoWrapper = () => {
  const [show, setShow] = useState(false)

  const toggleVideo = () => {
    setShow(!show)
  }

  const videoData = {
    title: 'Seenit Camera Confidence Video',
    src: 'https://youtube.com/embed/OMMY3I1PjoI',
  }

  const displayText = 'How to overcome camera shyness'

  return (
    <div id="videoWrapper" className="VideoWrapper">
      <Heading
        headingText={displayText}
        toggleVideo={toggleVideo}
        modalOpen={show}
      />
      {show && (
        <VideoModal open={show} toggle={toggleVideo} buttonText={displayText}>
          <Suspense fallback={'Loading...'}>
            <EmbeddedVideo video={videoData} />
          </Suspense>
        </VideoModal>
      )}
    </div>
  )
}

export default VideoWrapper
