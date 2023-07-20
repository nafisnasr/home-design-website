import React, { useState } from 'react'
import TitleBox from "../../Components/TitleBox/TitleBox"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import { questionsData } from '../../Data'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io"
import "./Questions.css"

export default function Questions() {

  const [showQuestionBody, setShowQuestionBoody] = useState(false)
  const [allQuestions, setAllQuestions] = useState(questionsData)
  const [activeIndex, setActiveIndex] = useState(questionsData)

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="questions">
      <Navbar />
      <div className="questions-wrapper">
        <TitleBox className="questions-title" titleMsg={"سوالات متداول"} />
        <div className="question-container container">
          {allQuestions.map((question, index) => (
            <div className="question-box">
              <div className="question-header">
                <h4 className="question-title">{question.title}</h4>
                <button
                  className='question-toggle-btn'
                  onClick={() => {
                    setShowQuestionBoody(prev => !prev)
                    handleClick(index)
                  }}
                >
                  {(showQuestionBody &&  index === activeIndex ) ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {(showQuestionBody &&  index === activeIndex )?(
                <div className="question-body">
                  <p>{question.body}</p>
                </div>
              ):''}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
