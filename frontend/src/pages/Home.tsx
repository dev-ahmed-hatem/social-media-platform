import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet, useMatch, Navigate } from "react-router-dom";
import Posts from "./Posts";
import NavBar from "../Components/NavBar";
import People from "../Components/People";
import Loading from "../Components/Loading";
import axios from "../api/axiosInstance";
import endpoints from "../api/endpoints";

const Home = () => {
    const isHome = useMatch("/");
    const [loading, setLoading] = React.useState<boolean>(true);
    const [fetchError, setFetchError] = React.useState<boolean>(false);
    const [isAuthenticatd, setIsAuthenticatd] = React.useState<boolean>(false);

    const checkAuth = () => {
        axios
            .get(endpoints.api_auth)
            .then((response) => {
                setIsAuthenticatd(true);
            })
            .catch((error) => {
                if (error.response.status !== 401) {
                    setFetchError(true);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    React.useEffect(() => {
        checkAuth();
    }, []);

    if (loading) return <Loading />;
    if (fetchError) {
        return (
            <p className="font-bold text-red-600 text-lg h-lvh flex justify-center items-center">
                Error occured while loading data!
            </p>
        );
    }

    return isAuthenticatd ? (
        <>
            <NavBar />
            <div className="flex py-8 px-6 md:px-6 lg:px-10">
                <Sidebar />
                <div className="flex-1">
                    {isHome ? <Posts type="Feed" /> : <Outlet />}
                </div>
                <div className="max-lg:hidden">
                    <People />
                </div>
            </div>
        </>
    ) : (
        <Navigate to={"/"} />
    );
};

export default Home;
