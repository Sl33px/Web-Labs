import './app.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "../../Layout";
import HomePage from "../../pages/homePage/homePage";
import CatalogPage from "../../pages/catalogPage/catalogPage";
import CartPage from "../../pages/cartPage/cartPage";
import CatalogItemPage from "../../pages/catalogItemPage/CatalogItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path='catalog' element={<CatalogPage/>}/>
                        <Route path='catalog/:id' element={<CatalogItemPage/>}/>
                        <Route path='cart' element={<CartPage/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;