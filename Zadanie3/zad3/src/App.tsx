import React from 'react';
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker';
import { RecoilRoot } from 'recoil';
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.container}>
      <RecoilRoot>
        <ExpenseTracker/>
      </RecoilRoot>
    </div>
  );
}

export default App;
