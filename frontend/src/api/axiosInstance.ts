import defaultAxios from "axios";
import { getCookie, logout } from "../utils";
import endpoints from "./endpoints";

const axios = defaultAxios.create({
    withCredentials: true,
    headers: {
        "X-CSRFToken": getCookie("csrftoken"),
        "Content-Type": "application/json",
    },
});

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        console.log(error);
        if (
            error.response.status === 401 &&
            window.location.pathname !== "/login"
        ) {
            console.log("logged out");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axios;
