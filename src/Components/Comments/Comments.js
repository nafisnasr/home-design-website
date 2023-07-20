import React, { useState, useEffect } from 'react'
import TitleBox from '../TitleBox/TitleBox'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri"
import { GrFormPrevious, GrFormNext } from "react-icons/gr"
import { commentSectionData } from '../../Data'
import './Comments.css'

export default function Comments() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [commentsData, setCommentsData] = useState(commentSectionData)

    const nextSlideHandler = (currentSlide) => {
        console.log("next");
/*         if (currentSlide > commentsData.length - 1) {
            setCurrentSlide(0)
        }
        setCurrentSlide(prev => prev + 1)
 */    }

    const prevSlideHandler = () => {
        console.log("prev");
/*         if (currentSlide < 0) {
            setCurrentSlide(commentsData.length - 1)
        }
        setCurrentSlide(prev => prev - 1)
 */    }

    return (
        <div className='comments-section'>
            <TitleBox className="title-box" titleMsg="نظرات مشتریان ما" />

            <div className="comment-section-wrapper row">
                <div className="right-section comment-section col-lg-8 col-md-4 col-11">
                    <div className="comment-text-container">
                        <RiDoubleQuotesR className='quote-icon top' />
                        <h3 className='right-section-title'>
                            {commentsData[0].title}
                        </h3>
                        <p className='right-section-details'>
                            {commentsData[0].desc}
                        </p>
                        <RiDoubleQuotesL className='quote-icon bottom' />
                    </div>
                    <h4 className="writer">{commentsData[0].writer}</h4>
                    <div className="right-section-btn-container">
                        <button className="right-section-btn next-btn">
                            <GrFormNext
                                className="icon next-icon"
                                onClick={prevSlideHandler}
                            />
                        </button>
                        <button className="right-section-btn prev-btn">
                            <GrFormPrevious
                                className="icon prev-icon"
                                onClick={nextSlideHandler}
                            />
                        </button>
                    </div>
                </div>

                <div className="left-section comment-section col-lg-4 col-md-4 col-11">
                    <img src={commentsData[0].img} alt="user-profile" />
                </div>

            </div>
        </div>
    )
}
