import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePassengerBookings } from "../../../States/Action/PassengerActions";
import { CircularProgress } from "@mui/material";
import { Subscribe } from "../../../Components";

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
                <div>{p.price}</div>
                <div>phonenumber :{p.phoneNumber}</div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <>bookeddSeat</>
                  <div style={{ display: "flex" }}>
                    {p.bookedSeat.map((p, i) => (
                      <div key={i}>
                        <div>{p},</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>nextofkinname :{p.nextOfKinName}</div>
                <div>nextofkinnumber :{p.nextOfKinNumber}</div>
                <button
                  onClick={() => dispatch(deletePassengerBookings(p._id))}
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
