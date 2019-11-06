import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Nav extends Component {
    render() {
        const { isAuthenticated, login, logout } = this.props.auth;
        return (
            <nav class="navbar navbar-dark bg-dark">
                <ul class="nav">
                    <li class="nav-item">
                        <Link class="nav-link" to='/'>HOME</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/profile'>PROFILE</Link>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-primary" onClick={isAuthenticated() ? logout : login}>
                            {isAuthenticated() ? "Log out" : "Log in"}
                        </button>
                    </li>
                </ul>
            </nav>

        )
    }
}
