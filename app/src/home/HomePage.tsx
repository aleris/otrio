import './HomePage.scss';
import {Link} from "react-router-dom";
import React from "react";

export const HomePage = () => {
    return (
        <div className="Home">
            <h1>Otrio</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/board">Board Test</Link>
                    </li>
                    <li>
                        <Link to="/ring">Ring Test</Link>
                    </li>
                    <li>
                        <Link to="/grid">Grid Test</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
