import React from 'react'
import "./Card.css"

const Card = ({title, content, topic, knowMore}) => {
  return (
    <div className='card'>
        <div>
            <h1 id='card-head'>{title}</h1>
        </div>
        <div>
            <p id='card-content'> {content}</p>
            <p id='card-topic'><span style={{fontWeight:"bold"}}>Topic: </span>{topic}</p>
            <a id='card-url' className='mb-0' href={knowMore} rel="noreferrer" target="_blank">Know More &gt; </a>
        </div>
    </div>
  )
}

export default Card