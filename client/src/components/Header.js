import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const[showAddUser,setShowAddUser]=useState(true);
  
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#2E86C1" }} position="sticky">
        <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
          
          <NavLink to="/" onClick={()=>setShowAddUser(true)} style={{ color: "white",textDecoration:"none" }}>
            <Typography>
              Home
            </Typography>
          </NavLink>

          <NavLink to="/add"  style={{ color: "white",textDecoration:"none",display:showAddUser?"block":"none"} }>
              <Typography onClick={()=>setShowAddUser(false)}>
                Add User
              </Typography>
            </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
