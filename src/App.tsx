import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>BOOK KEEPER</h1>
      <nav style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}>
        <Link to="/invoices">Invoices</Link>
        {" | "}
        <Link to="/expenses">Expenses</Link>
        {" | "}
        <Link to="/shoes">Shoes</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
