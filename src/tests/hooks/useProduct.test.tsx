import { renderHook, act } from "@testing-library/react-hooks";
import useProduct from "../../hooks/useProduct/useProduct";

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

