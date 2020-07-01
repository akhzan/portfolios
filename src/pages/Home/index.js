import React from 'react'

import Top from './top'
import Works from './works'
import Detail from './detail'
import Contact from './contact'
import './home.scss'

const Home = () => {
  return (
    <div>
      <Top />
      <Works />
      <Detail />
      <Contact />
      <div className="app-copyright">
        &copy; 2020. Design and code by Syafrizal Akhzan
      </div>
    </div>
  )
}

export default Home
