import React from 'react'
import "./Categories.css"
import TitleBox from '../TitleBox/TitleBox'

export default function Categories() {
    return (
        <div className='categories'>
            <TitleBox titleMsg="با دسته بندی خرید کنید!"/>
            <div className="categories-wrapper row">
                <div className="box box-1 col-lg-2 col-md-5 col-sm-7">
                    <button className="category-btn ">پذیرایی</button>
                </div>
                <div className="box box-2 col-lg-2 col-md-5 col-sm-7">
                    <button className="category-btn">کالای خواب</button>
                </div>
                <div className="box box-3 col-lg-2 col-md-5 col-sm-7">
                    <button className="category-btn">آشپزخانه</button>
                </div>
                <div className="box box-4 col-lg-2 col-md-5 col-sm-7">
                    <button className="category-btn">تزیینات</button>
                </div>
            </div>
        </div>
    )
}
