import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {

  return (
    <div className="py-5 bg-[#1A1A1A] shadow-2xs shadow-gray-700">
      <nav className="phone-nav">
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

        <div className="phone-div">
          <input type="checkbox" id="menu-toggle" className="peer hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <RxHamburgerMenu className="text-5xl text-teal-400 inline-block mb-4" />
          </label>

          <div className={`absolute peer-checked:block hidden px-2 pt-2 pb-2 mt-2 text-clip bg-black right-10 top-10`}>
            <ul className="flex flex-col space-y-2 px-4 py-4">
              <li>
                <NavLink
                  to="/tasks"
                  className={({ isActive }) =>
                    isActive ? "active-nav nav" : "nav"
                  }
                >
                  Tasks
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/stats"
                  className={({ isActive }) =>
                    isActive ? "active-nav nav" : "nav"
                  }
                >
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/roadmap"
                  className={({ isActive }) =>
                    isActive ? "active-nav nav" : "nav"
                  }
                >
                  Roadmap
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
