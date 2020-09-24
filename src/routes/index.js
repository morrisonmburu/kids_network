import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { RouteWrapper, PrivateRoute } from './Route.js'

import Login from '../Auth/login.js'
import Register from '../Auth/register.js'
import MainDashboard from '../dashboard/mainDashboard.js'
import Error404 from '../Exception/404.error.js'
import Counter from '../features/Counter'

export default function Routes () {
    return (
        <Router>
            <Switch>
                <RouteWrapper path="/" exact component={ Counter } />
                <RouteWrapper path="/register" component={ Register } />

                {/* <RouteWrapper  isPrivate /> */}
                <PrivateRoute path="/dashboard" component={ MainDashboard } />

                {/* <RouteWrapper to="*" component={ Error404 } /> */}
            </Switch>
        </Router>
    )
}