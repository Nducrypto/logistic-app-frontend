import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePassengerBookings } from "../../../States/Action/PassengerActions";

const AllBookings = () => {
  const { passenger, isError } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  return (
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
        {passenger.map((p) => (
          <div
            key={p._id}
            style={{
              marginTop: "2rem",
            }}
          >
            <div>{p.departureTerminal}</div>
            <div>{p.arrivalTerminal}</div>
            <div>{p.price}</div>
            <div>{p.seatNumbers}</div>
            <div>phonenumber :{p.phoneNumber}</div>

            <div style={{ display: "flex", gap: "1rem" }}>
              <>selectedSeats</>
              <div style={{ display: "flex" }}>
                {p.selectedSeats.map((p, i) => (
                  <div key={i}>
                    <div>{p},</div>
                  </div>
                ))}
              </div>
            </div>
            <div>nextofkinname :{p.nextOfKinName}</div>
            <div>nextofkinnumber :{p.nextOfKinNumber}</div>
            <button onClick={() => dispatch(deletePassengerBookings(p._id))}>
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBookings;
