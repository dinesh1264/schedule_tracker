import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="py-5 bg-[#1A1A1A] shadow-2xs shadow-gray-700">
      <nav>
        <ol className="flex items-baseline-last justify-between mx-15 header-list">
          <li className="header text-6xl">
            <Link to="/" className=" p-0 m-0 neon-cyan">
              Track It
            </Link>
          </li>
          <li className="active:translate-y-1">
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                isActive ? "active-nav nav" : "nav"
              }
            >
              Tasks
            </NavLink>
          </li>
          <li className="active:translate-y-1">
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive ? "active-nav nav" : "nav"
              }
            >
              Stats
            </NavLink>
          </li>
          <li className="active:translate-y-1">
            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                isActive ? "active-nav nav" : "nav"
              }
            >
              Roadmap
            </NavLink>
          </li>
        </ol>
      </nav>
    </div>

    
  );
};
