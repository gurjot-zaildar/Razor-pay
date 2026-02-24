import React from 'react'
import '../components/ProductCard.css'

function formatPrice(amount, currency) {
  const value = Number(amount) / 100
  try {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(value)
  } catch (e) {
    return `${currency} ${value.toFixed(2)}`
  }
}

const ProductCard = ({ product, onBuy }) => {
  if (!product) return null

  const { title, description, image, price } = product

  return (
    <div className="rp-card">
      <div className="rp-media">
        <img src={image} alt={title} />
      </div>

      <div className="rp-body">
        <h3 className="rp-title">{title}</h3>
        <p className="rp-desc">{description}</p>

        <div className="rp-footer">
          <div className="rp-price">{formatPrice(price.amount, price.currency)}</div>
          <button
            className="rp-buy"
            onClick={() => (onBuy ? onBuy(product) : alert(`Buy now: ${title}`))}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
