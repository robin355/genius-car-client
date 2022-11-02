import { React, useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-4 mt-6'>
                <p className="text-2xl font-bold text-orange-600">Popular Products</p>
                <h2 className="text-5xl font-semibold">Browse Our Products</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;