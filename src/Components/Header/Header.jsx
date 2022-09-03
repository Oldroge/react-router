import React from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/user">
                    <li>User</li>
                </Link>
            </ul>
        </nav>
    </>
  );
}
