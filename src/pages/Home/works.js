import React from 'react'
import { Link } from 'react-router-dom'

import CanfazzWeb from '../../assets/b.jpg'
import CanfazzDashboard from '../../assets/c.jpg'
import Sam from '../../assets/d.jpg'
import Porse from '../../assets/e.jpg'

const Works = () => {
  return (
    <div className="app-content --medium --flexible">
      <div className="app-home__work">
        <p className="app-section__title">Selected work</p>
        <div className="app-home__work-container">
          <div className="app-home__work-card">
            <img src={CanfazzWeb} alt="" />
            <Link to="/canfazz-web" className="app-home__work-card-title">
              <div>Canfazz Freelancer Web</div>
            </Link>
          </div>
          <div className="app-home__work-card">
            <img src={CanfazzDashboard} alt="" />
            <Link to="/canfazz-dashboard" className="app-home__work-card-title">
              <div>Canfazz Dashboard</div>
            </Link>
          </div>
          <div className="app-home__work-card">
            <img src={Sam} alt="" />
            <Link to="/sam" className="app-home__work-card-title">
              <div>SAM Advance</div>
            </Link>
          </div>
          <div className="app-home__work-card">
            <img src={Porse} alt="" />
            <Link to="/porse" className="app-home__work-card-title">
              <div>Porse Quiz</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
