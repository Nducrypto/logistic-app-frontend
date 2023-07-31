import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Subscribe } from "../../Components";
import {
  deleteLocations,
  handleDeleteunavDate,
} from "../../States/Action/LocationActions";

const Locations = () => {
  const { location } = useSelector((state) => state.locations);

  const dispatch = useDispatch();

  return (
    <div>
      <div style={{ marginTop: "6rem" }}>
        {location.map((bus) => (
          <div key={bus._id} style={{ marginTop: "2rem" }}>
            <div>{bus.departureTerminal}</div>
            <>{bus.arrivalTerminal}</>
            <>{bus.price}</>
            <button onClick={() => dispatch(deleteLocations(bus._id))}>
              delete
            </button>
            {bus?.seatNumbers?.map((number) => (
              <div key={number._id}>
                <>
                  {number.unavailableDates.map((i) => (
                    <div key={i}>
                      {i}

                      <button
                        onClick={() => {
                          dispatch(
                            handleDeleteunavDate(bus._id, number._id, i)
                          );
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
