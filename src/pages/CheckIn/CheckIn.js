import { useState, useEffect } from "react";
import "./CheckIn.scss";

/**
 * Represents the CheckIn component.
 * This component allows users to check in their orders and view the order summary and status.
 */
function CheckIn() {

    const [orderNumber, setOrderNumber] = useState(sessionStorage.getItem("orderNumber") || "");
    const [orderType, setOrderType] = useState(sessionStorage.getItem("orderType") || "Dine-In");
    const [guests, setGuests] = useState(JSON.parse(sessionStorage.getItem("bookingInfo"))?.guests || 1);
    const [paymentStatus, setPaymentStatus] = useState(sessionStorage.getItem("paymentStatus") || "unpaid");
    const [tableNumber, setTableNumber] = useState(sessionStorage.getItem("tableNumber") || "");

    const [orderTotal, setOrderTotal] = useState(sessionStorage.getItem("orderTotal") || 0);
    const [remainingPayment, setRemainingPayment] = useState(0);

    // Update all states when orderNumber changes
    useEffect(() => {

        // Uses Cart to calculate the order total
        const getOrderTotal = () => {
            const ot = sessionStorage.getItem("orderTotal");

            if (ot === null){

                
                const cart = JSON.parse(sessionStorage.getItem("cart")) || {};
                let total = 0;
                Object.values(cart).forEach(item => {
                    total += item.price * item.quantity;
                });
                return total;
            }
            else {
                return ot;
            }
        };

        // Uses Cart and OrderType to calculate the remaining payment
        const getRemainingPayment = (total) => {
            if (paymentStatus === "paid-half" && orderType === "reservation") {
                return total / 2;
            } else if (paymentStatus === "paid-full") {
                return 0;
            } else {
                return total;    // If paymentStatus is unpaid
            }
        };

        setOrderNumber(sessionStorage.getItem("orderNumber") || orderNumber);
        setOrderType(sessionStorage.getItem("orderType") || orderType);
        setGuests(sessionStorage.getItem("guests") || guests);
        setPaymentStatus(sessionStorage.getItem("paymentStatus") || paymentStatus);
        setTableNumber(sessionStorage.getItem("tableNumber") || tableNumber);

        const total = getOrderTotal();
        setOrderTotal(total);
        setRemainingPayment(getRemainingPayment(total));
    }, [orderNumber, orderType, guests, paymentStatus, tableNumber])


    
    //  ------ Functions ------

    // Button handler to handle the check-in process. Uses Alert pop ups for information.
    const handleCheckIn = () => {
        if (paymentStatus === "unpaid") {
            alert("Please go to Cart and pay your bill first!");
        } else if (paymentStatus === "paid-half") {
            alert("The remaining half of the payment has been processed! Your food will now be served to your table. Enjoy!");
            setPaymentStatus("paid-full");
            sessionStorage.setItem("paymentStatus", "paid-full");
        } else if (paymentStatus === "paid-full" && orderType === "Dine-In") {
            alert("Your order has been processed! Your food will now be served. Enjoy!");
            setPaymentStatus("completed");
            sessionStorage.setItem("paymentStatus", "completed");
        }
    }

    // Button handlers to enter the order number and table number. Validation with database is not implemented.
    const enterOrderNumber = () => {
        // Validation with database here...

        sessionStorage.setItem("orderNumber", orderNumber);
        setOrderType(sessionStorage.getItem("orderType") || "Dine-In");
        setGuests(sessionStorage.getItem("guests") || 1);
    }
    const enterTableNumber = () => {
        // Validation with database here...

        sessionStorage.setItem("tableNumber", tableNumber);
    }

    // Returns the status element based on the paymentStatus
    const getStatusElement = () => {
        switch (paymentStatus) {
            case "unpaid":
                return <p className="status__unpaid">Unpaid</p>;
            case "paid-half":
                return <p className="status__paid-half">Reservation Placed - Payment Half Completed</p>;
            case "paid-full":
                return <p className="status__paid-full">Payment Complete - Awaiting Arrival</p>;
            case "completed":
                return <p className="status__completed">Completed</p>;
            default:
                return <p className="status__unpaid">Unpaid</p>;
        }
    }


    return (
        <main className="check-in-page">

            <section className="order-number">
                <h1 className="order-number__header">Order #:</h1>
                <input className="order-number__input" type="text" id="orderNumber" name="orderNumber" placeholder="Enter your order number" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} />
                <button className="input-button" onClick={enterOrderNumber}>Enter</button>
            </section>

            {orderType === "Dine-In" ?
                <section className="table-number">
                    <h1 className="table-number__header">Table #:</h1>
                    <input className="table-number__input" type="text" id="orderNumber" name="orderNumber" placeholder="Enter your table number" value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} />
                    <button className="input-button" onClick={enterTableNumber}>Enter</button>
                </section>
                :
                <> </>
            }

            <h3 className="order-summary__header">Order Summary</h3>
            <div className="summary">

                <div className="row">
                    <p>Order Type:</p>
                    <p>{orderType}</p>
                </div>

                <div className="row">
                    <p>Guests:</p>
                    <p>{guests}</p>
                </div>

                <div className="row">
                    <p>Order Total:</p>
                    <p>${orderTotal}</p>
                </div>

                <div className="row">
                    <p>Remaining Payment:</p>
                    <p>${remainingPayment}</p>
                </div>

            </div>

            <button className="check-in__button" onClick={handleCheckIn}>Check In</button>

            <h3 className="order-status__header">----- Order Status -----</h3>
            {getStatusElement()}

        </main>
    );
}

export default CheckIn;