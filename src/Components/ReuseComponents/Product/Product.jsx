import React from 'react'
import './product.scss'
import ViewDetailsButton from '../View Details Button/ViewDetailsButton'

const Product = ({cover,title,size,banglaName}) => {
  return (
    <div className='product'>
      <div className='product__image'>
            <img src={cover} alt='img' />
            <ViewDetailsButton />
      </div>
      <div className='product__details'>
            <h3>{title}</h3>
            <h4>{banglaName}</h4>
            <span>{size && `Size : ${size}`}</span>
      </div>
    </div>
  )
}

export default Product
