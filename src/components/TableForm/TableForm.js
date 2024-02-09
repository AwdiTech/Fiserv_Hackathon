import "./TableForm.scss";

function TableForm() {
  return (
    <form className="tableForm">
      <h3>Book a table</h3>
      <div className="tableForm__guestInfo">
        <label className="tableForm__guestInfo-label">Guests</label>
        <input type="number" />
      </div>
      <div className="tableForm__dateInfo">
        <label className="tableForm__dateInfo-label">Date</label>
        <input type="date" />
      </div>
      <div className="tableForm__timeInfo">
        <label className="tableForm__timeInfo-label">Time</label>
        <input type="time" />
      </div>
      <section className="tableForm__personalInfo">
        <div className="tableForm__personalInfo-name">
          <label className="tableForm__personalInfo-nameLabel">Name</label>
          <input />
        </div>
        <div className="tableForm__personalInfo-email">
          <label className="tableForm__personalInfo-emailLabel">Email</label>
          <input type="email" />
        </div>
        <div className="tableForm__personalInfo-phoneNum">
          <label className="tableForm__personalInfo-phoneNumLabel">
            Phone Number
          </label>
          <input />
        </div>
        <div className="tableForm__personalInfo-notes">
          <label className="tableForm__personalInfo-notesLabel">
            Notes / Special Requests
          </label>
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
