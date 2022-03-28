import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import Expenses from './components/Expenses/Expenses';
import ExpenseSummary from './components/ExpenseSummary/ExpenseSummary';
import Invoices from './components/Invoices/Invoices';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="summary" element={<ExpenseSummary />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
          </Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);