import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import useProduct from "../../hooks/useProduct/useProduct";
import goBack from './../../return.png';

const Product = ({ setRoute, data: product }: any) => {
    const { quantity, message, loading, setQuantity, addProduct } =
        useProduct(product);

    return (
        <div className="mt-4 totoTest">
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
                Retour</Button>

            <Card className="shadow-lg bg-white rounded text-dark detailProduct">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>Figurine de {product.name}</Card.Title>
                    <Card.Text>
                        Quantité du produit : {product.quantity}
                    </Card.Text>
                    {/* <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Quantité</InputGroup.Text>
                        <FormControl
                            data-testid="input-add-to-cart"
                            placeholder="Quantité à ajouter"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                    </InputGroup> */}
                    <input
                        type="number"
                        data-testid="input-add-to-cart"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="Quantité à ajouter"
                    />
                    <Button data-testid="button-add" className="go-cart addProduct" data-value="addCart" onClick={addProduct} >Ajouter au panier</Button>
                </Card.Body>
            </Card>
            {/* <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="Quantité à ajouter"
            /> */}
            {/* <button onClick={addProduct}>Ajouter au panier</button> */}
        </div>
    );
};

export default Product;
