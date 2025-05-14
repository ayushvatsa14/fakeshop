import { useSelector } from "react-redux";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Cart(){
    const cart=useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount]=useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        cart.length>0 ?
        (<div className="w-11/12 max-w-[1060px] mx-auto pb-4 flex gap-12">
            <div className="w-[55%]">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="w-[45%] bg-gray-200 mt-4 pt-12 pb-4 px-4 flex flex-col justify-between rounded-r-xl">
                <div>
                    <p className="text-[1.1rem] text-green-600 font-semibold">Your Cart</p>
                    <p className="text-[2rem] text-green-600 font-bold leading-7">SUMMARY</p>
                    <p className="mt-4 font-bold">Total Items: {cart.length}</p>
                </div>

                <div>
                    <p className="text-[1.3rem] font-bold">Total Amount : ${totalAmount}</p>
                    <button className="w-full bg-green-600 mt-4 mr-8 py-2 text-center text-white font-bold rounded-lg hover:bg-green-500">Checkout Now</button>
                </div>
            </div>
        </div>
        )
        :
        (<div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center gap-4">
            <p className="text-[1.5rem] font-bold">Your cart is empty!</p>
            <Link to='/'>
                <button className="bg-green-600 px-8 py-2 text-[1.2rem] text-white font-bold rounded-lg hover:bg-green-500">Show Now</button>
            </Link>
        </div>)
    );
}

export default Cart;