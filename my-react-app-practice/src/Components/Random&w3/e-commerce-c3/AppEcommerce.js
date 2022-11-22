import React, { useState} from 'react'
import { AuthContext, CartContext } from './Context/Contexts'

import Login from './pages/Login';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Cart from './pages/Cart';


export default function AppEcommerce() {

    const [cart, setCart] = useState(0)


    const addToCart = () => {
    }

    const removeFromCart = () => {
    }


    const checkout = () => {
    }

    


    return (
        <div>
            <AuthContext.Provider value={null} >
                <CartContext.Provider value={null}>
                    <Login />

                </CartContext.Provider>
            </AuthContext.Provider>
        </div>
    )
}
