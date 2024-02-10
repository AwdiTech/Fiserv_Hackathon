import "./TableForm.scss";
import CancelIcon from "../../assets/icons/cancel.svg";
import ConfirmIcon from "../../assets/icons/confirm.svg";

function TableForm() {
  return (
    <form className="tableForm">
      <h3>Book a table</h3>
      <div className="tableForm__guestInfo">
        <label className="tableForm__guestInfo-label">Guests</label>
        <input type="number" min="0" />
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
      <p className="tableForm__message">
        Note: 50% of payment is required upfront to reserve a table. Click
        "Confirm" to proceed to payment.
      </p>
      <div className="tableForm__buttons">
        <button className="tableForm__buttons-cancel">
          Cancel
          <img
            src={CancelIcon}
            alt="Cancel Icon"
            className="tableForm__buttons-cancelIcon"
          />
        </button>
        <button className="tableForm__buttons-confirm">
          Confirm
          <img
            src={ConfirmIcon}
            alt="Confirm Icon"
            className="tableForm__buttons-confirmIcon"
          />
        </button>
      </div>
    </form>
  );
}

export default TableForm;
