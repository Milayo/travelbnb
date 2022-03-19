import React from "react";
import "./bookings.styles.scss";
import { useSelector } from "react-redux";
import BookingItem from "../../components/bookingitem/bookingitem";
import {
  Elements,
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { selectBookingCost  } from "../../redux/bookings/bookings.selector";



const stripePromise = loadStripe(
  "pk_test_51JWk4tDr7FJ4ewEpe7AQTlUP9hzi1y0ZtTX6pSdW1G1VvTpY927cMjeWEVwUm3HZygGb7sOdD5xEFm9HEkVYtMGd00be4pjmzD"
);



const BookingPage = () => {
  const bookings = useSelector((state) => state.booking.bookedLocations);
  const total = useSelector(selectBookingCost);
  
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1Kf4dwDr7FJ4ewEp9SzEZRNZ", 
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "http://localhost:3000/",
      cancelUrl: "http://localhost:3000/",
    });
  }; 

  return (

      <div className="booking-page">
        <div className="booking-header">
          <div className="header-block">
            <span>Location</span>
          </div>
          <div className="header-block">
            <span>Name</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {bookings.map((locationItem) => (
          <BookingItem key={locationItem.id} locationItem={locationItem} />
        ))}
        <div className="total">
          <span>Total: ${total}</span>
        </div>
        <button role="link" onClick={handleClick}>
          Checkout
        </button>
      </div>
    
  );
};

// const mapStateToProps = createStructuredSelector({
//   bookings: selectBookingItems,
//   cost: selectBookingCost
// })

export default BookingPage;





