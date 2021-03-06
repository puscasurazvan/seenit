import React from 'react'

import PropTypes from 'prop-types'

import './VideoModal.scss'

const VideoModal = ({ children, toggle, open, buttonText }) => {
  return (
    open && (
      <div className="video">
        <div className="video__body">
          {children}
          <button className={'video__body__close-button'} onClick={toggle}>
            {buttonText} &#10006;
          </button>
        </div>
      </div>
    )
  )
}

VideoModal.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  children: PropTypes.any,
}

export default VideoModal
