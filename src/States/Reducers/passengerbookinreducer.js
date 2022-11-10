const passengers = (
  passengers = { passenger: [], isError: false, loadingPassenger: false },
  action
) => {
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

    case "START_PASSENGER_LOADING":
      return { ...passengers, loadingPassenger: true };

    case "END_PASSENGER_LOADING":
      return { ...passengers, loadingPassenger: false };

    default:
      return passengers;
  }
};

export default passengers;
