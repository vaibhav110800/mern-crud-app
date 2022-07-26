import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const User = (props) => {
  const history = useNavigate();
  const { _id, fname, lname, email, age, phone } = props.user;

  const DeleteConfirmation = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteHandler(),
        },
        {
          label: "No",
          onClick: () => history("/"),
        },
      ],
    });
  };

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/api/${_id}`)
      .then((res) => res.data)
      .then(() => window.location.reload());
  };

  return (
    <div className="card">
      <h3>
        Name: {fname} {lname}
      </h3>
      <p>E-mail: {email}</p>
      <h3>Age: {age}</h3>
      <h3>Phone: {phone}</h3>

      <div className="user-button">
        <button>
          <Link style={{ color: 'black', textDecoration:'none' }} to={`/${_id}`}>Update</Link>
        </button>
        <button onClick={DeleteConfirmation}>Delete</button>
      </div>
    </div>
  );
};

export default User;
