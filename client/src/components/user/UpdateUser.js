import {Box,Button,FormLabel,TextField} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const history = useNavigate();
  
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/${id}`)  // get all data of users to fill input fields
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
        // .then((data) => console.log(data.user));
         // all input tags are filed by prev
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/${id}`, {
        fname: String(inputs.fname),
        lname: String(inputs.lname),
        email: String(inputs.email),
        age: Number(inputs.age),
        phone: Number(inputs.phone)
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {inputs && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            maxWidth={700}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={"auto"}
            marginRight="auto"
            marginTop={10}
          >
            <FormLabel>First Name</FormLabel>
        <TextField
          type="text"
          value={inputs.fname}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="fname"
        />
        
        <FormLabel>Last Name</FormLabel>
        <TextField
          type="text"
          value={inputs.lname}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="lname"
        />

        <FormLabel>E-mail</FormLabel>
          <TextField 
            type="email"
            id="userEmail"
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="email"
          />

        <FormLabel>Age</FormLabel>
          <TextField required
            value={inputs.age}
            onChange={handleChange}
            margin="normal"
            type="number"
            fullWidth
            variant="outlined"
            name="age"
          />

          <FormLabel>Phone Number</FormLabel>
          <TextField required
            value={inputs.phone}
            onChange={handleChange}
            margin="normal"
            type="number"
            fullWidth
            variant="outlined"
            name="phone"
          />

            <div className="bottom-button">
              <Button className="submit" variant="contained" type="submit">
                Add User
              </Button>
              <Link to="/" className="cancel">
                CANCEL
              </Link>
            </div>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
