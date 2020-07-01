import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Work from '../pages/Work'
import { PUBLIC_URL } from '../config/url'

const RouteConfig = (
  <Router basename={PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={Work} />
      </Switch>
    </div>
  </Router>
)

export default RouteConfig
