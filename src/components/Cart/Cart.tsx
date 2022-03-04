import React from "react";
import useCart from "../../hooks/useCart/useCart";
import { Button } from "react-bootstrap";
import goBack from './../../return.png';

const Cart = ({ setRoute }: { setRoute: (data: any) => void }) => {
    const { loading, products, message, loadCart, removeToCart } = useCart();
    return (
        <div className="mt-4">
            {loading && <div>
                <img src="https://fontmeme.com/permalink/220303/c001133e0f44c61eae25093f20d9cdf1.png" className="App-logo" alt="logo" />
            </div>}
            {message && <p>{message}</p>}
            <Button className="go-back" onClick={() => setRoute({ route: "home" })}>
                <img
                    alt="Rick et morty"
                    src={goBack}
                    width="40"
                    height="40"
                />
                Retour</Button>            <div>
                {products.map((product) => {
                    return (
                        <React.Fragment>
                            <div>
                                <img src={product.image} alt="" />
                                <p>Figurine de {product.name}</p>
                                <p>Quantitée {product.quantity}</p>
                            </div>
                            <button onClick={() => removeToCart(product)}>
                                Supprimer du panier
                            </button>
                            <hr />
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Cart;
