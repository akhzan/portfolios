import React from 'react'
import ReactDOM from 'react-dom'
import WOW from 'wow.js'
import 'animate.css/animate.compat.css'

import * as serviceWorker from './serviceWorker'
import ConfigRoute from './router'
import './styles/index.scss'

new WOW().init()

ReactDOM.render(
  <React.StrictMode>{ConfigRoute}</React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
