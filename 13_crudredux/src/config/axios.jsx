import axios from "axios";

const clienteAxios = axios.create({
  baseUrl: "http://localhost:4000",
});

export default clienteAxios;
