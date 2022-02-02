import React from 'react';
import { Link } from "react-router-dom"

export default function Navbar() {
  return( 
    <nav className="bg-gray-800 flex-1  " >
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <ul className="flex justify-evenly text-black">
                <li  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                    <Link to="/saved">Saved</Link>
                </li>
                <li  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                    <Link to="/account">Account</Link>
                </li>
                <li  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                    <Link to="/signup">SignUp</Link>
                </li>
                <li  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
