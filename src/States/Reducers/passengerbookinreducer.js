const passengers = (passengers = { passenger: [], isError: false }, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...passengers, isError: action.payload };

    case "FETCH_ALL_BOOKINGS":
      return {
        ...passengers,
        passenger: action.payload,
      };
    case "CREATE_PASSENGER_BOOKINGS":
      return {
        ...passengers,
        passenger: [...passengers.passenger, action.payload],
      };

    case "DELETE_PASSENGER_BOOKING":
      return {
        ...passengers,
        passenger: passengers.passenger.filter((t) => t._id !== action.payload),
      };

    default:
      return passengers;
  }
};

export default passengers;
