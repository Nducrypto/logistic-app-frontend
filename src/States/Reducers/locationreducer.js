const locations = (locations = { location: [], isError: false }, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...locations, isError: action.payload };

    case "FETCH_LOCATIONS":
      return {
        ...locations,
        location: action.payload,
      };
    case "CREATE_LOCATIONS":
      return {
        ...locations,
        location: [...locations.location, action.payload],
      };

    case "DELETE_LOCATIONS":
      return {
        ...locations,
        location: locations.location.filter((t) => t._id !== action.payload),
      };

    default:
      return locations;
  }
};

export default locations;
