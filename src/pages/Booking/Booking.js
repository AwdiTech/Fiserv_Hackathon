import TableForm from "../../components/TableForm/TableForm";
import RestaurantHero from "../../assets/images/restaurant-hero.jpg";
import LocationIcon from "../../assets/icons/location.svg";
import "./Booking.scss";

function Booking(props) {
  const { name, address } = props;

  return (
    <section className="reservation">
      <div className="reservation__titleContainer">
        <h1 className="reservation__title">Book Reservation Now</h1>
      </div>
      <div className="reservation__heroContainer">
        <img
          src={RestaurantHero}
          alt="Restaurant Hero Photo"
          className="reservation__heroContainer-img"
        />
      </div>
      <div className="reservation__content">
        <h2>{name}</h2>
        <div className="reservation__content-address">
          <img src={LocationIcon} alt="Location Icon" />
          <p>{address}</p>
        </div>
      </div>
      <TableForm />
    </section>
  );
}

export default Booking;
