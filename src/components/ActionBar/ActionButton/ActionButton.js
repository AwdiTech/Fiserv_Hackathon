import "./ActionButton.scss";

/**
 * ActionButton component represents a single button in the ActionBar.
 * It displays an icon and a title, and triggers navigation when clicked.
 * @param {string} title - The title of the button.
 * @param {string} src - The source of the button icon.
 * @param {function} handleClickNavigate - The function to handle button click and navigate to a specific page.
 * @param {boolean} activeButton - Indicates whether the button is active or not.
 */

function ActionButton({ title, src, handleClickNavigate, activeButton }) {

    return (
        <button
            className={activeButton ? "action-button action-button--active" : "action-button"}
            onClick={() => handleClickNavigate(title)}
        >
            <img className="action-button__icon" src={src} alt={title} />
            <p className="action-button__title">{title}</p>
        </button>
    );
}

export default ActionButton;