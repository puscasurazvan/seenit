import React from 'react'
import PropTypes from 'prop-types'

/** The video in the iframe is to be shown or hidden by clicking on the heading text */

const EmbeddedVideo = ({ video }) => {
  return (
    <>
      <iframe
        title={video.title}
        src={video.src}
        height="300px"
        width="500px"
      />
    </>
  )
}

EmbeddedVideo.propTypes = {
  video: PropTypes.shape().isRequired,
}

export default EmbeddedVideo
