import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('seenit-video'))

serviceWorker.unregister()
