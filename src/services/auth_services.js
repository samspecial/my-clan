import axios from "axios";

const API_URL = "http://localhost:3000/auth/";

const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "signup", {
    firstName,
    lastName,
    email,
    password
  });
};

const login = (email, password) => {
  return axios.post(API_URL, {
    email,
    password
  })
  // }).then((response) => {
  //   if (response.data.message) {
  //     localStorage.setItem("user", JSON.stringify(response.data.message));
  //   }
  //   console.log(response.data)

  //   return response.data;
  // });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};