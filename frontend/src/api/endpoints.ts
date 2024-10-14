const api_base_url = process.env.REACT_APP_API_BASE_URL;

const endpoints = {
    // authentication
    api_auth: `${api_base_url}api/users/api-auth/`,
    token_obtain: `${api_base_url}api/token/`,
    logout: `${api_base_url}api/logout/`,

    users: `${api_base_url}api/users/users/`,
};

export default endpoints;
