import React from "react";
import { NavLink } from "react-router-dom";
import ActiveLink from "./Activelink";

export default function () {
  return (
    <>
      <div className="LinkDiv">
        {/* <NavLink className="NavLink" to={`ReactRouterPractice/`}>
          Home
        </NavLink>
        <NavLink className="NavLink" to={`ReactRouterPractice/about`}>
          About
        </NavLink>
        <NavLink className="NavLink" to={`ReactRouterPractice/skills`}>
          Skills
        </NavLink>
        <NavLink className="NavLink" to={`ReactRouterPractice/contact`}>
          Contact
        </NavLink>
        <NavLink className="NavLink" to={`ReactRouterPractice/blogs`}>
          Blogs
        </NavLink> */}

        <ActiveLink to="ReactRouterPractice/">Home</ActiveLink>
        <ActiveLink to="ReactRouterPractice/about">About</ActiveLink>
        <ActiveLink to="ReactRouterPractice/skills">Skills</ActiveLink>
        <ActiveLink to="ReactRouterPractice/contact">Contact</ActiveLink>
        <ActiveLink to="ReactRouterPractice/blogs">Blogs</ActiveLink>
      </div>
    </>
  );
}
