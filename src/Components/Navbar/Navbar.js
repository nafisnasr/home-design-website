import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container ">
                <a className="navbar-brand text-light" href="#">Selina</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav" dir='rtl'>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link text-light active" aria-current="page" href="#">خانه</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-light" href="#">درباره ی ما</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link text-light" href="#">محصولات</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/questions" className="nav-link text-light" href="#">سوالات متداول </Link>
                        </li>
                        <button dir='rtl' className='btn btn-outline-light'>
                            <Link className='link' to="/register">شروع کنید</Link>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
