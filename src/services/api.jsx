import axios from "axios";

const api = axios.create({
  baseURL: "https://bora-marcar-api.herokuapp.com/",
});

export default api;
