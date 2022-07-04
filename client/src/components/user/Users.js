import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import User from "./User";
import UserList from "./User-list";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const URL = "http://localhost:5000/";

const fetchHandler = async () => {
  return await axios.get(URL)
  .then((res) => res.data);
};

const Books = () => {
  const [users, setUsers] = useState();
  const [alignment, setAlignment] = React.useState('web');
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [view,setView]=useState("card");
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users)); // it adds data 
  }, []);
  
  
  return (
    <div>

      <div className="view-button">
      <ToggleButtonGroup
        // color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        >
          <ToggleButton value="card" onClick={()=>setView("card")}>Card view</ToggleButton>
          <ToggleButton value="list" onClick={()=>setView("list")}>List View</ToggleButton>
      </ToggleButtonGroup>
      </div>
      

      {view==='list' && 
      <table className="list">
        <thead>
            <tr>
              <th className="table-header1">Name</th>
              <th className="table-header2">Email</th>
              <th className="table-header3">Actions</th>
            </tr>
          </thead>
        <tbody>
          {users.map((user,i)=>(
            <tr className="table-row" key={i}>
              <UserList user={user} />
            </tr>
          ))}
        </tbody>  
      </table>}

      {view==='card' && <ul>
        {users &&  // <-- when we have the users then we can render users on website
          users.map((user, i) => (
            <li key={i}>
              <User user={user} />
            </li>
          ))}
      </ul>}

    </div>
  );
};

export default Books;
