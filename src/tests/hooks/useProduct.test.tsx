import { act as actRender, render, screen } from '@testing-library/react';

import { renderHook, act } from "@testing-library/react-hooks";
import ReactDOM from "react-dom";
import Product from "../../components/Product/Product";
import useProduct from "../../hooks/useProduct/useProduct";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(

    rest.post(
        "http://localhost:8000/api/cart",
        (req, res, ctx) => {
            return res(
                ctx.json(
                    {

                        "id": 1,
                        "name": "Add Product",
                        "price": 45.6,
                        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                        "quantity": 20,
                        "rick_and_morty_id": 1
                    }
                ))
        })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

let container: any;

test("addProduct", async () => {
    const { result } = renderHook(() => useProduct({
        "id": 1,
        "name": "Rick Sanchez",
        "price": 45.6,
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "quantity": 20,
    }));
    const { loading, addProduct } = result.current;
    expect(loading).toEqual(false);
    await act(async () => {
        await addProduct();
    }
    );
    const { message, quantity } = result.current;
    expect(message).toBe("Enregistré dans le panier");
    expect(quantity).toEqual(1);
});



test("Ajout panier", async () => {
    const { container } =
        render(<Product setRoute={function (): void {
        }} data={{
            "id": 1,
            "name": "Rick Sanchez",
            "price": 45.6,
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "quantity": 20,
        }} />);
    const button1: any = container.querySelector(".go-cart[data-value='addCart']");

    actRender(() => {
        button1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    await new Promise((resolve) => setTimeout(resolve, 4000));

    const title = screen.getByText(/Enregistré dans le panier/i);
    expect(title).toBeInTheDocument();
});


