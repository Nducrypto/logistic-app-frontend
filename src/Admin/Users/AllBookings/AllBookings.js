import React from "react";
import { useDispatch } from "react-redux";
import { deletePassengerBookings } from "../../../States/Action/PassengerActions";
import useFetch from "../../../Hooks/useFetch";
import { CircularProgress } from "@mui/material";

const AllBookings = () => {
  const { data, loading } = useFetch("/passenger");
  // const { passenger, isError } = useSelector((state) => state.passengers);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      {/* <h2>{isError}</h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {!data.length & !loading ? (
          <h3>No Booking</h3>
        ) : loading ? (
          <CircularProgress />
        ) : (
          data.map((p) => (
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
              <button onClick={() => dispatch(deletePassengerBookings(p._id))}>
                delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllBookings;
