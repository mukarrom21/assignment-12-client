import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/Footer";
import Purchase from "./pages/Products/Purchase ";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import RequireAuth from "./pages/Login/RequireAuth";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/product/:productId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<Home></Home>}></Route>
      </Routes>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
