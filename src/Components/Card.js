import React from 'react'

const Card = ({heading, content, topic, knowMore}) => {
  return (
    <div>
        <h1>{heading}</h1><br />
        <p>{content}</p><br />
        <p>{topic}</p><br />
        <a href={knowMore}>Know More</a><br />
    </div>
  )
}

export default Card