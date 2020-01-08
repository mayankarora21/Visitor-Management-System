import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import 'tachyons';
import Routes from './components/Routes/Routes';
import AppBar from './components/AppBar/AppBar';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <AppBar></AppBar>
            <Routes></Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
