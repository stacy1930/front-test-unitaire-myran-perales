import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useCart from "../../hooks/useCart/useCart";


const server = setupServer(

    rest.delete(
        "http://localhost:8000/api/cart",
        (req, res, ctx) => {
            return res(
                ctx.json(

                    {
                        "id": 3,
                        "name": "Summer Smith",
                        "price": 67.6,
                        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                        "quantity": 20,
                        "rick_and_morty_id": 3
                    }

                ))
        })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("loading", async () => {
    const { result } = renderHook(() => useCart());
    const { loading, loadCart } = result.current;
    expect(loading).toEqual(true);
    await act(async () => {
        await loadCart()
    }
    );
    const { products } = result.current;
    console.log(products);
});

test("remove Cart", async () => {
    const { result } = renderHook(() => useCart());
    const { removeToCart } = result.current;

    await act(async () => {
        await removeToCart(
            {
                "id": 3,
                "name": "Summer Smith",
                "price": 67.6,
                "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "quantity": 20
            }
        );
    },
    );
    const { message } = result.current;
    expect(message).toBe("Produit bien supprimé");

});

