import React from 'react';
import { Link } from 'react-router-dom';

function navLinks() {
    return (
        <nav>
            <span>
                <Link className="App-Nav" to="/">HOME</Link>
                <Link className="App-Nav" to="/add-exercise">ADD</Link>
            </span>
        </nav>
    );
}

export default navLinks;