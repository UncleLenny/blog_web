import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div>
      <div className="mainNav">
        <div className="eighty">
        <p>WELCOME, Admin</p>
          <ul>
              <Link to="/Dashboard" className="links">
            <li>
                Home
            </li>
              </Link>
              <Link to="/Stories" className="links">
            <li>
                Stories
            </li>
              </Link>
              <Link to="/Users" className="links">
            <li>
                Accounts
            </li>
              </Link>
              <Link to="/NewStory" className="links">
            <li>
                Create Story
            </li>
              </Link>
              <Link to="/NewUsers" className="links">
            <li>
                New Users
            </li>
              </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
