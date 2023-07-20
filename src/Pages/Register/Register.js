import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./Register.css"
export default function Register() {
    return (
        <div className='register'>
            <div className="register-wrapper row">
                <div className="register-container col-lg-4 col-md-6 col-12">
                    <h1 className="register-title my-2 text-center">Home Design</h1>
                    <span>سلام!</span>
                    <p className='label'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                    <input type="text" className="register-input " />
                    <div className="register-btn-box">
                        <button className="register-btn ">ورود</button>
                    </div>
                    <p className='rules'>ورود شما به معنای پذیرش تمام قوانین سایت است</p>
                </div>
            </div>
        </div>
    )
}
