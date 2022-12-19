import React from 'react'
import "./Card.css"



const Card = ({title, image,content, topic, knowMore}) => {
  if(knowMore == null)
  {
    return (
      <div className='card'>
          <div>
              <h3 id='card-head'>{title}</h3>
          </div>
          <div className="grid place-content-center card-image">
          <img src={image} onError="this.remove();" className="object-fill" />
          </div>
          <div>
              <p id='card-content'> {content}</p>
              <p id='card-topic'><span style={{fontWeight:"bold"}}>Topic: </span>{topic}</p>
          </div>
      </div>
    )
  }
  return (
    <div className='card'>
        <div>
            <h3 id='card-head'>{title}</h3>
        </div>
        <div className="grid place-content-center card-image">
        <img src={image} onError="this.remove();" className="object-fill" />
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