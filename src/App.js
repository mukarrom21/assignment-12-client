import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Purchase from "./pages/Products/Purchase ";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
        <Route path="/*" element={<Home></Home>}></Route>
      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
