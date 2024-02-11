import "./Payments.scss";
import table from '../../assets/icons/table.png'
import time from '../../assets/icons/time.png'
import {useState, useEffect} from 'react'
import Payment from '../../components/Payment/Payment'

function Payments() {

    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };   
    
    const [sessionData, setSessionData] = useState([]);
    const [subtotal, setSubtotal] = useState([]);
    const [tipOptions, setTipOptions] = useState({
        15: false,
        18: false,
        20: false,
        25: false
    })
    const [tipAmount, setTipAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const storedData = sessionStorage.getItem('cart')

        if (storedData) {
            const parsedData = JSON.parse(storedData);

            const dataArray = Object.values(parsedData);
            setSessionData(dataArray)

            const subtotalAmount = dataArray.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0)
            setSubtotal(subtotalAmount)
        }
    }, [])

    useEffect(() => {
        updateTipAmount();
    }, [tipOptions, subtotal]); // Update tip amount whenever tipOptions or subtotal change

    useEffect(() => {
        updateTotal();
    }, [tipAmount, subtotal]); // Update total whenever tipAmount or subtotal change

    const toggleTipOption = (percentage) => {
        const newTipOptions = {};
        // Set all options to false except the clicked one
        for (const [key, value] of Object.entries(tipOptions)) {
            newTipOptions[key] = key === percentage;
        }
        setTipOptions(newTipOptions);
        updateTipAmount(); // Call updateTipAmount after setting the newTipOptions
    };

    const updateTipAmount = () => {
        let selectedTipPercentage = 0;
        // Find the selected tip percentage
        for (const [percentage, selected] of Object.entries(tipOptions)) {
            if (selected) {
                selectedTipPercentage = parseInt(percentage);
                break;
            }
        }
        // Calculate tip amount
        const tipAmountValue = subtotal * (selectedTipPercentage / 100);
        setTipAmount(tipAmountValue);
    };

    const updateTotal = () => {
        const totalAmount = subtotal + tipAmount;
        setTotal(totalAmount); // Update the total state
    };

    return (
        <>
        <article className = 'order__container'>
            <section className='order'>
                <h1 className='order__number'>ORDER #:</h1>
                    <div className = 'order__details'>
                    <img className = 'order__table-img' src = {table}></img>
                    <h2 className='order__details-table'>Table:</h2>
                    <img className = 'order__time-img' src = {time}></img>
                    <h2 className='order__details-time'>Time:</h2>
                    </div>
            </section>
            <h1 className='order__summary'>ORDER SUMMARY:</h1>

            <section className='order__items'>
                <div className='order__items-header'>
                    <h1 className='order__item'>ITEM</h1>
                    <h1 className='order__price'>PRICE</h1>
                    <div class="frame-hidden">
                        <div class="order__button-container">
                            <div class="order__button-left">
                                <button id="minus-btn">-</button>
                            </div>
                            <div class="order__count">
                                <h1 id="count">1</h1>
                            </div>
                            <div class="order__button-right">
                                <button id="plus-btn">+</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                {sessionData.map((item, index) => (
                <div className='order__row'>
                    <h1 className='order__item-1'>{item.name}</h1>
                    <h1 className='order__price-1'>${item.price}.00</h1>
                    <div class="frame">
                        <div class="order__button-container">
                            <div class="order__button-left">
                                <button id="minus-btn">-</button>
                            </div>
                            <div class="order__count">
                                <h1 id="count">{item.quantity}</h1>
                            </div>
                            
                            <div class="order__button-right">
                                <button id="plus-btn">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </section>
            <section className = 'order__tip'>
            <h2 className = 'order__add-tip'>ADD TIP</h2>
            <div>
            {Object.entries(tipOptions).map(([percentage, selected]) => (
                            <button
                                key={percentage}
                                className={`order__tip-option ${selected ? '--selected' : ''}`}
                                onClick={() => toggleTipOption(percentage)}
                            >
                                {percentage}%
                            </button>
                        ))}
            </div>
            </section>
            <section className = 'order__bill'>
                <div className = 'order__subtotal'>
                <h2 className = 'order__bill-label'>SUBTOTAL</h2>
                <h2 className = 'order__bill-label'>${subtotal}.00</h2>
                </div>
                <div className = 'order__tip-total'>
                <h2 className = 'order__bill-label'>TIPS</h2>
                <h2 className = 'order__bill-label'>{tipAmount.toFixed(2)}</h2>
                </div>
                <div className = 'order__service-charge'>
                <h2 className = 'order__bill-label'>SERVICE CHARGE <b>10%</b></h2>
                <h2 className = 'order__bill-label'>${(subtotal*0.1).toFixed(2)}</h2>
                </div>
            </section>

            <section className = 'order__total'>
                    <h1 className = 'order__total-label'>TOTAL</h1>
                    <h1 className = 'order__total-price'>${total}</h1>
                </section>

            <section className = 'order__type'>
                <h2 classname = 'order__type-label'>Order Type</h2>
                <div>
        <select className = 'order__type-menu' value={selectedOption} onChange={handleChange}>
        <option value="" disabled hidden>Select Order Type (Dine-in, Pick-Up, Delivery)</option>
        <option value="Dine-In">Dine-In</option>
        <option value="Pick-Up">Pick-Up</option>
        <option value="Delivery">Delivery</option>
      </select>
    </div>
            </section>

            <form className = 'order__user-form'>
            <label>Name <span className = 'order__red-font'>*</span></label>
            <input type = 'text' id = 'order__user-name' placeholder = 'Enter name'></input>
            <label>Email <span className = 'order__red-font'>*</span></label>
            <input type = 'email' id = 'order__user-email' placeholder = 'Enter Email'></input>
            <label>Phone Number <span className = 'order__red-font'>*</span></label>
            <input type = 'tel' id = 'order__user-number' placeholder = 'Enter phone number'></input>
            </form>

            <section className = 'order__delivery'>
                <h2 classname = 'order__delivery-information'>Delivery Information:</h2>
            </section>

            <form className = 'order__delivery-form'>
            <label>Address <span className = 'order__red-font'>*</span></label>
            <input type = 'text' id = 'order__delivery-address' placeholder = 'Address'></input>
            <label>Notes / Special Requests</label>
            <textarea id = 'order__delivery-notes' placeholder = 'Enter any additional notes or special requests (e.g., Leave on patio, ring doorbell)'/>
            </form>
            <Payment/>
        </article>
       </> 
       )
}
export default Payments;