import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

export const fetchBookings = () => API.get("/page");

export const fetchBookingById = (id) => API.get(`/page/${id}`);

// export const createBooking = (newBooking) => API.post("/page", newBooking);
export const createBooking = (newBooking) =>
  API.post("/passengerinfo", newBooking);

export const deleteBooking = (id) => API.delete(`/page/${id}`);

export const login = (formAuth) => API.post("/auth/login", formAuth);
export const register = (formAuth) => API.post("/auth/register", formAuth);
