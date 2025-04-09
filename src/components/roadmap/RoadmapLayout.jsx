import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const RoadmapLayout = () => {
  return (
    <div>
      <div className="pl-[6%] pb-10 shadow-lg shadow-gray-600">
        <ul className="flex pt-10 gap-10">
          <li className="link-style" data-text="Programming">
            <NavLink
              to={"/roadmap"}
              relative="path"
              end
              className={({ isActive }) =>
                isActive ? "active-roadmap-nav" : "roadmap-nav"
              }
            >
              Programming
            </NavLink>
          </li>
          <li className="link-style">
            <NavLink
              to={"/roadmap/maths"}
              className={({ isActive }) =>
                isActive ? "active-roadmap-nav" : "roadmap-nav"
              }
            >
              Maths
            </NavLink>
          </li>
          <li className="link-style">
            <NavLink
              to={"/roadmap/electronics"}
              className={({ isActive }) =>
                isActive ? "active-roadmap-nav" : "roadmap-nav"
              }
            >
              Electronics
            </NavLink>
          </li>
          <li className="link-style">
            <NavLink
              to={"/roadmap/economics"}
              className={({ isActive }) =>
                isActive ? "active-roadmap-nav" : "roadmap-nav"
              }
            >
              Economics
            </NavLink>
          </li>
          <li className="link-style">
            <NavLink
              to={"/roadmap/finance"}
              className={({ isActive }) =>
                isActive ? "active-roadmap-nav" : "roadmap-nav"
              }
            >
              Finance
            </NavLink>
          </li>
          <li className="link-style">
            <NavLink
              to={"/roadmap/cryptoeconomics"}
              className={({ isActive }) =>
                isActive ? "active-roadmap-nav" : "roadmap-nav"
              }
            >
              Cryptoeconomics
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="pt-5 p-10">
        <Outlet />
      </div>
    </div>
  );
}
