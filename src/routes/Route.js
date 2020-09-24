import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
// import Login from '../Auth/login.js'
// import MainDashboard from '../dashboard/mainDashboard.js'
import Authenticate from '../Auth/login.js'

export function RouteWrapper ({
    component: Component,
    isPrivate,
    ...rest
}) {
    /**
     * If not included on both previous cases, redirect user to the desired route
    */
   return <Route {  ...rest } component={   Component   } />
}

export function PrivateRoute ({ component: Component, ...rest }) {
    return (
        <Route 
            { ...rest }
            render={ ({ location }) => 
            Authenticate.isAuthenticated ? (
                    Component
                ) : (
                    <Redirect
                        to={ 
                            {
                                pathname: '/',
                                state: { from: location }
                            } 
                        }
                    />
                )
            }
        />
    )
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.func ]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}

PrivateRoute.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([ PropTypes.element, PropTypes.func ]).isRequired
}
