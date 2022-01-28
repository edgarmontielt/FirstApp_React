import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fundamentos from "./pages/Fundamentos";
import GoTAPI from "./pages/GoTAPI";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <header className="header">Movies</header>
      <div className="br"></div>
      <main class="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fundamentos" element={<Fundamentos />} />
          <Route path="/got" element={<GoTAPI />} />
        </Routes>
      </BrowserRouter>
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default App;
