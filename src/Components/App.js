import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Blogs from "./Blogs";
import ErrorPage from "./ErrorPage";
import Menu from "./Menu";

export default function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route exact path="ReactRouterPractice/" element={<Home />} />
        <Route
          exact
          path="ReactRouterPractice/about"
          element={<About name="vivek Kumar" />}
        />
        <Route exact path="ReactRouterPractice/skills" element={<Skills />} />
        <Route
          exact
          path="ReactRouterPractice/skills/:fname/:lname"
          element={<Skills />}
        />
        <Route exact path="ReactRouterPractice/contact" element={<Contact />} />
        <Route exact path="ReactRouterPractice/blogs" element={<Blogs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
