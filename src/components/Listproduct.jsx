import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_DATA } from '../../env.js';
import axios from 'axios';

export default function Listproduct() {
    const state = useSelector((state) => state.product.listProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(BASE_DATA);
                dispatch({
                    type: 'GET_LIST_DATA',
                    payload: res.data
                })
            } catch (error) {
                console.error('Lỗi khi gọi API sản phẩm:', error);
            }
        };
        fetchProducts();
    }, [dispatch]);

    return (
        <div className="sm:w-6/12 md:w-6/12 lg:w-6/12 px-2">
            <h1 className='font-medium text-2xl mb-2'>Shopping Cart</h1>
            <div className="bg-blue-50 border border-blue-500 rounded-lg shadow-md">
                <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
                    <h1 className="">List Products</h1>
                </div>
                <div>
                    {state &&
                        state.map((product, index) => (
                            <ProductItem key={product.id || index} data={product}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}
