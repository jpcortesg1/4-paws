import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Services from "./pages/services/Services";
import Products from "./pages/products/Products";

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
