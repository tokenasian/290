import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import stores from './data/stores';
import items from './data/items';
import React from 'react';

import Navigation from "./components/Navigation.js";

import HomePage from "./pages/HomePage.js";
import OrderPage from "./pages/OrderPage.js";
import StoresPage from "./pages/StoresPage.js";


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Nook's Cranny</h1>
          <p>A convenience store.</p>
        </header>
        <main>
          <Route path="/index.html" exact>
            <HomePage/>
          </Route>
          <Route path="/order">
            <OrderPage items={items}/>
          </Route>
          <Route path="/stores">
            <StoresPage stores={stores}/>
          </Route>
        </main>
        <footer class="page-footer">
          <p><Navigation /></p>
          <p><cite>Matthew Armstrong.</cite></p>
          <p>CS 290, Assignment 4.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;