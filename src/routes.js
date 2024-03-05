import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./page/main/main";
import { Roof } from "./page/roof/roof";
import { Beds } from "./page/beds/beds";
import { Facade } from "./page/facade/facade";
import { Product } from "./page/product/product";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/roof" element={<Roof />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/facade" element={<Facade />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};
