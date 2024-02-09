import "./CategoryCard.scss";

function CategoryCard({ name, icon, handleClick, activeCategory }) {

    return (
        <div 
            className={activeCategory ? "category-card category-card--active" : "category-card"}
            onClick={handleClick}
        >
            <img className="category-card__icon" src={icon} alt="Category Icon" />
            <h3 className="category-card__title">{name}</h3>
        </div>
    );
}

export default CategoryCard;