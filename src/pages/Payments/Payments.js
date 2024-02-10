import "./Payments.scss";

function Payments() {

    

    return (
        <article className = 'order__container'>
            <section className='order'>
                <h1 className='order__number'>ORDER #:</h1>
                <div className='order__details'>
                    <h2 className='order__details-table'>Table:</h2>
                    <h2 className='order__details-time'>Time:</h2>
                </div>
            </section>
            <h1 className='order__summary'>ORDER SUMMARY:</h1>

            <section className='order__items'>
                <div className='order__items-header'>
                    <h1 className='order__item'>ITEM</h1>
                    <h1 className='order__price'>PRICE</h1>

                </div>
                <div className='order__row'>
                <div className ='order__details'>
                    <h1 className='order__item-1'>CHICKEN WINGS</h1>
                    <h1 className='order__price-1'>$20,00</h1>
                </div>
                    <div class="frame">
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
                <div className='order__row'>
                <div className ='order__details'>
                    <h1 className='order__item-1'>SUMMER SALAD</h1>
                    <h1 className='order__price-1'>$10,00</h1>
                </div>
                    <div class="frame">
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
                <div className='order__row'>
                    <div className ='order__details'>
                    <h1 className='order__item-1'>FRENCH FRIES</h1>
                    <h1 className='order__price-1'>$5,00</h1>
                    </div>
                    <div class="frame">
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
            </section>
            <section className = 'order__tip'>
            <h2>ADD TIP</h2>
            <h1 className = 'order__tip-option'>$5</h1>
            <h1 className = 'order__tip-option'>$10</h1>
            <h1 className = 'order__tip-option'>$15</h1>
            <h1 className = 'order__tip-option'>$20</h1>
            </section>
            <section className = 'order__bill'>
                <div className = 'order__subtotal'>
                <h2>SUBTOTAL</h2>
                <h2>$35,00</h2>
                </div>
                <div className = 'order__tip-total'>
                <h2>TIPS</h2>
                <h2>$5,00</h2>
                </div>
                <div className = 'order__service-charge'>
                <h2>SERVICE CHARGE <b>10%</b></h2>
                <h2>$3,50</h2>
                </div>
            </section>

            <section className = 'order__total'>
                    <h1 className = 'order__total-label'>TOTAL</h1>
                    <h1 className = 'order__total-price'>$43.50</h1>
                </section>

            <section className = 'order__type'>
                <h2 classname = 'order__type-label'>Order Type</h2>
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
            <label>Address *</label>
            <input type = 'text' id = 'order__delivery-address' placeholder = 'Address'></input>
            <label>Notes / Special Requests</label>
            <textarea id = 'order__delivery-notes' placeholder = 'Enter any additional notes or special requests (e.g., Leave on patio, ring doorbell)'/>
            </form>
        </article>
    )
}
export default Payments;