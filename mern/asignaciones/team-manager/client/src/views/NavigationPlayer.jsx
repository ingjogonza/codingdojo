import React from 'react'
import { Link } from 'react-router-dom'

const NavigationPlayer = () => {
    return (
        <div className="row mb-5">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="navbar-brand" to="/players/list">
                            List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="/players/addplayer">
                                AddPlayer
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationPlayer
