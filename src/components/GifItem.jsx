import React from 'react'

//import './styles.css'
const GifItem = ({title,urls}) => {
    console.log(title)
  return (
    <div className='card'  >
      <img src= {urls} alt = {title} />
      <p>{title} </p>
    </div>
  )
}



export default GifItem
