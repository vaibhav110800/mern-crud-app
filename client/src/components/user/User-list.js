import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./User.css";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdUpdate } from "react-icons/md";

const UserList = (props) => {
  const history = useNavigate();
  
  const { _id, fname,lname, email } = props.user;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/${_id}`)
      .then((res) => res.data)
      .then(() => history("/add"))
      .then(() => history("/"));
  };

  return (
      <>
      <div className="user-list">
          
          <tbody className="table-body">
            <td className="table-body1">{fname} {lname}</td>
            <td className="table-body2">{email}</td>
            <td className="table-body3">
              <Button className="button" LinkComponent={Link} to={`/user/${_id}`} sx={{ mt: "auto" }}><AiOutlineUser className="button-inline" /></Button>
              <Button className="button" LinkComponent={Link} to={`/${_id}`} sx={{ mt: "auto" }}><MdUpdate className="button-inline" /></Button>
              <Button className="button" color="error" onClick={deleteHandler} sx={{ mt: "auto" }}><AiFillDelete className="button-inline" /></Button>
            </td>
          </tbody>
      </div>
        
      </>
            
  );
};

export default UserList;
