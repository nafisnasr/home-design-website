import React from 'react'
import Header from "../../Components/Header/Header"
import Features from '../../Components/Features/Features';
import MoreInfo from '../../Components/MoreInfo/MoreInfo';
import Categories from '../../Components/Categories/Categories';
import SelectionProducts from '../../Components/SelectionProducts/SelectionProducts';
import Comments from '../../Components/Comments/Comments';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Features />
            <MoreInfo />
            <Categories />
            <SelectionProducts />
            <Comments />
            <Footer/>
        </div>
    )
}
