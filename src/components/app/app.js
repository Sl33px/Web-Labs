import './app.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "../../pages/homePage/homePage";
import CatalogPage from "../../pages/catalogPage/catalogPage";
import CartPage from "../../pages/cartPage/cartPage";
import CatalogItemPage from "../../pages/catalogItemPage/CatalogItemPage";
import Header from "../header/header";
import Footer from "../footer/footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='catalog' element={<CatalogPage/>}/>
                <Route path='catalog/:id' element={<CatalogItemPage/>}/>
                <Route path='cart' element={<CartPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;