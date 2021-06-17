import React from 'react';
import { Link } from 'react-router-dom'


const StatusNavigation = () => {
    return (
        <div className="row">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="navbar-brand" to="#">
                            Game 1
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="#">
                                Game2
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="navbar-brand" to="#">
                                Game3
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default StatusNavigation
