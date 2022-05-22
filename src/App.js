import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
