/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const Detail = () => {
  return (
    <div className="app-content --flexible">
      <div className="app-home__contract">
        <p className="app-section__title">Contact</p>
        <div>
          <a
            target="_blank"
            // eslint-disable-next-line react/jsx-closing-bracket-location
            href="https://www.linkedin.com/in/syafrizal-akhzan-a80154a9/">
            Linkedin
          </a>
          <a target="_blank" href="mailto: rizal.akhzan@gmail.com">
            Email
          </a>
          <a target="_blank" href="https://github.com/akhzan">
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Detail
