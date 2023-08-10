import Product from '@/components/Product';
import ProductDetails from '@/components/ProductDetails';
import React, { useEffect } from 'react'
import { useState } from 'react';

export default function Index() {
    const [status, setStatus] = useState(true);
    const [activeProduct, setActiveProduct] = useState({ id: 1, name: "iPhone 14 Pro", price: 48000, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." })
    const products = [
        { id: 1, name: "iPhone 14 Pro", price: 48000, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." },
        { id: 2, name: "Dell XP89", price: 28000, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." },
        { id: 3, name: "MacBook Air M2", price: 41000, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." },
        { id: 4, name: "Huawei Mate 11.5 Tablet", price: 12000, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." },
        { id: 5, name: "Logitech Y45 Mouse", price: 800, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." },
        { id: 6, name: "ViewSonic 27\" Monitör", price: 7900, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint amet repellat nesciunt distinctio nemo corporis molestiae corrupti eaque ad, sed mollitia facilis cum culpa nam, architecto, totam ea. Neque." }
    ];
    useEffect(() => {
        console.log(status);
    }, [status])
    if (status) {
        return (
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map(p => (
                            <Product key={p.id} p={p} status={status} setStatus={setStatus} activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
                        ))}
                    </div>
                </div>
            </section>
        )
    } else {

        <ProductDetails p={activeProduct} />
    }

}
