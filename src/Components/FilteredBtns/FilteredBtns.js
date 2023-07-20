import React, { useState } from 'react'
import "./FilteredBtns.css"

export default function FilteredBtns({categories,filteredProducts}) {
    const [mainCategory,setMainCategory]=useState('همه')
    return (
        <div className="filtering-container">
            <div className="filtering-wrapper" dir='rtl'>
                {categories.map((category,index)=>(
                <button 
                className={category===mainCategory ? "filtering-btn highlight":"filtering-btn"}
                key={index}
                onClick={() => {
                  setMainCategory(category)
                  filteredProducts(category)
                }} 
                >{category} 
                </button>     
                ))}
            </div>
        </div>
    )
}
