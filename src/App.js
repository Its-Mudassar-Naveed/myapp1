import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, counter } from "react-bootstrap";
import Header from "./components/header/Header";
import Postheader from "./components/post/Postheader";

function App() {
  return (
    <div>
      <Header />
      <Postheader />
    </div>
  );
}

export default App;
