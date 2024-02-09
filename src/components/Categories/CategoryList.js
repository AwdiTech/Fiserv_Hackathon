import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CategoryCard from "./CategoryCard/CategoryCard";
import popularIcon from "../../assets/icons/popular.png";
import mainIcon from "../../assets/icons/burger.png";
import seafoodIcon from "../../assets/icons/fish.png";
import sidesIcon from "../../assets/icons/french-fries.png";
import drinksIcon from "../../assets/icons/soda.png";
import "./CategoryList.scss";


function CategoryList({ categories }) {

    const [ selctedCategory, setSelectedCategory ] = useState("Popular");


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

    console.log(categories);

    return (
        <>
            <h2 className="categories-header">Categories</h2>
            <div className="category-list">
                {categories.map((category) => <CategoryCard
                    key={uuidv4()}
                    name={category.name}
                    icon={determineIcon(category.icon)}
                    handleClick={() => setSelectedCategory(category.name)}
                    activeCategory={selctedCategory === category.name}
                />)}
            </div>
        </>
    );
}

export default CategoryList;