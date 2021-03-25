import React from "react";
import "./App.css";
import "./navbar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  MemoryRouter,
} from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav  className="nav">
        <ul className="side">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/update" className="link">
              Update
            </Link>
          </li>
          <li>
            <Link to="/users" className="link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/add" className="link">
              Add
            </Link>
          </li>
          {localStorage.getItem("login") ? (
            <li>
              <Link to="/logout" className="link">
                Log Out
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
