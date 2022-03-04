// body: JSON.stringify({ product: product.id, quantity }),

import { useState } from "react";
import { endpoint, Product } from "../../App";

const useProduct = (product: Product) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [message, setMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const addProduct = () => {
        return new Promise((resolve) => {
            setLoading(true);
            fetch(`${endpoint}/cart`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                // body: JSON.stringify({ quantity }),
                body: JSON.stringify({ product: product.id, quantity }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.error) {
                        setMessage("Trop de quantité");
                    } else {
                        setMessage("Enregistré dans le panier");
                        setQuantity(quantity);
                    }
                    setLoading(false);
                    resolve(true);
                });
        });
    };

    return {
        quantity,
        message,
        loading,
        setQuantity,
        addProduct,
    };
};

export default useProduct;

