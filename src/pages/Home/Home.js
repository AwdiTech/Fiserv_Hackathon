import CategoryList from "../../components/Categories/CategoryList";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import "./Home.scss";

import mockData from './../../data/mock-data_home.json';

function Home() {

    return (
        <main className="main">
            <ImageCarousel />
            
            <CategoryList categories={mockData.categories}/>
        </main>
    );

}

export default Home;