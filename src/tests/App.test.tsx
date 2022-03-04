import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '../App';
import ReactDOM from 'react-dom';
import Home from '../components/Home/Home';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import { Card } from 'react-bootstrap';

let container: any;


let productExemple = {
  id: 1,
  name: "string",
  price: 12,
  quantity: 20,
  image: "string"
};

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("App Test", () => {
  const { container } = render(<App />);
  const title = screen.getByText(/Nolwenn/i);
  expect(title).toBeInTheDocument();
  expect(container.getElementsByClassName("ImageLogo").length).toBe(1);
});

test("Cart test", () => {
  const { container } = render(<Cart setRoute={function (cart): void {
    throw new Error('Function not implemented.');
  }} />);

  expect(container.getElementsByClassName("go-back").length).toBe(1);
});

test("Product test", () => {
  const { container } = render(<Product setRoute={function (): void {
    throw new Error('Function not implemented.');
  }} data={productExemple} />);

  expect(container.getElementsByClassName("detailProduct").length).toBe(1);

})

test("AllProduct test", () => {
  const { container } = render(<Home setRoute={function (): void {
    throw new Error('Function not implemented.');
  }} />);

  expect(container.getElementsByClassName("content-product").length).toBe(1);
  // expect(container.getElementsByClassName("content-product").length).toBe(1);
  const title = screen.getByText(/Aller sur panier/i);
  expect(title).toBeInTheDocument();


})

test("Home button aller au panier", () => {
  act(() => {
    ReactDOM.render(<Home setRoute={function (home): void {
    }} />, container);
  });
  const button1 = container.querySelector(".go-cart[data-value='goCart']");

  act(() => {
    button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(button1.textContent).toBe('Aller sur panier');
});

// test("Ajout panier", () => {
//   act(() => {
//     ReactDOM.render(<Product setRoute={function (): void {
//     }} />, container);
//   });
//   const button1 = container.querySelector(".go-cart[data-value='addCart']");

//   act(() => {
//     button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
//   });

//   expect(button1.textContent).toBe('Aller sur panier');
// });


