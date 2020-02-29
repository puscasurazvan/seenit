import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './VideoModal.scss'

const Portal = ({ children }) => {
  const root = document.getElementById('videoWrapper')
  const [element] = useState(document.createElement('div'))

  useEffect(() => {
    root.appendChild(element)

    return function cleanup() {
      root.removeChild(element)
    }
  }, [root, element])

  return createPortal(children, element)
}

const VideoModal = ({ children, toggle, open }) => {
  return (
    <Portal>
      {open && (
        <div className="video">
          <div className="video__body">
            {children}
            <button className={'video__body__close-button'} onClick={toggle}>
              How to overcome camera shyness &#10006;
            </button>
          </div>
        </div>
      )}
    </Portal>
  )
}

export default VideoModal
