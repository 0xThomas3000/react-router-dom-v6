import React, { ChangeEvent } from "react";
import { Link, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getInvoices } from "../data";

const Invoices = () => {
  let invoices = getInvoices();
  let location = useLocation();

  const [inputValue, setInputValue] = useSearchParams("");

  function searchInvoice(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value) setInputValue({ filter: value });
    else setInputValue({});
  }

  function QueryNavLink({ to, ...props }: any) {
    return <Link to={to + location.search} {...props} />;
  }

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ borderRight: "1px solid black", padding: "1.5em" }}>
        <input
          type="text"
          onChange={searchInvoice}
          value={inputValue.get("filter") || ""}
        />
        {invoices
          .filter((invoice) => {
            let filter = inputValue.get("filter");
            if (!filter) return true;
            let invoiceName = invoice.name.toLowerCase();
            return invoiceName.startsWith(filter.toLowerCase());
          })
          .map((invoice, index) => (
            <QueryNavLink
              key={index}
              style={{ display: "block", margin: "1rem 0" }}
              to={`/invoices/${invoice.number}`}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
