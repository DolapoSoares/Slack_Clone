import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar'

import styled from 'styled-components'

import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";




function App() {
  return (
    <div className="app">
    <BrowserRouter>
       <AppBody>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
       </AppBody>
    </BrowserRouter>
    </div>
  );
}



export default App;

const AppBody = styled.div`
  display: flex;
`
