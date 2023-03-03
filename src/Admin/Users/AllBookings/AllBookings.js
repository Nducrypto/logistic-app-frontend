import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePassengerBookings } from "../../../States/Action/PassengerActions";
import { CircularProgress } from "@mui/material";
import { Subscribe } from "../../../Components";
import moment from "moment";

const AllBookings = () => {
  const { passenger, loadingPassenger, isError } = useSelector(
    (state) => state.passengers
  );
  const dispatch = useDispatch();

  return (
    <div>
      <div
        style={{
          marginTop: "5rem",
        }}
      >
        <h2>{isError}</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          {!passenger.length & !loadingPassenger ? (
            <h3>No Booking</h3>
          ) : loadingPassenger ? (
            <CircularProgress />
          ) : (
            passenger.map((p) => (
              <div
                key={p._id}
                style={{
                  marginTop: "2rem",
                }}
              >
                <div>{p.departureTerminal}</div>
                <div>{p.arrivalTerminal}</div>
                <div>FullName : {p.fullName}</div>

                <div>Email : {p.email}</div>

                <div>
                  Total Amount : &#8358;{" "}
                  {Intl.NumberFormat().format(p.totalPrice)}
                </div>
                <div>BookingCode : {p.bookingCode}</div>

                <div>{moment(p.date).format("dddd, MMM Do YYYY")}</div>
                <div>phonenumber :{p.phoneNumber}</div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <div>bookedSeat</div>
                  <div style={{ display: "flex" }}>
                    {p.bookedSeat.join(" , ")}
                  </div>
                  {/* <>selectedSeats</>
                  <div style={{ display: "flex" }}>
                    {p.selectedSeats.map((seatId) => (
                      <span key={seatId}>{seatId}</span>
                    ))}
                  </div>  */}
                </div>
                <div>nextofkinname :{p.nextOfKinName}</div>
                <div>nextofkinnumber :{p.nextOfKinNumber}</div>
                <div>Adults : {p.adults}</div>

                <button
                  onClick={() =>
                    dispatch(deletePassengerBookings(p._id, p.selectedSeats))
                  }
                >
                  delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default AllBookings;
