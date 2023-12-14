import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
// import AddToCart from '../Pages/Cart/AddToCart'
import ContctUs from '../Pages/ContactUs/ContactUs'
import Privacy from '../Pages/Privacy/Privacy'
import Product from '../Pages/Product/Product'
import Login from '../Pages/Login/Login'
import AboutUs from '../Pages/About/AboutUs'
import SignUp from '../Pages/Login/SignUp'
import ProductContext from '../Pages/Product/ProductContext'
import PopularProducts from '../Pages/Product/PopularProducts'
import Cart from '../Pages/Cart/Cart'
import CartItem from '../Pages/Cart/CartItem'
import Category from '../Pages/Categories/Category'
import ClickCategory from '../Pages/Categories/ClickCategory'
import DisplayCategory from '../Pages/Categories/DisplayCategory'
// import ProductContext from '../Pages/Product/ProductContext'

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/contact' element={<ContctUs />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/All' element={<DisplayCategory />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/product/:id' element={<ProductContext />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/:id' element={<PopularProducts />} />
                    <Route path='/cart/:id' element={<CartItem />} />
                    <Route path='/category/:category' element={<ClickCategory />} />
                    {/* <Route path='/category/:id' element={<DisplayCategory />} /> */}

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing

