import { renderHook, act } from "@testing-library/react-hooks";
import useHome from "../../hooks/useHome/useHome";


test("cart", () => {
    const { result } = renderHook(() => useHome());
    const {
        loading,
        products,
        loadProducts,

    } = result.current;

    // expect(addition("1", "1")).toEqual("2");
});