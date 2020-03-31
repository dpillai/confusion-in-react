import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import DISHES from './shared/dishes';

function App() {
  return (
    <div>
      <Navbar color="primary" dark>
        {/* <div className="container-fluid"> */}
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        {/* </div> */}
      </Navbar>
      <Menu dishes={DISHES} />
    </div>
  );
}

export default App;
