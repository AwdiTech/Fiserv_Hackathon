import exitIcon from '../../assets/icons/exit-icon.png';
import './PopUpBox.scss';

/**
 * Represents a popup box component.
 * @param {string} props.text - The text to be displayed in the popup box.
 * @param {Function} props.exit - The function to be called when the popup box is closed.
 * @param {boolean} props.visibility - The visibility state of the popup box.
 */

function PopUpBox({ text, exit, visibility }) {

    // Handles the "ENTER" button click event to close the PopUpBox.
    const handleEnter = () => {
        exit();
    };

    if (!visibility)
        return null;

    return (
        <section className="popup-box">
            <div onClick={exit} className="popup-box__exit-icon">
                <img src={exitIcon} className="icon" alt='' />
            </div>
            <h3 className='popup-box__text'>{text}</h3>
            <button onClick={handleEnter} className='popup-box__enter-button'>ENTER</button>
        </section>
    )
}

export default PopUpBox;