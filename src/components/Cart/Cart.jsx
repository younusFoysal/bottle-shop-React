import PropTypes from "prop-types";

import bottle from "../Bottle/Bottle.jsx";
import './cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(bottle => <div className="cart">
                            <img key={bottle.id} src={bottle.img}/>
                        <br/>

                            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>

                             </div>

                        )
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;