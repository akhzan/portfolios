import React from 'react'

const Detail = () => {
  return (
    <div className="app-content --flexible">
      <div className="app-home__detail">
        <div className="app-home__detail-exp wow fadeInUp">
          <p className="app-section__title">Experiences</p>
          <div className="app-home__detail-exp-item">
            <h3>2018 - present</h3>
            <p>Frontend Engineer / Payfazz</p>
          </div>
          <div className="app-home__detail-exp-item">
            <h3>2017 - 2018</h3>
            <p>Frontend Developer / Astra Graphia IT</p>
          </div>
          <div className="app-home__detail-exp-item">
            <h3>2014 - 2017</h3>
            <p>Fullstack Developer / Astra Graphia IT</p>
          </div>
        </div>
        <div className="app-home__detail-exp wow fadeInUp">
          <p className="app-section__title">Studies</p>
          <div className="app-home__detail-exp-item">
            <h3>2010 - 2014</h3>
            <p>Electronics and Instrumentation</p>
            <p>Universitas Gadjah Mada</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
