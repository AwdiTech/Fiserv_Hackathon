import "./CategoryCard.scss";

/**
 * Renders a category card component.
 *
 * @param {string} props.name - The name of the category.
 * @param {string} props.icon - The URL of the category icon.
 * @param {function} props.handleClick - The click event handler for the category card.
 * @param {boolean} props.activeCategory - Indicates if the category is active.
 */
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