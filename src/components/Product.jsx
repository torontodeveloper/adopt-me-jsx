import React from 'react'
import './product.css'
const Product = ({ title, category, description, image, price }) => {
    return (
        <div className='container'>
            <div className="header">
                <h2>{title}</h2>
                <p>{`$$${price}`}</p>
            </div>
            <img src={image} alt={title} width={200} height={200} />
            <p>{description}</p>
            <button className="cart">Add to Cart</button>
        </div>
    )
}
export default Product