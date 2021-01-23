import './HomePage.scss';
import {Link} from "react-router-dom";
import React from "react";

export const HomePage = () => {
    return (
        <div className="home">
            <h1>Otrio</h1>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/board">Board Test</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
