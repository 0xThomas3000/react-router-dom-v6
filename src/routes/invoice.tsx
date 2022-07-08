import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  if (params.invoiceId === undefined) {
    console.log(params.invoiceId);
    return null;
  }

  let invoice = getInvoice(parseInt(params.invoiceId, 10)); // current invoice object

  if (invoice === undefined) return null;

  function deleteInvoiceHandler() {
    deleteInvoice(invoice?.number);
    navigate("/invoices" + location.search);
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name} : {invoice.number}
      </p>
      <p>Due date: {invoice.due}</p>
      <button type="button" onClick={deleteInvoiceHandler}>
        Delete
      </button>
    </main>
  );
}
