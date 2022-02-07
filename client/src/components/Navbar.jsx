import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className="nav text-lg px-4 py-4 bg-black">
            <Link className='brand' to="/">
                <img className='logo' src="https://www.seekpng.com/png/full/70-707290_svg-black-and-white-arcade-clipart-arcade-machine.png" alt="arcade game"/>
                <h1 className='font-extrabold text-2xl text-stone-300 shadow-lg shadow-indigo-500/50'>Bored? Game!</h1>
            </Link>
            <ul className="links font-semibold text-stone-300">
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