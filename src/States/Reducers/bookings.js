const bookings = (
  bookings = {
    booking: [],
  },
  action
) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...bookings,
        booking: [...bookings.booking, action.payload],
      };

    case "DELETE":
      return {
        ...bookings,
        booking: bookings.booking.filter((t) => t._id !== action.payload),
      };

    default:
      return bookings;
  }
};

export default bookings;
