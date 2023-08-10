import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Product({ p, status, setStatus, activeProduct, setActiveProduct }) {
    const handleDetails = (active) => {
        setStatus(false);
        setActiveProduct(active);
    }

    return (
        <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={`https://picsum.photos/200/300/?q=${p.name}`} />
            </a>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{p.name}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{p.price}</h2>
                <p className="mt-1">{p.desc}</p>
                <button onClick={() => { handleDetails(p) }}>Detay</button>
            </div>
        </div>
    )
}
