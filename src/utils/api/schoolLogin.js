import axios from "axios";
const api = "http://10.10.10.236:3000/api/v1";
const SchoolLogin = axios.create({
  baseURL: api,
  headers: {
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

export default SchoolLogin;
