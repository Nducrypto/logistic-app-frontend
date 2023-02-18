import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// ===========LOCATIONS APP======
export const fetchLocations = () => API.get("/page");
// export const fetchBookingById = (id) => API.get(`/page/${id}`);
export const createLocations = (newBooking) => API.post("/page", newBooking);
export const deleteLocations = (id) => API.delete(`/page/${id}`);
export const handleDeleteunavDate = (id, seatNumberId, unavailableDates) =>
  API.delete(`/page/date/${id}/${seatNumberId}/${unavailableDates}`);
// ==========PASSENGER BOOKINGS======
export const fetchAllBoookings = () => API.get("/passenger");
export const createPassengerBooking = (neww) => API.post("/passenger", neww);
export const deletePassengerBookings = (id) => API.delete(`/passenger/${id}`);

//    =======Auth API=====
export const login = (formAuth) => API.post("/auth/login", formAuth);
export const register = (formAuth) => API.post("/auth/register", formAuth);

// ========USERS API=======
export const fetchUsers = () => API.get("/users");
export const fetchUser = (id) => API.get(`/users/${id}`);

export const updateUser = (id, userUpdate) =>
  API.put(`/users/${id}`, userUpdate);
