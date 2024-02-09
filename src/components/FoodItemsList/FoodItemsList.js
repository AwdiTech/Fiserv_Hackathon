import { useState } from 'react';
import PopUpBox from '../PopUpBox/PopUpBox';
import FoodItemCard from "./FoodItemCard/FoodItemCard";
import grilledSalmon from "../../assets/images/food-items/grilled-salmon.jpg";
import ribeyeSteak from "../../assets/images/food-items/ribeye-steak.jpg";
import avocadoSandwich from "../../assets/images/food-items/avocado-sandwhich.jpg";
import caesarSalad from "../../assets/images/food-items/caesar-salad.jpg";
import craftBeer from "../../assets/images/food-items/craft-beer.jpg";
import cheeseburger from "../../assets/images/food-items/cheeseburger.jpg";
import lobsterBisque from "../../assets/images/food-items/lobster-bisque.jpg";
import chocolateLavaCake from "../../assets/images/food-items/lavacake.jpg";
import cedarLemonade from "../../assets/images/food-items/cedar-lemonade.jpg";
import grilledVegetables from "../../assets/images/food-items/grilled-veg-platter.jpg";
import comingSoon from "../../assets/images/food-items/coming-soon.jpg";
import "./FoodItemsList.scss";


/**
 * Renders a list of food items.
 * 
 * @param {Array} props.menuItems - The array of menu items to display, taken from the mock-data_home.json file.
 */
function FoodItemsList({ menuItems }) {

    // Pop-up box states for visibility and text
    const [ popUpBoxVisible, setPopUpBoxVisible ] = useState(false);
    const [ popUpBoxText, setPopUpBoxText ] = useState("");

    /**
     * Determines the image based on the given image name.
     * @param {string} image - The name of the image.
     * @returns {string} - The image source.
     */
    const determineImage = (image) => {
        switch (image) {
            case "grilled_salmon.png":
                return grilledSalmon;
            case "ribeye_steak.png":
                return ribeyeSteak;
            case "avocado_sandwich.png":
                return avocadoSandwich;
            case "caesar_salad.png":
                return caesarSalad;
            case "craft_beer.png":
                return craftBeer;
            case "cheeseburger.png":
                return cheeseburger;
            case "lobster_bisque.png":
                return lobsterBisque;
            case "chocolate_lava_cake.png":
                return chocolateLavaCake;
            case "cedar_lemonade.png":
                return cedarLemonade;
            case "grilled_vegetables.png":
                return grilledVegetables;
            default:
                return comingSoon;
        }
    }

    /**
     * Closes the pop-up box.
     */
    const exitPopUpBox = () => {
        setPopUpBoxVisible(false);
    }

    /**
     * Triggers the pop-up box with the given text.
     * @param {string} text - The text to be displayed in the pop-up box.
     */
    const triggerPopUpBox = (text) => {
        setPopUpBoxText(text);
        setPopUpBoxVisible(true);
    }

    
    return (
        <>
            <div className="food-items-container">
                {menuItems.map((item, index) => <FoodItemCard
                    key={index}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={determineImage(item.image)}
                    triggerPopUpBox={triggerPopUpBox}
                />)}
            </div>

            <PopUpBox
                visibility={popUpBoxVisible}
                exit={exitPopUpBox}
                text={popUpBoxText}
                className="popup-box"
            />
        </>
    );
}

export default FoodItemsList;