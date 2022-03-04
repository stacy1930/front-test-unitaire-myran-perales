import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import logo from './Rick_and_Morty_logo.png';
import "./App.css";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap';


export const endpoint = "http://localhost:8000/api";
export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

function App() {
  const [route, setRoute] = useState<{
    route: "home" | "product" | "cart";
    data?: any;
  }>({ route: "home" });

  return (
    <div className="App">

      <Navbar className="navbar-morty">
        <Container>
          <Navbar.Brand href="#home" style={{ color: 'white' }}>
            <img
              alt="Rick et morty"
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top ImageLogo"
            />{' '}
            Projet Test unitaire - MYRAN Nolwenn - PERALES Stacy
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="App-header">
        {route.route === "home" && <Home setRoute={setRoute} />}
        {route.route === "product" && (
          <Product setRoute={setRoute} data={route.data} />
        )}
        {route.route === "cart" && <Cart setRoute={setRoute} />}

      </div>
    </div>
  );
}

export default App;