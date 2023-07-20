import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TitleBox from '../../Components/TitleBox/TitleBox'
import { SiInstagram, SiTelegram ,SiWhatsapp , SiTwitter} from "react-icons/si"
import Footer from '../../Components/Footer/Footer'
import './About.css'

export default function About() {
  return (
    <div className='about-us'>

      <Navbar />

      <div className="about-us-wrapper ">
        <TitleBox titleMsg={"درباره ی هوم دیزاین"} />
        <div className="about-us-container row">
          <div className="about-img-container col-lg-5 col-md-6 col-11">
            <img src="images/about-us.jpg" alt="" />
          </div>
          <div className="about-text-container
          col-lg-5 col-md-4 col-11">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
        </div>
      </div>

      <div className="social-media">
        <TitleBox titleMsg={"ما را در شبکه های مجازی دنبال کنید"} />
        <div className="social-media-container">
          <a href="#">
            <SiInstagram className='icon' />
          </a>
          <a href="#">
            <SiTelegram className='icon' />
          </a>
          <a href="#">
            <SiWhatsapp className='icon' />
          </a>
          <a href="#">
            <SiTwitter className='icon' />
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
