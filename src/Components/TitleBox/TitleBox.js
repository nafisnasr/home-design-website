import React from 'react'
import "./TitleBox.css"

export default function TitleBox({titleMsg}) {
    return (
        <h2 className='title-box text-center'>{titleMsg}</h2>
    )
}
