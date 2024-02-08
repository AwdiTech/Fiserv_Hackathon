import "./TableForm.scss";

function TableForm() {
  return (
    <form className="tableForm">
      <h3>Book a table</h3>
      <div className="tableForm__guestInfo">
        <label className="tableForm__guestLabel">Guests</label>
        <div className="tableForm__guestInfo-input">
          <div>-</div>
          <input type="number" />
          <div>+</div>
        </div>
      </div>
      <div>
        <label>Date</label>
        <input type="date" />
      </div>
      <div>
        <label>Time</label>
        <input type="time" />
      </div>
      <section>
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Phone Number</label>
          <input />
        </div>
        <div>
          <label>Notes / Special Requests</label>
          <textarea />
        </div>
      </section>
      <p>
        Note: 50% of payment is required upfront to reserve a table. Click
        "Confirm" to proceed to payment.
      </p>
      <div>
        <button>Cancel</button>
        <button>Confirm</button>
      </div>
    </form>
  );
}

export default TableForm;
