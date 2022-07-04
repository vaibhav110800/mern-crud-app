import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Buffer } from "buffer";

function SingleUser() {
  const [inputs, setInputs] = useState();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/${id}`) // get all data of users to fill input fields
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
      // .then((data) => console.log(data.user));
    };
    fetchHandler();
  }, [id]);

  // let dob;
  // let x=inputs.age;
  // let userYear=x.split('-')[0];
  // let userMonth=x.split('-')[1];
  // let userDay=x.split('-')[2];

  // let today=new Date();
  // var year=(today.getFullYear());
  // var month=(today.getMonth());
  // var day=(today.getDay());

  // if(userMonth==month || userMonth<=month){
  //     dob=((year-userYear));
  // }
  // else{
  //     dob=((year-userYear)-1);
  // }

  var today=new Date();
  var year=(today.getFullYear());

  return (
    <div className="singleUser">
      {inputs && (
        <div>
          <img
            src={`data:image/png;base64,${Buffer.from(
              inputs.photo.data
            ).toString("base64")}`}
            alt=""
            className="single-img"
          />
          <h3>First Name: {inputs.fname}</h3>
          <h3>Last Name: {inputs.lname}</h3>
          <p>E-mail: {inputs.email}</p>
          <h4>Age: {(year-(inputs.age.split('-')[0]))}</h4>
          {/* <h4>Age: {dob}</h4> */}
          <h4>DOB: {inputs.age}</h4>
          <h4>Phone: {inputs.phone}</h4>
        </div>
      )}
    </div>
  );
}

export default SingleUser;
