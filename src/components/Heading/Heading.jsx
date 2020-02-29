import React from 'react'
import PropTypes from 'prop-types'

import './Heading.scss'

const Heading = ({ headingText, toggleVideo, modalOpen }) => {
  return (
    <div
      className={modalOpen ? 'heading' : 'openHeading'}
      onClick={toggleVideo}
    >
      <h3>{headingText}</h3>
    </div>
  )
}

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
  toggleVideo: PropTypes.func,
  modalOpen: PropTypes.bool,
}

export default Heading
