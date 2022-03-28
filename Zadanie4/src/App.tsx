import React from 'react';
import { Outlet } from 'react-router';
import classes from "./App.module.css";
import Navbar from './routes/navbar';

function App() {
  return (
    <div className={classes.container}>
      <Navbar />
    </div>
  );
}

export default App;
