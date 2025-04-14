import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {

  return (
    <div className="py-5 bg-[rgb(26,26,26)] shadow-2xs shadow-gray-70 w-full h-full">
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
    </div>
  );
};
