import React from 'react';
import { Link } from "react-router-dom"

export default function Navbae() {
    return (
        <nav className="nav text-lg px-4 py-4 bg-gray-800">
            <h1>Bored? Game!</h1>
            <ul className=" text-stone-300">
                <li>
                    <Link to="/saved">Saved</Link>
                </li>
                <li>
                    <Link to="/new">New</Link>
                </li>
                <li>
                    <Link to="/Account">Account</Link>
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