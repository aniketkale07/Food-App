import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router';
import About from './pages/About/About';
function App() {

  return (
  
    <Fragment>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </Fragment>
     
  );
}

export default App;
