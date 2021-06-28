import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";

const register = (name, email, password, phone, address, role, dob) =>
  axios
    .post(`${API_URL}api/v1/user/register`, {
      name,
      email,
      password,
      phone,
      address,
      role,
      dob,
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });

const login = async (phone, password) => {
  // var axios = require('axios');
  // var data = JSON.stringify({"phone":phone,"password":password});

  // var config = {
  //   method: 'post',
  //   url: `${API_URL}api/v1/user/logIn`,
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data : data
  // };

  // axios(config)
  // .then(function (response) {
  //   console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  await axios({
    method: "post",
    url: `${API_URL}user/logIn`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      phone,
       password,
    },
  })
    .then((response) => {

      if (response.data.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
      }

      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export { register, login, logout };
