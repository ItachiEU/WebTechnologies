import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import classes from "./style.module.css";

export default function Navbar() {

  return (
    <div style={{ width: "100%"}}>
        <AppBar position="static" style={{ background: "cadetblue"}}>
         <CssBaseline />
         <Toolbar>
           <Typography variant="h4" style={{flexGrow: "1"}}>
             Menu
           </Typography>
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
               <Link to="/summary" className={classes.link}>Summary</Link>
               <Link to="/invoices" className={classes.link}>Invoices</Link>
               <Link to="/expenses" className={classes.link}>Expenses</Link>
          </div>
         </Toolbar>
      </AppBar>
      <Outlet/>
     </div>
  );
}