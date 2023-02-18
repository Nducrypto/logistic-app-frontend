import React, { createContext, useContext, useState } from "react";
import FormatDate from "../../Utils/FormatDate";
const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = {
    email: "",
    phoneNumber: "",
    nextOfKinName: "",
    nextOfKinNumber: "",
    fullName: "",
  };
  const [mode, setMode] = useState("");
  const [departureTerminal, setDepartureTerminal] = useState("");
  const [arrivalTerminal, setArrivalTerminal] = useState("");
  const [date, setDate] = useState(FormatDate(new Date()));
  const [adults, setAdults] = useState(1);
  const [price, setPrice] = useState("");
  const [seats, setSeats] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState(initialState);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeat, setBookedSeat] = useState([]);
  const [vehicleId, setVehicleId] = useState("");
  console.log(vehicleId);
  return (
    <stateContext.Provider
      value={{
        departureTerminal,
        setDepartureTerminal,
        date,
        setDate,
        arrivalTerminal,
        setArrivalTerminal,
        adults,
        setAdults,
        mode,
        setMode,

        price,
        setPrice,
        seats,
        setSeats,
        open,
        setOpen,
        error,
        setError,
        form,
        setForm,
        initialState,
        selectedSeats,
        setSelectedSeats,
        bookedSeat,
        setBookedSeat,
        vehicleId,
        setVehicleId,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
