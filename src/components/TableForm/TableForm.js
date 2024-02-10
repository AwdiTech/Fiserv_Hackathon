import "./TableForm.scss";
import CancelIcon from "../../assets/icons/cancel.svg";
import ConfirmIcon from "../../assets/icons/confirm.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorIcon from "../../assets/icons/error-24px.svg";

function TableForm() {
  const navigate = useNavigate();
  const [guestsNum, setGuestsNum] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [notes, setNotes] = useState("");
  const [maxCharacter, setMaxCharacter] = useState(10);

  const [error, setError] = useState({
    guestsNumError: false,
    dateError: false,
    timeError: false,
    nameError: false,
    emailError: false,
    phoneNumError: false,
    notesError: false,
  });

  const handlePhoneNumberFormat = () => {
    const phoneNumArray = phoneNum.split("");

    //IF ONLY NUMBERS
    if (!phoneNumArray.includes("(" || ")" || "+" || " " || "0")) {
      setMaxCharacter(10);
      if (phoneNumArray.length === 10) {
        const formateNumber = `+1 (${phoneNumArray[0]}${phoneNumArray[1]}${phoneNumArray[2]}) ${phoneNumArray[3]}${phoneNumArray[4]}${phoneNumArray[5]}-${phoneNumArray[6]}${phoneNumArray[7]}${phoneNumArray[8]}${phoneNumArray[9]}`;
        setPhoneNum(formateNumber);
      }
      return;
    }

    //IF NON-NUMBER
    if (phoneNumArray.includes("(" || ")" || "+" || " " || "-")) {
      setMaxCharacter(17);
      return;
    }
  };

  const handleChangeGuestNum = (event) => {
    const guestsNum = event.target.value;
    setGuestsNum(guestsNum);
  };

  const handleChangeDate = (event) => {
    const date = event.target.value;
    setDate(date);
  };

  const handleChangeTime = (event) => {
    const time = event.target.value;
    setTime(time);
  };

  const handleChangeName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleChangePhoneNum = (event) => {
    const phoneNum = event.target.value;
    setPhoneNum(phoneNum);
  };

  const handleChangeNotes = (event) => {
    const notes = event.target.value;
    setNotes(notes);
  };

  const handleCancel = () => {
    alert("Reservation cancel");
    navigate("/");
  };

  const isFormValid = () => {
    let formComplete = true;

    let errorState = {
      guestsNumError: false,
      dateError: false,
      timeError: false,
      nameError: false,
      emailError: false,
      phoneNumError: false,
      notesError: false,
    };

    if (guestsNum.length === 0) {
      errorState.guestsNumError = true;
      formComplete = false;
    }

    if (date.length === 0) {
      errorState.dateError = true;
      formComplete = false;
    }

    if (time.length === 0) {
      errorState.timeError = true;
      formComplete = false;
    }

    if (name.length === 0) {
      errorState.nameError = true;
      formComplete = false;
    }

    if (email.length === 0) {
      errorState.emailError = true;
      formComplete = false;
    }

    const phoneRegex = /\+1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/;
    //VALIDATE PHONE-NUMBER
    if (!phoneNum.match(phoneRegex)) {
      errorState.phoneNumError = true;
      formComplete = false;
    }

    setError(errorState);

    return formComplete;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setGuestsNum("");
      setDate("");
      setTime("");
      setName("");
      setEmail("");
      setPhoneNum("");
      setNotes("");

      const booking = {
        guests: guestsNum,
        date: date,
        time: time,
        name: name,
        email: email,
        phoneNum: phoneNum,
        notes: notes,
      };
      let cart = sessionStorage.getItem("cart");

      if (cart === null) {
        alert("Reservation Canceled");
        navigate("/");
      } else {
        sessionStorage.setItem("orderType", "Reservation");
        sessionStorage.setItem("bookingInfo", JSON.stringify(booking));
        alert("Reservation Booked");
        navigate("/check-in");
      }
    }
  };
  return (
    <form className="tableForm" onSubmit={handleSubmit}>
      <h3>Book a table</h3>
      <div className="tableForm__guestInfo">
        <label className="tableForm__guestInfo-label">Guests</label>
        <input
          type="number"
          min="0"
          name="guestInfo"
          form="guestInfo"
          className={`tableForm__guestInfo-input ${
            error.guestsNumError ? "tableForm__guestInfo-invalidInput" : ""
          }`}
          value={guestsNum}
          onChange={handleChangeGuestNum}
        />
      </div>
      <span
        className={`tableForm__guestInfo-errorMsg ${
          error.guestsNumError
            ? "tableForm__guestInfo-errorMsgInvalidInput"
            : ""
        }`}
      >
        <img src={ErrorIcon} alt="Error Icon" />
        This field is required
      </span>
      <div className="tableForm__dateInfo">
        <label className="tableForm__dateInfo-label">Date</label>
        <input
          type="date"
          className={`tableForm__dateInfo-input ${
            error.dateError ? "tableForm__dateInfo-invalidInput" : ""
          }`}
          value={date}
          onChange={handleChangeDate}
        />
      </div>
      <span
        className={`tableForm__dateInfo-errorMsg ${
          error.dateError ? "tableForm__dateInfo-errorMsgInvalidInput" : ""
        }`}
      >
        <img src={ErrorIcon} alt="Error Icon" />
        This field is required
      </span>
      <div className="tableForm__timeInfo">
        <label className="tableForm__timeInfo-label">Time</label>
        <input
          type="time"
          className={`tableForm__timeInfo-input ${
            error.timeError ? "tableForm__timeInfo-invalidInput" : ""
          }`}
          value={time}
          onChange={handleChangeTime}
        />
      </div>
      <span
        className={`tableForm__timeInfo-errorMsg ${
          error.timeError ? "tableForm__timeInfo-errorMsgInvalidInput" : ""
        }`}
      >
        <img src={ErrorIcon} alt="Error Icon" />
        This field is required
      </span>
      <section className="tableForm__personalInfo">
        <div className="tableForm__personalInfo-name">
          <label className="tableForm__personalInfo-nameLabel">Name</label>
          <input
            className={`tableForm__personalInfo-nameInp ${
              error.nameError ? "tableForm__personalInfo-invalidInput" : ""
            }`}
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <span
          className={`tableForm__personalInfo-errorMsg ${
            error.nameError
              ? "tableForm__personalInfo-errorMsgInvalidInput"
              : ""
          }`}
        >
          <img src={ErrorIcon} alt="Error Icon" />
          This field is required
        </span>
        <div className="tableForm__personalInfo-email">
          <label className="tableForm__personalInfo-emailLabel">Email</label>
          <input
            type="email"
            className={`tableForm__personalInfo-emailInp ${
              error.emailError ? "tableForm__personalInfo-invalidInput" : ""
            }`}
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <span
          className={`tableForm__personalInfo-errorMsg ${
            error.emailError
              ? "tableForm__personalInfo-errorMsgInvalidInput"
              : ""
          }`}
        >
          <img src={ErrorIcon} alt="Error Icon" />
          This field is required
        </span>
        <div className="tableForm__personalInfo-phoneNum">
          <label className="tableForm__personalInfo-phoneNumLabel">
            Phone Number
          </label>
          <input
            className={`tableForm__personalInfo-phoneNumInp ${
              error.phoneNumError ? "tableForm__personalInfo-invalidInput" : ""
            }`}
            value={phoneNum}
            onChange={handleChangePhoneNum}
            maxLength={maxCharacter}
            onKeyUp={() => {
              handlePhoneNumberFormat();
            }}
          />
        </div>
        <span
          className={`tableForm__personalInfo-errorMsg ${
            error.phoneNumError
              ? "tableForm__personalInfo-errorMsgInvalidInput"
              : ""
          }`}
        >
          <img src={ErrorIcon} alt="Error Icon" />
          This field is required / Should be in correct format
        </span>
        <div className="tableForm__personalInfo-notes">
          <label className="tableForm__personalInfo-notesLabel">
            Notes / Special Requests
          </label>
          <textarea
            className="tableForm__personalInfo-notesInp"
            value={notes}
            onChange={handleChangeNotes}
          />
        </div>
      </section>
      <p className="tableForm__message">
        Note: 50% of payment is required upfront to reserve a table. Click
        "Confirm" to proceed to payment.
      </p>
      <div className="tableForm__buttons">
        <button className="tableForm__buttons-cancel" onClick={handleCancel}>
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
