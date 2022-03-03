import { renderHook, act } from "@testing-library/react-hooks";
import useProduct from "../../hooks/useProduct/useProduct";
import { Product } from "../../App";



test("product", () => {

    const productExemple = {
        id: 1,
        name: "string",
        price: 12,
        quantity: 2,
        image: "string"
    };
    const { result } = renderHook(() => useProduct(productExemple));
    const {
        quantity,
        message,
        loading,
        setQuantity,
        addProduct,

    } = result.current;

    // expect(addition("1", "1")).toEqual("2");
});