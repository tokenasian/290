import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    
    <nav>
        <Link to="/index.html">Home</Link>
        <Link to="/order">Order</Link>
        <Link to="/stores">Stores</Link>
    </nav>

  );
}
export default Navigation;