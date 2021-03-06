import { renderHook, act } from "@testing-library/react-hooks";
import useHome from "../../hooks/useHome/useHome";
import { setupServer } from "msw/node";
import { rest } from "msw";


const server = setupServer(

    rest.get(
        "http://localhost:8000/api/products",
        (req, res, ctx) => {
            console.log("i'm here!!!");
            return res(
                ctx.json(
                    [
                        {

                            "id": 1,
                            "name": "Rick Sanchez",
                            "price": 45.6,
                            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                            "quantity": 20,
                            "rick_and_morty_id": 1


                        },
                        {
                            "id": 2,
                            "name": "Morty Smith",
                            "price": 35.98,
                            "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                            "quantity": 20,
                            "rick_and_morty_id": 2
                        },
                        {
                            "id": 3,
                            "name": "Summer Smith",
                            "price": 67.6,
                            "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                            "quantity": 20,
                            "rick_and_morty_id": 3
                        }
                    ]
                ))
        }));

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("loading", async () => {
    const { result } = renderHook(() => useHome());
    const { loading, loadProducts } = result.current;
    expect(loading).toEqual(true);
    await act(async () => {
        await loadProducts()
    }
    );
    const { products } = result.current;

    // Vérifier le nombre de produits
    expect(products.length).toEqual(3);
});