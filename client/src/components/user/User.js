import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";

const User = (props) => {
  const history = useNavigate();
  const { _id, fname, lname, email } = props.user;
  
  // const userHandler = async () => {
  //   await axios
  //     .get(`http://localhost:5000/${_id}`)
  //     .then(()=>history(""))
  // };

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/${_id}`)
      .then((res) => res.data)
      .then(() => history("/add"))
      .then(() => history("/"));
  };

  return (
    <div className="card" >
        <img src="" alt="" />
        <h3>Name: {fname} {lname}</h3>
        <p>E-mail: {email}</p>
        
        <div className="user-button">
          <Button className="button" LinkComponent={Link} to={`/${_id}`} sx={{ mt: "auto" }}>Update</Button>
          <Button className="button" color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>Delete</Button>
          <Button className="button" LinkComponent={Link} to={`/user/${_id}`} sx={{ mt: "auto" }}>View User</Button>
        </div>
    </div>
  );
};

export default User;
