import axios from "axios";

const usuarioFetch = axios.create({
    baseURL: "https://localhost:7099/api/v1/usuario",
})

export default usuarioFetch;