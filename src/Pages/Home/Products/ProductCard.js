import React from 'react';

const ProductCard = ({ product }) => {
    const { name, image, price } = product;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <img src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-2xl font-semibold text-orange-600'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;