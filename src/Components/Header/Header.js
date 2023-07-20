import React, { useState } from 'react'
import { BsArrowLeftShort } from "react-icons/bs"
import Navbar from '../Navbar/Navbar'
import "./Header.css"

export default function Header() {
    const [inputValue, setInputValue] = useState()
    const searchHandler = () => {
        setInputValue('')
    }

    return (
        <header className='header'>
            <Navbar />
            <div className="header-container container">
                <h1 className="title">
                    آماده ای
                </h1>
                <h1 className="title">
                    به خونه ی خودت ظاهری جدید بدی؟
                </h1>
                <div className="input-box">
                    <input type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder='جستجو'
                        dir='rtl'
                    />
                    <button className='search-btn' onClick={searchHandler}>
                        <BsArrowLeftShort className="arrow-icon" />
                    </button>
                </div>
            </div>
        </header>
    )
}
