export const BASE_URL = "https://expense-tracker-production-6707.up.railway.app";

// utils/apiPath.js
export const API_PATHS = {
    AUTH: {
        LOGIN: "/app/v1/auth/login",
        REGISTER: "/app/v1/auth/register",
        GET_USER_INFO: "/app/v1/auth/getUser"
    },
    DASHBOARD: {
        GET_DATA: "/app/v1/dashboard",
    },
    INCOME: {
        ADD_INCOME: "/app/v1/income/add",
        GET_ALL_INCOME: "/app/v1/income/get",
        DELETE_INCOME: (incomeId) => `/app/v1/income/${incomeId}`,
        DOWNLOAD_INCOME: `/app/v1/income/downloadexcel`,
    },
    EXPENSE: {
        ADD_EXPENSE: "/app/v1/expense/add",
        GET_ALL_EXPENSE: "/app/v1/expense/get",
        DELETE_EXPENSE: (expenseId) => `/app/v1/EXPENSE/${expenseId}`,
        DOWNLOAD_EXPENSE: `/app/v1/expense/downloadexcel`,
    },
    IMAGE: {
        UPLOAD_IMAGE: "/app/v1/auth/upload-image",
    },
}