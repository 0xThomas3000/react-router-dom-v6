import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

const Invoice = () => {
  let params = useParams();

  if (params.invoiceId === undefined) {
    console.log(params.invoiceId);
    return null;
  }

  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  if (invoice === undefined) return null;

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due date: {invoice.due}</p>
    </main>
  );
};

export default Invoice;
