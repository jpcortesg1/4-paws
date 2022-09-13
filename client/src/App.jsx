import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Dashboard from './pages/supplier/Supplier.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/services/services";
import Products from "./pages/products/Products";
import Product from "./pages/product/product";
import Login from "./pages/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
}

export default App;
