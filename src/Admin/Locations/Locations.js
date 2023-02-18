import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Subscribe } from "../../Components";
import {
  deleteLocations,
  handleDeleteunavDate,
} from "../../States/Action/LocationActions";

const Locations = () => {
  const { location } = useSelector((state) => state.locations);
  // console.log(location);
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
            {p?.seatNumbers?.map((item) => (
              <div key={item._id}>
                <>
                  {item.unavailableDates.map((i) => (
                    <div key={i}>
                      {i}

                      <button
                        onClick={() => {
                          dispatch(handleDeleteunavDate(p._id, item._id, i));
                        }}
                      >
                        hey
                      </button>
                    </div>
                  ))}
                </>
                {/* <button
                 
                >
                  delete
                </button> */}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Subscribe />
    </div>
  );
};

export default Locations;
