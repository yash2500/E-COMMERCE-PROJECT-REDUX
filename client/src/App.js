import "./App.css";

import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Cart from "./components/UI/Cart";
import Footer from "./components/UI/Footer";
import Home from "./pages/Home";
import Login from "./components/UI/Login";
import Navbar from "./components/UI/Navbar";
import Page404 from "./pages/Page404";
import Product from "./components/UI/Product";
import Products from "./components/UI/Products";
import Register from "./components/UI/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
