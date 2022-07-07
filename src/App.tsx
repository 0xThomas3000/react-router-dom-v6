import React from "react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <nav style={{ borderBottom: "1px solid black", paddingBottom: "1rem" }}>
      <h1>Book keeper</h1>
      <Link to="/invoices">Invoices</Link>
      {" | "}
      <Link to="/expenses">Expenses</Link>
      {" | "}
      <Link to="/shoes">Shoes</Link>
    </nav>
  );
};

export default App;
