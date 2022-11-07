const allUsers = (
  allUsers = { allUser: [], singleUser: [], error: false },
  action
) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...allUsers, error: action.payload };

    case "FETCH_USERS":
      return {
        ...allUsers,
        allUser: action.payload,
      };

    case "FETCH_USER_BY_ID":
      return { ...allUsers, singleUser: action.payload };

    case "UPDATE_USER":
      return {
        ...allUsers,
        singleUser: allUsers.singleUser.map((p) =>
          p._id === action.payload._id ? action?.payload : p
        ),
      };

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
