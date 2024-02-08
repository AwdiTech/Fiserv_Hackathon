import "./Header.scss";

/**
 * Header component that displays the restaurant's branding.
 * It utilizes the restaurant's name and logo data passed via props.
 *
 * @param {string} name - The name of the restaurant to display in the header.
 * @param {string} restaurantLogo - The path/src of the restaurant logo image.
 */
function Header ({ name, restaurantLogo }) {

    return (
            <header className="header">
                <h4 className="header__trademark">Powered by Fiserv</h4>
                <div className="header__main">
                    <h1 className="header__name">{name}</h1>
                    <img className="header__logo" src={restaurantLogo} alt="restaurant logo" />
                </div>
            </header>
    );
}

export default Header;