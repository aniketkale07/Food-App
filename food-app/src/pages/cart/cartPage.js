import React from 'react';
import { useLocation } from 'react-router-dom'; // Use this hook to access the passed state

const CartPage = () => {
    const location = useLocation();
    const { cart } = location.state || {}; // Access the cart data passed via state

    return (
        <div className="container py-5">
            <h2>Your Cart</h2>
            {cart && cart.length > 0 ? (
                <div>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default CartPage;
