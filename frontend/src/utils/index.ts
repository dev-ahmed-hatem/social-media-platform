import axios from "../api/axiosInstance";
import endpoints from "../api/endpoints";

// Utility function to get cookies
export const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
};

export const logout = async () => {
    try {
        const response = await axios.get(endpoints.logout);
        return response.data;
    } catch (error) {
        console.log("Logout failed!");
        throw error;
    }
};

export const checkAuth: () => Promise<boolean> = async () => {
    try {
        await axios.get(endpoints.api_auth);
        return true;
    } catch (error) {
        return false;
    }
};
