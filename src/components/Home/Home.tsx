import React, { useEffect, useState } from "react";
import useHome from "../../hooks/useHome/useHome";

import { endpoint, Product } from "../../App";
import { Card } from 'react-bootstrap';

const Home = ({ setRoute }: { setRoute: (data: any) => void }) => {
    const { loading, products } = useHome();
    return (
        <div>
            {loading && <div>Loading....</div>}
            <div onClick={() => setRoute({ route: "cart" })}>Aller sur panier</div>
            <div>
                {products.map((product) => {
                    return (
                        // <React.Fragment>
                        //     <div
                        //         onClick={() => setRoute({ route: "product", data: product })}
                        //     >
                        //         <img src={product.image} alt="" />
                        //         <p>Figurine de {product.name}</p>
                        //         <p>Quantitée {product.quantity}</p>
                        //     </div>
                        //     <hr />
                        // </React.Fragment>
                        <React.Fragment>
                            <Card style={{ width: '50rem' }} onClick={() => setRoute({ route: "product", data: product })}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>Figurine de {product.name}</Card.Title>
                                    <Card.Text>
                                        Quantité du produit : {product.quantity}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
