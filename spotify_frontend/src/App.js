import "./output.css";
import {useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./routes/Login.js";

function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
          <Routes>
              <Route path="/login" element ={<LoginComponent/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );  
}

export default App;
