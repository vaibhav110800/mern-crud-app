import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "./User";

const fetchHandler = async () => {
  return await axios.get("http://localhost:5000/api/").then((res) => res.data);
};

const Users = () => {
  const [users, setUsers] = useState('');
  
  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users)); // it adds data from the users array from backend
  }, []);

  // const [text,setText]=useState('')
  // const handleChange=(e)=>{
  //   setText('')
  // }

  return (
    <div>
      
      {/* <div>enter some text here: <input type="text" onChange={handleChange}  /></div>
      <div>{text}</div> */}
      <ul>
        {users && // <-- when we have the users then we can render users on website
          users.map((user, i) => (
            <li key={i}>
              <User user={user} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Users;
