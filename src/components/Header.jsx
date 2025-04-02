import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="mt-7 shadow-lg shadow-[#f35b87] pb-2">
      <ol className="flex">
        <li className="text-[#fde670] text-5xl pl-10 header">
          <Link to="/">
            <span className="jump" style={{ animationDelay: "0s" }}>
              d
            </span>
            <span className="jump" style={{ animationDelay: "0.1s" }}>
              a
            </span>
            <span className="jump" style={{ animationDelay: "0.2s" }}>
              i
            </span>
            <span className="jump" style={{ animationDelay: "0.3s" }}>
              l
            </span>
            <span className="jump" style={{ animationDelay: "4s" }}>
              y
            </span>
            &nbsp; &nbsp;
            <span className="jump" style={{ animationDelay: "5s" }}>
              t
            </span>
            <span className="jump" style={{ animationDelay: "0.6s" }}>
              r
            </span>
            <span className="jump" style={{ animationDelay: "0.7s" }}>
              a
            </span>
            <span className="jump" style={{ animationDelay: "0.8s" }}>
              c
            </span>
            <span className="jump" style={{ animationDelay: "0.9s" }}>
              k
            </span>
            <span className="jump" style={{ animationDelay: "1s" }}>
              e
            </span>
            <span className="jump" style={{ animationDelay: "1.1s" }}>
              r
            </span>
          </Link>
        </li>
        <li className="active:translate-y-1">
          <NavLink
            to="/tasks"
            className={({isActive}) => (isActive ? "active-nav nav" : "nav")}
          >
            Tasks
          </NavLink>
        </li>
        <li className="active:translate-y-1">
          <NavLink
            to="/stats"
            className={({isActive}) => (isActive ? "active-nav nav" : "nav")}
          >
            stats
          </NavLink>
        </li>
      </ol>
    </div>
  );
};
