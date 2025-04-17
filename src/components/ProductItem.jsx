import React from 'react'

export default function ProductItem({ data }) {
    if (!data) return null;
    return (
        <div key={data.id} className="flex gap-4 p-4 bg-white rounded-b-lg">
            <div className="w-24 h-24 flex-shrink-0 ">
                <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1">
                <div>
                    <h4 className="text-lg font-semibold text-gray-800">{data.name}</h4>
                    <p className="text-sm text-gray-600">
                        {data.detail}
                    </p>
                </div>
                <div className="flex justify-end">
                    <div
                        className={`text-white text-sm px-2 py-1 rounded font-semibold ${data.disabled
                            ? "bg-gray-400"
                            : "bg-red-500"
                            }`}
                    >
                        {data.price} USD
                    </div>
                </div>
                <input
                    type="number"
                    min="0"
                    defaultValue={data.quantity}
                    onChange={(e) => handleQuantityChange(e)}
                    className="w-12 mt-2 border rounded text-center text-sm"
                    disabled={data.disabled}
                />
            </div>
        </div>
    )
}
