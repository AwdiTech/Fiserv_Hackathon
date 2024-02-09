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
        let item = sessionStorage.getItem(name);
        let cartItem;
        let quantity = 1;
    
        // If the item already exists in the cart, update the quantity
        if (item) {
            cartItem = JSON.parse(item);
            cartItem.quantity = (cartItem.quantity || 0) + 1;
            quantity = cartItem.quantity;
        } else {
            cartItem = { name: name, price: price, quantity: 1 };
        }
        // Save the updated item back into sessionStorage
        sessionStorage.setItem(name, JSON.stringify(cartItem));
        
        triggerPopUpBox(`${name} x ${quantity} added to cart! Go to Cart to checkout and adjust quantities.`);
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