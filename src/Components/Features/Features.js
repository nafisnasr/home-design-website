import React, { useState } from 'react'
import { featuresData } from '../../Data'
import "./Features.css"
import TitleBox from '../TitleBox/TitleBox'

export default function Features() {
    const [features, setFeatures] = useState(featuresData)
    return (
        <div className='features'>
            <TitleBox titleMsg="قابلیت های ویژه ما" />
            <div className="features-container row">
                {features.map(info => (
                    <div key={info.id} className='box col-lg-4 col-md-3 col-11'>
                        <div className="img-container">
                            <img
                                src={info.img}
                                alt="feature-img"
                            />
                        </div>
                        <div className="text-container">
                            <h3 className="title">{info.title}</h3>
                            <p className="description">{info.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
