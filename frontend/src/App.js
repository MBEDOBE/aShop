import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import logo from './logo.svg';
import './App.css';
import data from './data';
import HomeScreen from "./screens/HomeScreen";


function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
                </button>
          <a href="index.html">aShop</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>

          <li>
            <a href="index.html">Shirts</a>
          </li>

        </ul>
      </aside>
      <main className="main">
        <div className="content">
            <Route path="/products/:id" component={ProductScreen}></Route>
            <Route path="/" exact={true} component={HomeScreen}></Route>
          <ul className="products">
            {
              data.products.map(product =>
                <li>
                  <div className="product">
                    <img className="product-image" src={product.image} alt="product" />
                    <div className="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">GHC{product.price}</div>
                    <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                  </div>
                </li>
                )
            }
           
            

          </ul>
        </div>

      </main>
      <footer className="footer">
        All right reserved by Rein IT &copy; 2020.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
