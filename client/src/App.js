import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Users from "./components/user/Users";
import UpdateUser from "./components/user/UpdateUser";
import SingleUser from "./components/SingleUser";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/add" element={<AddUser />} exact />
          <Route path="/:id" element={<UpdateUser />} exact />
          <Route path="/user/:id" element={<SingleUser />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
