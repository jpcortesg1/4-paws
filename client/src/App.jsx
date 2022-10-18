import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import Product2 from "./pages/product/Product2";
import Product3 from "./pages/product/Product3";
import Product4 from "./pages/product/Product4";
import Product5 from "./pages/product/Product5";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
