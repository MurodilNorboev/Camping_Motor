import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './components/router';
import Footer from './components/footer';
import Midl from './midl/midl';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Footer />
    <Midl />
    <RouterComponent />
  </BrowserRouter>
);

