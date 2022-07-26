import './App.css';
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/add" element={<AddUser />} exact />
          <Route path="/:id" element={<UpdateUser />} exact />
        </Routes>
      </main>
    </div>
  );
}

export default App;
