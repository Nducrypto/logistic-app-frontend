import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "../../../States/Action/BookingActions";
const AllBookings = () => {
  const { booking } = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      {booking.map((p) => (
        <div
          key={p._id}
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr ",
          }}
        >
          <div>{p.departureTerminal}</div>
          <div>{p.arrivalTerminal}</div>
          <div>phonenumber :{p.phoneNumber}</div>

          <div>{p.price}</div>
          <div>{p.date}</div>
          {/* <div>{p.selectedSeats},</div> */}
          <div>nextofkinname :{p.nextOfKinName}</div>
          <div>nextofkinnumber :{p.nextOfKinNumber}</div>
          <button onClick={() => dispatch(deleteBooking(p._id))}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default AllBookings;
