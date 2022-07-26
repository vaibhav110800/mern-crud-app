import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateUser(props) {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();

  useEffect(() => {
    (async () => {
      await axios
        .get(`http://localhost:5000/api/${id}`) // get all data of users to fill input fields
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
        // .then((data) => console.log(data.user));
    })();
    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:5000/api/${id}`, {
        fname: inputs.fname,
        lname: inputs.lname,
        email: inputs.email,
        age: inputs.age,
        phone: inputs.phone
      })
      history("/");
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value}));
  };

  return (
    <div>
    { inputs && (
        <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          value={inputs.fname}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="fname"
        /> <br />
        
        <label>Last Name</label>
        <input
          type="text"
          value={inputs.lname}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="lname"
        /><br />

        <label>E-mail</label>
          <input 
            type="email"
            id="userEmail"
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
          /><br />

        <label>Age</label>
          <input required
            value={inputs.age}
            onChange={handleChange}
            margin="normal"
            type="number"
            fullWidth
            variant="outlined"
            name="age"
          /><br />

          <label>Phone Number</label>
          <input required
            value={inputs.phone}
            onChange={handleChange}
            margin="normal"
            type="text"
            fullWidth
            variant="outlined"
            name="phone"
          /><br />

            <div className="bottom-button">
              <button className="submit" variant="contained" type="submit">
                Add User
              </button>
              <Link to="/" style={{ color: 'red', textDecoration:'none' }} className="cancel">
                CANCEL
              </Link>
            </div>
        </form>
    )}
  </div>
  );
  
};

export default UpdateUser;
