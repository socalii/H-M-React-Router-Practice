import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div className='product-card'>
      <img width={220} src={item?.img} />
      <div className='choice'>
        {item?.choice === true ? 'Conscious choice' : ''}
      </div>
      <div>{item?.title}</div>
      <div>$ {item?.price}</div>
      <div className='new'>{item?.new === true ? 'NEW' : ''}</div>
    </div>
  )
}

export default ProductCard
