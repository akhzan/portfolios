import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import works from '../../config/works'
import Logo from '../../assets/logo.png'
import './work.scss'

const Work = () => {
  const { id } = useParams()
  const work = works[id] || {}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])
  return (
    <div className="app-content --flexible">
      <div className="app-work">
        <Link to="/">
          <img className="app-work__logo" src={Logo} alt="" />
        </Link>
        <p className="app-section__title">{work.title}</p>
        <p className="app-work__desc">{work.description}</p>
        <div className="app-work__tech">
          <div>Technology</div>
          <p>{work.tech}</p>
        </div>
        <img
          className={`app-work__image ${work.imageClassname}`}
          src={work.imageDetail}
          alt=""
        />
      </div>
    </div>
  )
}

export default Work
