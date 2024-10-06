import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet, useMatch } from "react-router-dom";
import Posts from "./Posts";
import NavBar from "../Components/NavBar";
import People from "../Components/People";

const Home = () => {
    const isHome = useMatch("/");
    return (
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
    );
};

export default Home;
