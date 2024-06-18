import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Bai1/Home";
import Contact from "./components/Bai2/Contact";
import Login from "./components/Bai3/Login";
import Register from "./components/Bai4/Register";
import NotFound from "./components/Bai5/NotFound";
import Home2 from "./components/Bai6/Home2";
import Contact2 from "./components/Bai6/Contact2";
import HomePage from "./components/Bai6/HomePage";
import Product from "./components/Bai7/Product";
import Detail from "./components/Bai7/Detail";
import Homee from "./components/Bai7/Homee";

export default function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes> */}

      {/* <Routes>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes> */}

      {/* <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes> */}

      {/* <Routes>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes> */}

      {/* <Routes>
        <Route path="" element={<HomePage></HomePage>}>
          <Route path="/" element={<Home2></Home2>}></Route>
          <Route path="/contact" element={<Contact2></Contact2>}></Route>
        </Route>
      </Routes> */}

      <Routes>
        <Route path="" element={<Homee></Homee>}>
          <Route path="/homepage2" element={<HomePage></HomePage>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
