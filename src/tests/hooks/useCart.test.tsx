import { renderHook, act } from "@testing-library/react-hooks";
import useCart from "../../hooks/useCart/useCart";


test("cart", () => {
    const { result } = renderHook(() => useCart());
    const {
        loading,
        products,
        message,
        loadCart,
        removeToCart,

    } = result.current;

    // expect(addition("1", "1")).toEqual("2");
});