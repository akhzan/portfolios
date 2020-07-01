import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import works from '../../config/works'
import './work.scss'

const Work = () => {
  const { id } = useParams()
  const work = works[id] || {}
  console.log(work)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])
  return (
    <div className="app-content --flexible">
      <div className="app-work">
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
