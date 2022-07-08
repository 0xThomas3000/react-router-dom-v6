import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoice from "./routes/invoice";
import Invoices from "./routes/invoices";
import Shoes from "./routes/shoes";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <h2>Select an Invoice</h2>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route path="shoes" element={<Shoes />} />
          <Route
            path="*"
            element={<main style={{ padding: "1rem" }}>404 | Not found</main>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
