import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Subscribe } from "../../Components";
import { deleteLocations } from "../../States/Action/LocationActions";

const Locations = () => {
  const { location } = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ marginTop: "6rem" }}>
        {location.map((p) => (
          <div key={p._id} style={{ marginTop: "2rem" }}>
            <div>{p.departureTerminal}</div>
            <>{p.arrivalTerminal}</>
            <>{p.price}</>
            <button onClick={() => dispatch(deleteLocations(p._id))}>
              delete
            </button>
          </div>
        ))}
      </div>
      <Subscribe />
    </div>
  );
};

export default Locations;
