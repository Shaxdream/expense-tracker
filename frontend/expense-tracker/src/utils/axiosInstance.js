import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://expense-tracker-production-6707.up.railway.app",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
})

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handlecommon errors globally
        if (error.response) {
            if (error.response.status === 401) {
                // Redirect to login page
                window.location.href = "/login";
            } else if (error.response.status === 500) {
                console.error("Server error. Please try again later.")
            }
        } else if (error.code === "ECONNABORTED") {
            console.error("Request timeout. Please try again.")
        }
        return Promise.reject(error)
    }
)

export default axiosInstance