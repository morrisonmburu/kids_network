import React from 'react'
import { useHistory, useLocation,  } from 'react-router-dom'

const Authenticate = {
    isAuthenticated: false,
    authenticate (cb) {
        Authenticate.isAuthenticated = true
        // eslint-disable-next-line no-undef
        setTimeout(cb, 100)
    }
}

function Login () {

    const history = useHistory()
    const location = useLocation()

    const { from } = location.state || { from: { pathname: '/register' } }
    const login = () => {
        Authenticate.authenticate(() => {
            history.replace(from)
            location.state.from.state = Authenticate.isAuthenticated
        })
    }

    return (
        <div>
            Login Page
            <button onClick={ login } > Login </button>
        </div>
    )
}

export default Login