import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, counter } from "react-bootstrap";
import Header from "./components/header/Header";
import Postheader from "./components/post/Postheader";
import Userprofile from "./components/profile/Userprofile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Postheader />} />
        <Route path="/Userprofile/:userId" element={<Userprofile />} />
      </Routes>
    </div>
  );
}

export default App;
