import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../../Item.json'

export const AddCartContext = createContext(null)
export const defaultCartItem = () => {
    let cart = {}
    for (let index = 0; index < Data.length; index++) {
        cart[0] = 0
    }
    return cart
}

const AddToCartContext = ({ children }) => {
    const [data, setData] = useState(Data)
    const [selectesCard, setSelectedCard] = useState(null);
    useEffect(() => {
        const { id } = useParams()
        // Update selected element based on the id parameter
        const element = data.find(item => item.id === id);
        setSelectedCard(element);
    }, [id])


    const [cartItem, setCartItem] = useState(defaultCartItem())

    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const cartValue = { addToCart, removeFromCart, selectesCard }
    return (
        <div>
            <AddCartContext.Provider value={cartValue}>

                {children}

            </AddCartContext.Provider>
        </div>
    )
}

export default AddToCartContext
