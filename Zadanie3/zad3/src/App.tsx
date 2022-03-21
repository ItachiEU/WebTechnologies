import React from 'react';
import ExpenseTracker from './components/ExpenseTracker';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ExpenseTracker/>
    </RecoilRoot>
  );
}

export default App;
