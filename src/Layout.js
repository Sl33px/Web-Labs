import React from 'react';
import Header from "./components/header/header";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/footer";

const Layout = ({arr, setArr}) => {
    return (
        <div>
            <Header arr={arr} setArr={setArr}/>

            <Outlet/>

            <Footer/>
        </div>
    );
};

export default Layout;