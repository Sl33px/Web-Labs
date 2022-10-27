import React from 'react';
import Header from "./components/header/header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/footer";

const Layout = () => {

    return (
        <div>
            <Header/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;