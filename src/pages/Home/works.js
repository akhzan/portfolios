import React from 'react'
import { Link } from 'react-router-dom'

import works from '../../config/works'

const Works = () => {
  return (
    <div className="app-content --medium --flexible">
      <div className="app-home__work">
        <p className="app-section__title wow fadeInUp">Selected work</p>
        <div className="app-home__work-container">
          {Object.keys(works).map((key) => (
            <div key={key} className="app-home__work-card wow fadeInUp">
              <img src={works[key].image} alt="" />
              <Link to={`/${key}`} className="app-home__work-card-title">
                <div>{works[key].title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
