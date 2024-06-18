import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AddPage from "./Pages/AddPage";

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/add" element={<AddPage/>}></Route>
              <Route path="/error" element={<div>ERROR</div>}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
