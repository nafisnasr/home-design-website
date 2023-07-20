import React , {useState} from 'react'
import TitleBox from '../TitleBox/TitleBox'
import "./Footer.css"

export default function Footer() {

    const [inputValue, setInputValue] = useState()
    const inputHandler = () => {
        setInputValue('')
    }

    return (
        <footer className='footer'>
            <div className="footer-wrapper row">

                <div className="footer-text-section col-lg-8 col-md-5 col-sm-8">
                    <TitleBox titleMsg={"اولین نفر از تخفیفات و آفر های ما با خبر شوید!"} />
                    <div className="footer-input-box">
                        <input
                            type="text"
                            className="footer-input"
                            placeholder='ایمیل خود را وارد کنید'
                            value={inputValue}
                            onChange={e=>setInputValue(e.target.value)}
                        />
                        <button onClick={inputHandler} className="footer-submit-btn">دنبال کنید</button>
                    </div>
                </div>
                <div className="footer-img-section col-lg-4 col-md-4 col-sm-2">
                    <img src="/images/footer-img.jpg" alt="image-footer" className="img-footer" />
                </div>
            </div>
        </footer>
    )
}
