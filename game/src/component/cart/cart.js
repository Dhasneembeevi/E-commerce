import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { cartContext } from "../cartContext";
import "./cart.css"
const STRAPI_URL = "http://localhost:1337";

const Cart = () => {
    const cart = useContext(cartContext);
    const navigate = useNavigate()
    console.log(cart.cartItem);


    const navigateCheckout = () => {
        navigate("/checkout")
    }
    return (
        <div>
            <div className="cart-container">
                <div className="game-list">
                    {cart?.cartItem?.map((game) => {
                        return (
                            <div key={game.id} className="game-item">
                                <img src={STRAPI_URL + game?.attributes?.image?.data?.attributes?.url} alt={game.title} />
                                <h2>{game.attributes.title} </h2>
                                <p>{game.attributes.desc}</p>
                                <p>Price: ${game.attributes.price}</p>
                                <center>
                                    <button onClick={navigateCheckout}>Order and Pay</button>
                                </center>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Cart