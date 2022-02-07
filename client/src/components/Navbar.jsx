import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../services/apiConfig";

export default function Navbar(props) {
  const token = localStorage.getItem("token");

  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    logoutUser();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/logout");
  };

  return (
    <nav className="nav text-lg px-4 py-4 bg-black">
      <Link className="brand" to="/">
        <img
          className="logo"
          src="https://www.seekpng.com/png/full/70-707290_svg-black-and-white-arcade-clipart-arcade-machine.png"
          alt="arcade game"
        />
        <h1 className="font-extrabold text-2xl text-stone-300">Bored? Game!</h1>
      </Link>
      {token ? (
        <ul className="links font-semibold text-stone-300">
          <li>
            <Link to="/saved">Saved</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/account/:id">Account Information</Link>
          </li>
          <li>
            <Link
              to="/logout"
              onClick={(e) => {
                handleLogout(e);
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="links font-semibold text-stone-300">
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
      )}
    </nav>
  );
}
