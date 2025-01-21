import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop'; 
import Menu from './pages/Menu/Menu';
import Blog from './pages/Blog/Blog';

function App() {

  return (
  
    <Fragment>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/blog" element={<Blog/>} /> 

      </Routes>
    </BrowserRouter>
    </Fragment>
     
  );
}

export default App;
