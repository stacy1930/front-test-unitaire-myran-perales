import React, { useEffect, useState } from "react";
import useHome from "../../hooks/useHome/useHome";

import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { endpoint, Product } from "../../App";
import { Card, Button } from 'react-bootstrap';

import goBack from './../../go-back.png';

const Home = ({ setRoute }: { setRoute: (data: any) => void }) => {
    const { loading, products } = useHome();
    return (
        <div className="mt-4">
            {loading && <div>
                <img src="https://fontmeme.com/permalink/220303/c001133e0f44c61eae25093f20d9cdf1.png" className="App-logo" alt="logo" />
            </div>}
            <Button data-value="goCart" className="go-cart" onClick={() => setRoute({ route: "cart" })}>
                <img
                    alt="Rick et morty"
                    src={goBack}
                    width="40"
                    height="40"
                />
                Aller sur panier</Button>
            <div className="content-product">
                {products.map((product) => {
                    return (
                        <React.Fragment key={product.id}>
                            <div className="mx-auto my-4">
                                <Card onClick={() => setRoute({ route: "product", data: product })} className="cardSize shadow-lg bg-white rounded">
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title>Figurine de {product.name}</Card.Title>
                                        <Card.Text>
                                            Quantité du produit : {product.quantity}
                                        </Card.Text>
                                        {/* <Button variant="primary">Go somewhere</Button> */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
