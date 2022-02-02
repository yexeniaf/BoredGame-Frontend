import React from 'react';
import { Link } from "react-router-dom"

export default function Navbae() {
    return (
        <nav className="text-lg px-4 py-4 bg-gray-800">
            <ul className="flex justify-evenly text-stone-300">
                <li>
                    <Link to="/home">Bored? Game!</Link>
                </li>
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