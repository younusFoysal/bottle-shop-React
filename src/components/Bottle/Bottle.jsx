import PropTypes from "prop-types";
import './bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    //console.log(bottle)
    const {name, img, price} = bottle;

    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} />
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCArt: PropTypes.func.isRequired
}

export default Bottle;