import React from 'react'
import PropTypes from 'prop-types'

function Heading({ headingText, toggleVideo }) {
  return (
    <div onClick={toggleVideo}>
      <h3>{headingText}</h3>
    </div>
  )
}

Heading.propTypes = {
  headingText: PropTypes.string.isRequired,
  toggleVideo: PropTypes.func,
}

export default Heading
