import { Button, FormLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
// import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const AddUser = () => {
  const history = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [image, setImage] = useState("https://via.placeholder.com/500x500.png?text=Upload+Image+Here");
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    age: "",
    phone: "",
    photo: "",
  });

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setInputs({
      fname: "",
      lname: "",
      email: "",
      age: "",
      phone: "",
      photo: "",
    });
    setFormErrors({});
  };

  const handleChange = (e) => {
    setInputs(() => ({ ...inputs, [e.target.name]: e.target.value }));
    console.log(e.target.name, ":", e.target.value);
  };

  const onUpload = (e) => {
    setImage(e.target.files[0]); // get the fileName
    const file = e.target.files;
    if (file.length > 0) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(file[0]);
    }
  };

  const sendRequest = async () => {
    let formData = new FormData();
    formData.append("fname", String(inputs.fname));
    formData.append("lname", String(inputs.lname));
    formData.append("email", String(inputs.email));
    formData.append("age", String(inputs.age));
    formData.append("phone", Number(inputs.phone));
    formData.append("profile", image);

    await axios
      .post("http://localhost:5000/", formData)
      //.then((res) => res.data);

      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          onOpenModal();
          console.log("success");
        } else {
          alert("error");
        }
      })
      .catch((e) => {
        alert("Error");
        console.log("e:", e);
      });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = validate(inputs).isError;
    if (isError) {
      setFormErrors(validate(inputs));
    } else {
      sendRequest().then(() => history("/add"));
    }
  };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //   console.log(inputs);
  //   }
  // }, [formErrors]);

  const validate = (values) => {
    const errors = { isError: false };

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fname) {
      errors.fname = "First name is required!";
      errors.isError = true;
    } else if (values.fname.trim() === "") {
      errors.fname = "First name is not valid";
      errors.isError = true;
    }

    if (!values.lname) {
      errors.lname = "Last name is required!";
      errors.isError = true;
    } else if (values.lname.trim() === "") {
      errors.lname = "Last name is not valid";
      errors.isError = true;
    }

    if (!values.email) {
      errors.email = "Email is required!";
      errors.isError = true;
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      errors.isError = true;
    }

    if (!values.age) {
      errors.age = "age is required!";
      errors.isError = true;
    } else if (values.age.trim() === "") {
      errors.age = "This is not a valid age";
      errors.isError = true;
    }

    if (!values.phone) {
      errors.phone = "phone is required!";
      errors.isError = true;
    } else if (values.phone.trim() === "") {
      errors.phone = "This is not a valid phone number";
      errors.isError = true;
    } else if (values.phone.length !== 10) {
      errors.phone = "This is not a valid phone number";
      errors.isError = true;
    }

    return errors;
  };
  // const closeModel=()=>{
  //   window.location.reload(true);
  // }
  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Successfully Saved</h2>
      </Modal>

      <form onSubmit={handleSubmit} style={{ marginBottom: "5%" }}>
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
          {/* <FormLabel>photo</FormLabel> 
        <TextField required
          type="file" 
          accept=".png, .jpg, .jpeg"
          name="photo"
          onChange={handlePhoto} /> */}

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
          <p>{formErrors.fname}</p>

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
          <p>{formErrors.lname}</p>

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
          <p>{formErrors.email}</p>

          <FormLabel>Age</FormLabel>
          <TextField
            value={inputs.age}
            onChange={handleChange}
            margin="normal"
            type="date"
            fullWidth
            variant="outlined"
            name="age"
          />
          <p>{formErrors.age}</p>

          <FormLabel>Phone Number</FormLabel>
          <TextField
            value={inputs.phone}
            onChange={handleChange}
            margin="normal"
            type="number"
            fullWidth
            variant="outlined"
            name="phone"
          />
          <p>{formErrors.phone}</p>

          <FormLabel>Profile Pic</FormLabel>
          <TextField
            id="profile"
            name="profile"
            type="file"
            accept="image/*"
            onChange={onUpload}
            required
            fullWidth
            variant="outlined"
            margin="normal"
          />
          {/* <input
            id="profile"
            name="profile"
            type="file"
            accept="image/*"
            onChange={onUpload}
            required
          /> */}

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
    </div>
  );
};

export default AddUser;
