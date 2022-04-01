import axios from "axios";

const clientAxios = axios.create({
  baseUrl: "http://localhost:4000",
});

export default clientAxios;
