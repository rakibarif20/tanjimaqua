import React from 'react'
import './newArrivalItem.scss'

const NewArrivalItem = ({cover,title}) => {
  return (
    <div className='newArrivalItem'>
      <div className='newArrivalItem__image'>
            <img src={cover} alt='img' />
            <div className='newArrivalItem__image__title'>
                <p>{title}</p>
            </div>
      </div>
    </div>
  )
}

export default NewArrivalItem
