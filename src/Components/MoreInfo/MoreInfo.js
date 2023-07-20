import React from 'react'
import "./MoreInfo.css"

export default function MoreInfo() {
    return (
        <div className='more-info'>
            <div className="more-info-wrapper row">
                <div className="img-container col-lg-6 col-11">
                    <img
                        src="../images/more-info.jpg"
                        alt="more-info-img"
                    />
                </div>
                <div className="more-info-text-container col-lg-6 col-11">
                    <h3 className="title">شیک و مدرن با کیفیت عالی</h3>
                    <p className="desc">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    <button className="learn-more-btn">بیشتر بدانید</button>
                </div>
            </div>
        </div>
    )
}
