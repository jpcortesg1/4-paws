import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Services from "./pages/services/services";
import Products from "./pages/products/Products";
import Product from "./pages/product/product";
import Login from "./pages/login/Login";
import Supplier from "./pagesS/Supplier/Supplier";
import ListS from "./pagesS/list/List";
import NewS from "./pagesS/new/New";
import SingleS from "./pagesS/single/Single";
import LoginS from "./pagesS/loginS/LoginS";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="services" element={<Services />} />
            <Route path="products" element={<Products />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route path="supplier" >
              <Route index element={<Supplier/>}/>
              <Route path="loginS" element={<LoginS/>}/>
              <Route path="user">
                <Route index element={<ListS/>}/>
                <Route path=":userid" element={<SingleS/>}/>
                <Route path="new" element={<NewS/>} />
              </Route>
              <Route path="Products">
                <Route index element={<ListS/>}/>
                <Route path=":productId" element={<SingleS/>}/>
                <Route path="new" element={<NewS/>} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
