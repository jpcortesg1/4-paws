import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Services from "./pages/services/services";
import Products from "./pages/products/Products";
import Product from "./pages/product/product";
import Login from "./pages/login/Login";
import Supplier from "./pagesS/Supplier/Supplier";
import ListE from "./pagesS/list/List";
import ListP from "./pagesS/listProduct/ListP";
import New from "./pagesS/new/New";
import SingleS from "./pagesS/single/Single";
import SProducts from "./pagesS/Sproducts/SProducts";
import Home2 from "./pagesS/home2/Home2";
import { productInputs, userInputs } from "./formSource";

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
              <Route path="home" element={<Home2/>}/>
              <Route path="manage-Employes">
                <Route index element={<ListE/>}/>
                <Route path=":userid" element={<SingleS/>}/>
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />}/>
              </Route>
              <Route path="manage-Products">
                <Route index element={<ListP/>}/>
                <Route path=":productId" element={<SProducts/>}/>
                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />}/>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
