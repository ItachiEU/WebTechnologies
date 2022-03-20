import React from 'react';
import logo from './logo.svg';
import ExpenseTracker from './components/ExpenseTracker';
  
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ExpenseTracker/>
    </RecoilRoot>
  );
}

export default App;
