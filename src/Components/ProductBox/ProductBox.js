import React from 'react'
import { GrAddCircle } from "react-icons/gr"
import "./ProductBox.css"

export default function ProductBox({id, img, title, price, addToBagHandler}) {
    return (
        <div key={id} className="product-box-item col-lg-3 mx-1 col-md-5 col-11">
            <div className="product-item-img-container">
                <img src={img} alt="product item image" />
            </div>
            <h4 className="product-item-title">{title}</h4>
            <div className="price-container">
                <span className="price">قیمت: {price} </span>
                <button onClick={() => addToBagHandler()}>
                    <GrAddCircle className='add-to-card-icon' />
                </button>
            </div>
        </div>
    )
}
