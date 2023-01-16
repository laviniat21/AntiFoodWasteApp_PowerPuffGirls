import React from 'react';

// import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels} from './container';
// import { Navbar } from './components';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import Homepage from './components/Homepage/Homepage';
import './App.css';

const App = () => (
  <div>
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
</div>
  // <div>
  //   <Navbar />
  //   <Header />
  //   <AboutUs />
  //   <Chef />
  //   <Intro />
  //   <Laurels />
  //   <Gallery />
  //   <FindUs />
  //   <Footer />
  // </div>
);

export default App;
