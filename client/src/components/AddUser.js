import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddUser() {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/", {
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      age: data.age,
      phone: data.phone,
    });
    setData({
      fname: "",
      lname: "",
      email: "",
      age: "",
      phone: "",
    });
  };

  const handleChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="fname"
          id="fname"
          value={data.fname}
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="lname"
          id="lname"
          value={data.lname}
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="email"
          placeholder="email"
          id="email"
          value={data.email}
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="number"
          placeholder="age"
          id="age"
          value={data.age}
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="text"
          placeholder="phone"
          id="phone"
          value={data.phone}
        />{" "}
        <br />
        <div className="bottom-button">
          <button className="submit" variant="contained" type="submit">
            Add User
          </button>
          <Link
            to="/"
            style={{ color: "red", textDecoration: "none" }}
            className="cancel"
          >
            CANCEL
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
