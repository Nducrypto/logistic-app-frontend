const allUsers = (allUsers = [], action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return action.payload;

    //   case "CREATE":
    //     return {
    //       ...bookings,
    //       booking: [...bookings.booking, action.payload],
    //     };

    //   case "DELETE":
    //     return {
    //       ...bookings,
    //       booking: bookings.booking.filter((t) => t._id !== action.payload),
    //     };

    default:
      return allUsers;
  }
};

export default allUsers;
