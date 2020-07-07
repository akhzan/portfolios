import React from 'react'
import Logo from '../../assets/humaaans.jpg'

const Top = () => {
  return (
    <div className="app-content">
      <div className="app-home__top">
        <div>
          <p className="app-home_top-title">Syafrizal Akhzan</p>
          <p className="app-home_top-description">
            Jakarta-Based Frontend Engineer
          </p>
        </div>
        <img src={Logo} alt="" />
      </div>
    </div>
  )
}

export default Top
