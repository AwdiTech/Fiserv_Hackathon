import "./Payments.scss";
import tableIcon from '../../assets/icons/table.png'
import timeIcon from '../../assets/icons/time.png'
import { useState, useEffect } from 'react'
import Payment from '../../components/Payment/Payment'

function Payments() {

    const [sessionCart, setSessionCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || {});
    const [subtotal, setSubtotal] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);
    const [selectedTip, setSelectedTip] = useState(0);
    const [tableNumber, setTableNumber] = useState(0);
    const [orderNumber, setOrderNumber] = useState(0);
    const [reservationTime, setReservationTime] = useState(JSON.parse(sessionStorage.getItem("bookingInfo"))?.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    const [selectedOrderType, setSelectedOrderType] = useState(sessionStorage.getItem('orderType') || 'Dine-In');
    const [userName, setUserName] = useState(JSON.parse(sessionStorage.getItem("bookingInfo"))?.name || '');
    const [userEmail, setUserEmail] = useState(JSON.parse(sessionStorage.getItem("bookingInfo"))?.email || '');
    const [userPhoneNumber, setUserPhoneNumber] = useState(JSON.parse(sessionStorage.getItem("bookingInfo"))?.phoneNum || '');
    const [deliveryAddress, setDeliveryAddress] = useState(null);
    const [userNotes, setUserNotes] = useState(JSON.parse(sessionStorage.getItem("bookingInfo"))?.notes || '');

    // Function to generate a random number between two numbers
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };



    useEffect(() => {
        // Load the cart from sessionStorage on component mount and whenever the cart changes
        const cart = JSON.parse(sessionStorage.getItem('cart')) || {};
        const cartArray = Object.values(cart);
        setSessionCart(cartArray);

        // Calculate the subtotal, then pass it into calculateTipAndTotal
        const newSubtotal = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubtotal(newSubtotal);
        calculateTipAndTotal(newSubtotal);

        let tn = sessionStorage.getItem('tableNumber');
        let on = sessionStorage.getItem('orderNumber');

        if (!tableNumber) {
            const randomNumber = generateRandomNumber(1, 20);
            setTableNumber(randomNumber);
            sessionStorage.setItem('tableNumber', randomNumber);
        }
        if (!orderNumber) {
            const randomNumber = generateRandomNumber(1000, 9999);
            setOrderNumber(randomNumber);
            sessionStorage.setItem('orderNumber', randomNumber);
        }


        sessionStorage.setItem('orderType', selectedOrderType);

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }, []); // Empty array ensures this only runs on mount and unmount


    // ------ Functions ------

    // Function to calculate tip and total, to be used inside useEffect and other functions
    /**
     * Calculates the tip amount and total based on the new subtotal and tip percentage.
     * @param {number} newSubtotal - The new subtotal value.
     * @param {number} [tipPercentage=selectedTip] - The tip percentage. Defaults to the selectedTip state value if not passed.
     */
    const calculateTipAndTotal = (newSubtotal, tipPercentage = selectedTip) => {
        const newTipAmount = newSubtotal * (tipPercentage / 100);
        setTipAmount(newTipAmount);
        const serviceCharge = newSubtotal * 0.01;
        const newTotal = newSubtotal + newTipAmount + serviceCharge;
        setTotal(newTotal);
        sessionStorage.setItem('orderTotal', newTotal);
    };

    const updateOrderType = (event) => {
        setSelectedOrderType(event.target.value);
        sessionStorage.setItem('orderType', event.target.value);
    };


    const toggleTipOption = (percentage) => {
        setSelectedTip(selectedTip === percentage ? 0 : percentage);
        calculateTipAndTotal(subtotal, selectedTip === percentage ? 0 : percentage);
    };


    const updateCart = (cart) => {
        if (Object.keys(cart).length === 0) {
            sessionStorage.removeItem('cart');
            setSessionCart([]);
            calculateTipAndTotal(0);
            setSubtotal(0);
            setTotal(0);
            setTipAmount(0);
        } else {
            sessionStorage.setItem('cart', JSON.stringify(cart));
            const cartArray = Object.values(cart);
            setSessionCart(cartArray);
            // Recalculate subtotal, tip and total based on the updated cart
            const newSubtotal = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);
            setSubtotal(newSubtotal);
            calculateTipAndTotal(newSubtotal);

        }
        sessionStorage.setItem('orderTotal', total);
    };

    // Add and Subtract quantity functions
    const subtractQuantity = (itemName) => {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || {};
        if (cart[itemName].quantity > 1) {
            cart[itemName].quantity -= 1;
        } else {
            delete cart[itemName];
        }
        updateCart({ ...cart });
    };
    const addQuantity = (itemName) => {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || {};
        if (cart[itemName]) {
            cart[itemName].quantity += 1;
        } else {
            cart[itemName] = { ...cart[itemName], quantity: 1 }; // Assuming you have the item details elsewhere
        }
        updateCart({ ...cart });
    };



    /**
     * Confirms the payment by checking if all the required information is entered,
     * and then stores the necessary data in the session storage.
     */
    const confirmPayment = () => {

        // Check if the user has entered all the required information
        if (userName === null || userEmail === null || userPhoneNumber === null || (selectedOrderType === 'Delivery' && deliveryAddress === null)) {
            alert('Please fill in all the required fields.');
            return;
        }

        const userInfo = {
            name: userName,
            email: userEmail,
            phoneNumber: userPhoneNumber,
            deliveryAddress: deliveryAddress || '',
            notes: userNotes || '',
        }

        sessionStorage.setItem('orderType', selectedOrderType);
        sessionStorage.setItem('orderNumber', orderNumber);
        sessionStorage.setItem('tableNumber', tableNumber);
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

        sessionStorage.setItem('orderTotal', total);

        const bookingInfo = sessionStorage.getItem("bookingInfo");
        sessionStorage.setItem('time', { ...bookingInfo, time: reservationTime});
        
        sessionStorage.setItem('cart', JSON.stringify(sessionCart));

        if (selectedOrderType === 'Reservation') {
            sessionStorage.setItem('paymentStatus', 'paid-half');
        } else {
            sessionStorage.setItem('paymentStatus', 'paid-full');
        }
    }



    return (
        <>
            <main className='order'>

                <section className="order-details">
                    <article className='order__number'>
                        <h1 className='order__number-label courierFont'>ORDER #:</h1>
                        <p className='order__number-number courierFont'>{orderNumber}</p>
                    </article>

                    <article className='order-details__dine-in'>
                        <div className='table'>
                            <img className='table-icon' src={tableIcon}></img>
                            <p className='table__label'>Table:</p>
                            <p className="table__number courierFont">{tableNumber}</p>
                        </div>

                        {selectedOrderType === 'Reservation' ?
                            <div className="reservation-time">
                                <img className='time-icon' src={timeIcon}></img>
                                <p className='reservation-time__label'>Time:</p>
                                <p className="reservation-time__time courierFont">{reservationTime}</p>
                            </div>
                            : <></>}
                    </article>
                </section>


                <h1 className='order__summary'>ORDER SUMMARY:</h1>

                <section className='order__items'>
                    <div className='order__items-header'>
                        <h1 className='order__item'>ITEM</h1>
                        <h1 className='order__price'>PRICE</h1>
                        <div className="frame-hidden">
                            <div className="order__button-container">
                                <div className="order__button-left">
                                    <button id="minus-btn">-</button>
                                </div>
                                <div className="order__count">
                                    <h1 id="count">1</h1>
                                </div>
                                <div className="order__button-right">
                                    <button id="plus-btn">+</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        {
                            sessionCart.length > 0 ?
                                sessionCart.map((item, index) => (
                                    <div className='order__row'>
                                        <h1 className='order__item-1'>{item.name}</h1>
                                        <h1 className='order__price-1'>${item.price}.00</h1>
                                        <div className="frame">
                                            <div className="order__button-container">
                                                <button id="minus-btn" onClick={() => subtractQuantity(item.name)}>-</button>
                                                <h1 id="count">{item.quantity}</h1>
                                                <button id="plus-btn" onClick={() => addQuantity(item.name)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                :
                                <div className='order__row-empty-container'>
                                    <p className='order__row-empty'>No Items selected. Go to Home Menu to add items.</p>
                                </div>
                        }
                    </div>
                </section>
                <section className='order__tip'>
                    <h2 className='order__add-tip'>ADD TIP</h2>
                    <div>
                        {[15, 18, 20, 25].map((percentage) => (
                            <button
                                key={percentage}
                                className={`order__tip-option ${selectedTip === percentage ? '--selected' : ''}`}
                                onClick={() => toggleTipOption(percentage)}
                            >
                                {percentage}%
                            </button>
                        ))}
                    </div>

                </section>
                <section className='order__bill'>
                    <div className='order__subtotal'>
                        <h2 className='order__bill-label'>SUBTOTAL</h2>
                        <h2 className='order__bill-label'>${parseInt(subtotal).toFixed(2)}</h2>
                    </div>
                    <div className='order__tip-total'>
                        <h2 className='order__bill-label'>TIPS</h2>
                        <h2 className='order__bill-label'>${tipAmount.toFixed(2)}</h2>
                    </div>
                    <div className='order__service-charge'>
                        <h2 className='order__bill-label'>SERVICE CHARGE <b>1%</b></h2>
                        <h2 className='order__bill-label'>${(subtotal * 0.01).toFixed(2)}</h2>
                    </div>
                </section>

                <section className='order__total'>
                    <h1 className='order__total-label'>TOTAL</h1>
                    <h1 className='order__total-price'>${total.toFixed(2)}</h1>
                </section>

                <section className='order__type'>
                    <h2 className='order__type-label'>Select Order Type</h2>
                    <div>
                        <select className='order__type-menu' value={selectedOrderType} onChange={updateOrderType}>
                            <option value="" disabled hidden>Select Order Type</option>
                            <option value="Dine-In">Dine-In</option>
                            <option value="Reservation">Reservation</option>
                            <option value="Pick-Up">Pick-Up</option>
                            <option value="Delivery">Delivery</option>
                        </select>
                    </div>
                </section>

                <form className='order__user-form'>
                    <label>Name <span className='order__red-font'>*</span></label>
                    <input type='text' id='order__user-name' placeholder='Enter name' value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    <label>Email <span className='order__red-font'>*</span></label>
                    <input type='email' id='order__user-email' placeholder='Enter Email' value={userEmail} onChange={(e) => setUserEmail(e.target.value)}></input>
                    <label>Phone Number <span className='order__red-font'>*</span></label>
                    <input type='tel' id='order__user-number' placeholder='Enter phone number' value={userPhoneNumber} onChange={(e) => setUserPhoneNumber(e.target.value)}></input>
                </form>

                <section className='order__delivery'>
                </section>


                {selectedOrderType === 'Delivery' ?
                    <form className='order-delivery'>
                        <h2 className='order-delivery__header'>Delivery Information:</h2>
                        <label>Address <span className='order__red-font'>*</span></label>
                        <input type='text' id='order-delivery__address' placeholder='Address' value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)}></input>
                    </form>
                    : <></>
                }

                <section className='order-notes'>
                    <label>Notes / Special Requests</label>
                    <textarea id='order-delivery__notes' placeholder='Enter any additional notes or special requests...' value={userNotes} onChange={(e) => setUserNotes(e.target.value)} />
                </section>
                <Payment confirmPayment={confirmPayment} orderType={selectedOrderType} />
            </main>
        </>
    )
}
export default Payments;