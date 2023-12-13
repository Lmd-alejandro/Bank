import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/home";
import Login from "../src/pages/Login";
import { DataContext, DataProvider } from "./components/dataContext";

function App({info}) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login info={info}/>} />
          <Route path="/home" element={<Home info={info} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
