import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { productsData } from "../../Data"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import Toast from '../Toast/Toast'
import TitleBox from '../TitleBox/TitleBox'
import "./SelectionProducts.css"
import ProductBox from '../ProductBox/ProductBox'

export default function SelectionProducts() {
    const [products, setProducts] = useState(productsData)
    const [isShowToast, setIsShowToast] = useState(false)

    const addToBagHandler = () => {
        setIsShowToast(true)
        setTimeout(() => {
            setIsShowToast(false)
        }, 3000);
    }

    return (
        <div className='product-box'>
            <div className="product-box-header">
                <TitleBox titleMsg="محصولات پرطرفدار" />
                <Link to="/products">
                    <BsFillArrowLeftCircleFill className='icon' />
                </Link>
            </div>
            <div className="product-box-wrapper row">
                {products.map(product => (
                    <ProductBox {...product} addToBagHandler={addToBagHandler} />
                ))}
                <Toast isShowToast={isShowToast} setIsShowToast={() => setIsShowToast()} />
            </div>
        </div>
    )
}
