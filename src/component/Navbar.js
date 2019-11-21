import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Navbar.scss';

export function Navbar() {
    return (
        <nav>
            <ul className="nav-bar-list">
                <li>
                    <Link to="/posts" className="nav-element">Posts</Link>
                </li>
                <li>
                    <Link to="/users" className="nav-element">Users</Link>
                </li>
            </ul>
        </nav>
    );
}