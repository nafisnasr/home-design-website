import React, { useState } from 'react'
import ProductBox from '../ProductBox/ProductBox'
import { allProductsData } from '../../Data'
import Toast from './../Toast/Toast'
import FilteredBtns from '../FilteredBtns/FilteredBtns'
import './AllProducts.css'

export default function AllProducts() {

    const allCategories = ['همه', ...new Set(allProductsData.map(product => product.category))]
    const [allProducts, setAllProducts] = useState(allProductsData)
    const [isShowToast, setIsShowToast] = useState(false)
    const [categories, setCategories] = useState(allCategories)

    const addToBagHandler = () => {
        setIsShowToast(true)
        setTimeout(() => {
            setIsShowToast(false)
        }, 3000);
    }

    const filteredProducts = (category) => {
        if (category === 'همه') {
            setAllProducts(allProductsData)
            return
        }
        let filteredProduct = allProductsData.filter(product => product.category === category)
        setAllProducts(filteredProduct)
    }

    return (
        <>
            <FilteredBtns categories={categories} filteredProducts={filteredProducts} />
            <div className="all-products">
                <div className="all-products-wrapper row">
                    {allProducts.map(product => (
                        <ProductBox {...product} addToBagHandler={addToBagHandler} />
                    ))}
                </div>
                <Toast isShowToast={isShowToast} setIsShowToast={() => setIsShowToast()} />
            </div>
        </>
    )
}
