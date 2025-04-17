import React from 'react'
import CartItem from './CartItem'

export default function Cart() {

    return (
        <div className="sm:w-6/12 px-2 md:w-6/12 mt-10">
            <div className="border border-pink-800">
                <div className="">
                    <h1 className="bg-rose-100 text-rose-800 p-2 round-t-lg">Your Cart</h1>
                </div>
                <CartItem />
            </div>
            <div className="bg-green-100 mt-4 p-4 rounded-lg text-green-900" role="alert" id="mnotification">
                Add to cart successfully
            </div>
        </div>
    )
}
