import axios from "axios";

const API = axios.create({ baseURL: "https://logistic-api.onrender.com/api" });
// const API = axios.create({ baseURL: "http://localhost:5000/api" });

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

// ==========PASSENGER BOOKINGS======
export const fetchAllBoookings = () => API.get("/passenger");
export const createPassengerBooking = (newBooking) =>
  API.post("/passenger", newBooking);
export const deletePassengerBookings = (id) => API.delete(`/passenger/${id}`);

//    =======Auth API=====
export const login = (formAuth) => API.post("/auth/login", formAuth);
export const register = (formAuth) => API.post("/auth/register", formAuth);

// ========USERS API=======
export const fetchUsers = () => API.get("/users");
