import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Master from "./Master";
import About from "./About";
import Blog from "./Blog";

function App() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold mb-10">University</h1>
      <ul className="flex space-x-3 justify-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="about/2">Blog 2</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Master />} />
        <Route path="about/" element={<About />}>
          {/* <Route path=":id" element={<Blog/>}/ > */}
          {/* <Route path="blog" element={<Blog/>}/ > */}
        </Route>
        <Route path="about/:aboutId" element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
