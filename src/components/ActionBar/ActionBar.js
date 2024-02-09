import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton/ActionButton";
import homeIcon from "../../assets/icons/home.png";
import cartIcon from "../../assets/icons/shopping-cart.png";
import bookingIcon from "../../assets/icons/dinner-table.png";
import checkInIcon from "../../assets/icons/check-in.png";
import "./ActionBar.scss";

/**
 * Renders the ActionBar component that manages the navigation bar at the bottom of the app,
 * allowing users to switch between different pages like home, cart, booking, and check-in.
 */

function ActionBar() {

    // State to hold the active button
    const [activeButton, setActiveButton] = useState("home");
    
    // Get the current location route to manage active button state
    const location = useLocation();
    const { currentPage } = location.state || { currentPage: "home" };

    // Hook to navigate to different pages
    const navigate = useNavigate();


    useEffect(() => {
        setActiveButton(currentPage);
    }, [currentPage]);


    /**
     * Handles the click event for navigating to different pages based on the provided title, 
     *   along with the corresponding route information state through "currentPage" using the 
     *   useNavigate hook.
     * @param {string} title - The title of the page to navigate to.
     */
    const handleClickNavigate = (title) => {
        switch (title) {
            case "Home":
                navigate("/", { state: { currentPage: "home" } });
                break;
            case "Cart":
                navigate("/confirmation", { state: { currentPage: "cart" } });
                break;
            case "Booking":
                navigate("/booking", { state: { currentPage: "booking" } });
                break;
            case "Check In":
                navigate("/check-in", { state: { currentPage: "check-in" } });
                break;
            default:
                console.log("default was activated");
                navigate("/");
        }
    }


    return (
        <nav className="action-bar">
            <ActionButton
                activeButton={activeButton === "home" ? true : false}
                title="Home"
                src={homeIcon}
                handleClickNavigate={handleClickNavigate}
            />
            <ActionButton
                activeButton={activeButton === "cart" ? true : false}
                title="Cart"
                src={cartIcon}
                handleClickNavigate={handleClickNavigate}
            />
            <ActionButton
                activeButton={activeButton === "booking" ? true : false}
                title="Booking"
                src={bookingIcon}
                handleClickNavigate={handleClickNavigate}
            />
            <ActionButton
                activeButton={activeButton === "check-in" ? true : false}
                title="Check In"
                src={checkInIcon}
                handleClickNavigate={handleClickNavigate}
            />
        </nav>
    );
}

export default ActionBar;