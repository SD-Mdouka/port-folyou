import React from "react";
/*Satrt page de component to execut */

import SocialFollow from "./component/SocialFollow";

import Home from "./component/Home";

import About from "./component/About";

import Navbar from "./component/Navbar";

/*End page */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Works from "./component/Works";

function App() {
  return (
    <div className="bg-[url('https://bostamireact.ibthemespro.com/static/media/bg.54122ef3ac6eced211d3.jpg')] min-h-screen  bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
      {/* Start Body content */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Works />} />
          <Route path="/contact" element={<SocialFollow />} />
        </Routes>
      </BrowserRouter>

      {/* End Body content */}
    </div>
  );
}

export default App;
