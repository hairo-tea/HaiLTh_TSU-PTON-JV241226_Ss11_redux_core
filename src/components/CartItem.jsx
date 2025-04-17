import React from 'react'
import { useSelector } from 'react-redux'

export default function CartItem() {
    const dataCartItem = useSelector((state) => state.cart.cartItems);
    const totalItems = dataCartItem.reduce((total, item) => total + item.quantityOrder, 0);
    const totalPrice = dataCartItem.reduce((total, item) => total + item.price * item.quantityOrder, 0);

    if (dataCartItem.length === 0) {
        return (
            <div>
                Empty product in your cart
            </div>
        )
    }
    return (

        <div className="p-4 bg-white shadow-md rounded-md overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr className="bg-gray-100 text-gray-700 text-sm border-b border-b-gray-400">
                        <th className="w-[4%] px-2 py-2 text-left">STT</th>
                        <th className="text-left px-2 py-2">Name</th>
                        <th className="w-[15%] px-2 py-2 text-left">Price</th>
                        <th className="w-[4%] px-2 py-2 text-left">Quantity</th>
                        <th className="w-[25%] px-2 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody id="my-cart-body" className="text-sm">

                    {dataCartItem &&
                        dataCartItem.map((item, index) => {
                            return (
                                <tr key={item.id || index}
                                    className="border-b">
                                    <td className="border px-2 py-1 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border px-2 py-1">
                                        {item.name}
                                    </td>
                                    <td className="border px-2 py-1 text-center">
                                        {item.price} USD
                                    </td>
                                    <td className="border px-2 py-1 text-center">
                                        <input
                                            name={`cart-item-quantity-${item.id}`}
                                            type="number"
                                            defaultValue={item.quantityOrder}
                                            className="w-16 px-1 py-1 border rounded"
                                        />
                                    </td>
                                    <td className="px-2 py-2 space-x-2">
                                        <a
                                            className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 cursor-pointer update-cart-item"
                                            data-product=""
                                        >
                                            Update
                                        </a>
                                        <a
                                            className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 cursor-pointer delete-cart-item"
                                            data-product=""
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
                <tfoot id="my-cart-footer" className="text-sm border-t">
                    <tr>
                        <td colSpan={4} className="px-2 py-2">
                            There are <b>{totalItems}</b> items in your shopping cart
                        </td>
                        <td colSpan={1} className="px-2 py-2 text-right text-red-600 font-bold">
                            630 USD
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )
}
