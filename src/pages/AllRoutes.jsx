import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/details" element={<Details />}></Route>
    </Routes>
  );
};

export default AllRoutes;
