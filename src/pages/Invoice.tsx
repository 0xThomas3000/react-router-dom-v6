import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { invoices } from '../data/invoices';

const Invoice = () => {
  const params = useParams<{ invoiceId: string }>();
  const navigate = useNavigate();

  const invoice = invoices.find(
    invoice => invoice.id.toString() === params.invoiceId
  );

  useEffect(() => {
    if (!invoice) navigate('/invoices')
  }, [invoice, navigate]);

  return (
    <h2 style={{ padding: '1rem' }}>
      {/* {
        invoice 
          ? `Invoice #${invoice?.id} for ${invoice?.name}` 
          : 'No Invoice found!!!'
      } */}
      Invoice #{invoice?.id} for {invoice?.name}
    </h2>
  );
}

export default Invoice