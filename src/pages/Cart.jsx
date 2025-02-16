import React, { useEffect, useState } from 'react';
import useStore from '@/components/context/store';
import { Button } from '@/components/ui';
import { InteractiveHoverButton } from '@/components/ui';
import { Link } from 'react-router';

function Cart() {
    const cartItems = useStore(state => state.cartItems);
    const changeCart = useStore(state => state.changeCart);
    const [loading, setLoading] = useState(true);
    let total = useStore(state => state.total);
    useEffect(() => {
        const map = new Map();
        cartItems.forEach(item => {
            if (map.has(item.id)) {
                map.get(item.id).quantity += item.quantity;
            }
            else {
                map.set(item.id, { ...item })
            }
        });

        changeCart(Array.from(map.values()));
        setLoading(false);
    }, []);

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        useStore.setState({ total: total });
    }, [removeItem])

    function removeItem(id) {
        const newCart = cartItems.filter((cartItem) => cartItem.id !== id);
        changeCart(newCart);
    }

    if (loading) {
        return <div className='min-h-screen text-center font-semibold text-5xl'>Loading...</div>
    }
    else {
        if (cartItems.length === 0) {
            return <div className='min-h-screen flex-col flex justify-center items-center text-center font-semibold '>
                <div className='text-5xl mb-5'>Cart is empty 🛒</div>
                <Link to={'/shop'}>
                    <InteractiveHoverButton>Shop Now</InteractiveHoverButton>
                </Link>
            </div>
        } else if (cartItems.length > 0) {
            return (
                <div className="container mx-auto p-5">
                    <div className="text-4xl font-semibold mb-5">Cart</div>
                    <div className=" shadow-md rounded-lg p-5">
                        <div className="grid grid-cols-4 gap-5 text-center text-2xl font-semibold border-b pb-3">
                            <div>Products</div>
                            <div>Quantity</div>
                            <div>Price</div>
                            <div>Action</div>
                        </div>
                        <div className="divide-y">
                            {cartItems.map((item) => (
                                <div key={item.title} className="flex items-center justify-between py-5">
                                    <div className="w-1/4 text-center">{item.title}</div>
                                    <div className="w-1/4 text-center">{item.quantity}</div>
                                    <div className="w-1/4 text-center">${item.price}</div>
                                    <div className="w-1/4 text-center">
                                        <Button
                                            onClick={() => removeItem(item.id)}
                                        >Remove</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-right text-3xl font-semibold mt-5">Total: ${total}</div>
                    </div>
                </div>
            );
        }
    }
}

export default Cart;    