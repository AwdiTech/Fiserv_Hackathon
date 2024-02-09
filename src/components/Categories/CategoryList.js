import { useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import popularIcon from "../../assets/icons/popular.png";
import mainIcon from "../../assets/icons/burger.png";
import seafoodIcon from "../../assets/icons/fish.png";
import sidesIcon from "../../assets/icons/french-fries.png";
import drinksIcon from "../../assets/icons/soda.png";
import "./CategoryList.scss";


/**
 * Renders a list of categories with corresponding icons and handles category selection.
 * 
 * @param {Array} props.categories - The array of category objects.
 * @param {Function} props.changeMenuItems - The function to change the menu items based on the selected category.
 */
function CategoryList({ categories, changeMenuItems }) {

    // State to hold the selected category of Menu Items
    const [ selctedCategory, setSelectedCategory ] = useState("Popular");

    /**
     * Determines the icon based on the given icon name.
     * @param {string} icon - The name of the icon.
     * @returns {img} - The icon corresponding to the given name.
     */
    const determineIcon = (icon) => {
        switch (icon) {
            case "popular_icon":
                return popularIcon;
            case "mains_icon":
                return mainIcon;
            case "seafood_icon":
                return seafoodIcon;
            case "sides_icon":
                return sidesIcon;
            case "drinks_icon":
                return drinksIcon;
            default:
                return mainIcon;
        }
    }

    /**
     * Changes the selected category and updates the menu items accordingly.
     * 
     * @param {string} category - The new category to be selected.
     */
    const changeCategory = (category) => {
        setSelectedCategory(category);
        changeMenuItems(category);
    }


    return (
        <>
            <h2 className="categories-header">Categories</h2>
            <div className="category-list">
                {categories.map((category, index) => <CategoryCard
                    key={index}
                    name={category.name}
                    icon={determineIcon(category.icon)}
                    handleClick={() => changeCategory(category.name)}
                    activeCategory={selctedCategory === category.name}
                />)}
            </div>
        </>
    );
}

export default CategoryList;