import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className="nav text-lg px-4 py-4 bg-stone-900">
            <Link to="/">
                <h1 className='font-extrabold text-stone-300'>Bored? Game!</h1>
            </Link>
            <ul className="links text-stone-300">
                <li>
                    <Link to="/saved">Saved</Link>
                </li>
                <li>
                    <Link to="/new">New</Link>
                </li>
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </nav>
    )
}