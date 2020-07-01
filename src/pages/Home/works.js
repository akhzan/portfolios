import React from 'react'
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
            <div className="app-home__work-card-title">
              <div>Canfazz Freelancer Web</div>
            </div>
          </div>
          <div className="app-home__work-card">
            <img src={CanfazzDashboard} alt="" />
            <div className="app-home__work-card-title">
              <div>Canfazz Dashboard</div>
            </div>
          </div>
          <div className="app-home__work-card">
            <img src={Sam} alt="" />
            <div className="app-home__work-card-title">
              <div>SAM Advance</div>
            </div>
          </div>
          <div className="app-home__work-card">
            <img src={Porse} alt="" />
            <div className="app-home__work-card-title">
              <div>Porse Quiz</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
