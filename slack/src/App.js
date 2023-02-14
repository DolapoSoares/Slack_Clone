import React from 'react';
import './App.css';
import Header from './Components/Header';

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";




function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
