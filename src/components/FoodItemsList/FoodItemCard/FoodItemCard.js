import "./FoodItemCard.scss";
import cartIcon from "../../../assets/icons/shopping-bag.png";

/**
 * Renders a Food Item Card in the Food Items List.
 *
 * @param {string} props.name - The name of the food item.
 * @param {number} props.price - The price of the food item.
 * @param {string} props.description - The description of the food item.
 * @param {string} props.image - The image URL of the food item.
 * @param {Function} props.triggerPopUpBox - The function to trigger a pop-up box.
 */

function FoodItemCard({ name, price, description, image, triggerPopUpBox }) {


    /**
     * Handles the click event for the food item card's "Add to Cart" button.
     */
    const handleClick = () => {
        // Retrieve the entire cart object from sessionStorage, or initialize an empty object if it doesn't exist
        let cart = JSON.parse(sessionStorage.getItem("cart")) || {};
    
        // Check if the item already exists in the cart. If so, add 1 to quantity, otherwise initialize it in the cart.
        if (cart[name]) {
            cart[name].quantity += 1;
        } else {
            cart[name] = { name: name, price: price, quantity: 1 };
        }
    
        // Save the updated cart object back into sessionStorage
        sessionStorage.setItem("cart", JSON.stringify(cart));
    
        // Trigger the pop-up box to show the updated item quantity
        triggerPopUpBox(`${name} x ${cart[name].quantity} added to cart! Go to Cart to checkout and adjust quantities.`);
    }

    
    return (
        <div className="card">
            <img className="card__image" src={image} alt="food item" />
            <h3 className="card__name">{name}</h3>
            <p className="card__description">{description}</p>

            <div className="card-bottom-container">
                <p className="card__price">${price}</p>
                <button className="card__button" onClick={ () => handleClick() }>
                    <img className="cart-icon" src={cartIcon} alt='' />
                    Add to Cart</button>
            </div>
        </div>
    );
}

export default FoodItemCard;