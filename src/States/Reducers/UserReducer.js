const allUsers = (
  allUsers = {
    allUser: [],
    singleUser: {},
    loading: false,
    error: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...allUsers,
        allUser: action.payload,
      };

    case "FETCH_USER_BY_ID":
      return { ...allUsers, singleUser: action.payload };

    case "UPDATE_USER":
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return {
        ...allUsers,
        singleUser: allUsers.singleUser.map((p) =>
          p._id === action.payload._id ? action?.payload : p
        ),
      };

    case "SET_ERROR":
      return { ...allUsers, error: action.payload };

    case "LOADING_TRUE":
      return { ...allUsers, loading: true };

    case "LOADING_FALSE":
      return { ...allUsers, loading: false };

    default:
      return allUsers;
  }
};

export default allUsers;
