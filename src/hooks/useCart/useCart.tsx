import React, { useEffect, useState } from "react";
import { endpoint, Product } from "../../App";

const useCart = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [message, setMessage] = useState<string | null>(null);

    const loadCart = () => {
        return new Promise((resolve) => {
            fetch(`${endpoint}/cart`)
                .then((res) => res.json())
                .then((res) => {
                    setLoading(false);
                    setProducts(res.products);
                    resolve(true);
                });
        });
    };

    useEffect(() => {
        loadCart();
    }, []);

    const removeToCart = (product: Product) => {
        return new Promise((resolve) => {
            setLoading(true);
            fetch(`${endpoint}/cart`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "DELETE",
                body: JSON.stringify({ product: product.id }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res.error) {
                        setMessage("Error");
                    } else {
                        setMessage("Produit bien supprimé");
                    }
                    setLoading(false);
                    loadCart().then(resolve);
                });
        });
    };

    return {
        loading,
        products,
        message,
        loadCart,
        removeToCart,
    };
};

export default useCart;
