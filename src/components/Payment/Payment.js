import { useState } from "react";
import cardIcon from '../../assets/icons/mc-card.png';
import mastercardIcon from '../../assets/icons/mastercard.png';
import paypalIcon from '../../assets/icons/paypal.png';
import googlePayIcon from '../../assets/icons/google.png';
import cryptocurrencyIcon from '../../assets/icons/bitcoin.png';
import { useNavigate } from "react-router-dom";
import "./Payment.scss";


/**
 * Renders the Payment component.
 * 
 * @param {Function} props.confirmPayment - The function to be called when payment is confirmed.
 * @param {string} props.orderType - The type of order (e.g., "Reservation", "Dine-In").
 */
function Payment({ confirmPayment, orderType }) {

    const [cardValid, setCardValid] = useState(true);

    const navigate = useNavigate();

    const handlePayment = (e) => {
        e.preventDefault();

        // Validate the payment information
        let cardNumber = e.target.cardNumber.value;
        //let expirationDate = e.target.expirationDate.value;
        //let cvv = e.target.cvv.value;
        //let nameOnCard = e.target.nameOnCard.value;

        if (LuhnCheck(cardNumber)) {
            setCardValid(true);
            alert('Payment was Successful!');

            if (confirmPayment) {
                confirmPayment();
            }

            navigate('/check-in', { state: { currentPage: "check-in" } });
        } else {
            setCardValid(false);
            alert('Invalid Card Number');
        }

        // Handle payment using Fiserv APIs ...

    }

    // Luhn Algorithm to validate the card number
    const LuhnCheck = (cardNumber) => {
        let sum = 0;
        let numDigits = cardNumber.length;
        let parity = numDigits % 2;

        for (let i = 0; i < numDigits; i++) {
            let digit = parseInt(cardNumber.charAt(i));

            if (i % 2 === parity) digit *= 2;
            if (digit > 9) digit -= 9;

            sum += digit;
        }

        return (sum % 10) === 0;
    }



    return (
        <main className="payment-page">
            <h1 className="payment-page__title">Choose Payment Method</h1>
            <p className="fiserv-trademark">Powered by Fiserv</p>

            <section className="payment-methods">
                <button className="payment-methods__button payment-methods__button--selected">
                    <img src={mastercardIcon} alt='' className="payment-methods__icon" />
                    Credit Card
                </button>
                <button className="payment-methods__button">
                    <img src={paypalIcon} alt='' className="payment-methods__icon" />
                    PayPal
                </button>
                <button className="payment-methods__button">
                    <img src={googlePayIcon} alt='' className="payment-methods__icon" />
                    Google Pay
                </button>
                <button className="payment-methods__button">
                    <img src={cryptocurrencyIcon} alt='' className="payment-methods__icon" />
                    Pay with Cryptocurrency
                </button>
            </section>

            <form className="payment-form" onSubmit={handlePayment}>
                <div className="payment-form__row">
                    <p>Card Number</p>
                    <input
                        type="text"
                        className={`card-number ${cardValid ? '' : 'card-number--error'}`}
                        name="cardNumber"
                        placeholder="Card Number"
                        required
                    />
                    <img src={cardIcon} alt='' className="mastercard-icon" />
                </div>

                <div className="payment-form__row-group">
                    <div className="card-expiration">
                        <p className="card-expiration__title">Expiration Date</p>
                        <div className="card-expiration__selects">
                            <select id="expiration-month" name="expiration-month" required>
                                <option value="">Month</option>
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                                <option value="">04</option>
                                <option value="">05</option>
                                <option value="">06</option>
                                <option value="">07</option>
                                <option value="">08</option>
                                <option value="">09</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                            </select>

                            <select className="expiration-year" name="experation-year" required>
                                <option value="">Year</option>
                                <option value="">2023</option>
                                <option value="">2024</option>
                                <option value="">2025</option>
                                <option value="">2026</option>
                            </select>
                        </div>
                    </div>

                    <div className="cvv_wrapper">
                        <p>CVV/CVC</p>
                        <input type="text" className="payment-form__cvv" name="cvv" placeholder="CVV" />
                    </div>
                </div>

                <div className="payment-form__row">
                    <p>Card holder name</p>
                    <input type="text" className="payment-form__name" name="nameOnCard" placeholder="Name on Card" />
                </div>

                {orderType === "Reservation" ?
                    <p id="reservation-note">
                        Note: For Reservations, only 50% of the payment will be made. The rest will be charged when you check in.</p>
                    : <></>}


                <button className="payment-form__button">Confirm Payment</button>
            </form>

        </main >
    );
}

export default Payment;