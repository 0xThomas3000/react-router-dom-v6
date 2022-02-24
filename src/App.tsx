import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Book keeper</h1>
      <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
        <Link to='/invoices'>Invoices</Link> |{' '}
        <Link to='/expenses'>Expenses</Link>
      </nav>
    </div>
  );
}

export default App;
