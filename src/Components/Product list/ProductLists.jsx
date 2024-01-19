import React from 'react'
import { productLists } from '../../Data'
import Product from '../ReuseComponents/Product/Product'

import './productLists.scss'

const ProductLists = () => {
  return (
    <div className='productLists'>
      <h2>Product Lists :</h2>
      <div className='productLists__content'>
      {
        productLists.map(
          item =>{
            const {id,title,cover,banglaName,size} = item;
            return <Product key={id} title={title} cover={cover} banglaName={banglaName} size={size}/>
          }
        )
      }
      </div>
      
    </div>
  )
}

export default ProductLists
