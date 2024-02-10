import { useState } from 'react';
import CategoryList from "../../components/Categories/CategoryList";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import FoodItemsList from "../../components/FoodItemsList/FoodItemsList";
import mockData from './../../data/mock-data_home.json';
import "./Home.scss";

/**
 * Represents the Home component.
 */
function Home() {
    const [ menuItems, setMenuItems ] = useState(mockData.menuItems);

    const changeMenuItems = (category) => {
        const newMenuItems = mockData.menuItems.filter(item => item.category === category);

        if (!newMenuItems || category === "Popular"){
            setMenuItems(mockData.menuItems);
        } else {
            setMenuItems(newMenuItems)
        }
    }


    return (
        <main className="main">
            <ImageCarousel />
            <CategoryList categories={mockData.categories} changeMenuItems={changeMenuItems}/>
            <FoodItemsList menuItems={menuItems} />
        </main>
    );

}

export default Home;