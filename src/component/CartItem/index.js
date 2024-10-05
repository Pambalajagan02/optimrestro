import {AiFillCloseCircle} from 'react-icons/ai'

import MyContext from '../../context/context'


import './index.css'

const CartItem = props => (
  <MyContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {eachitem} = props

      const onRemoveCartItem = () => {
        removeCartItem(eachitem.id)
      }
     

      const onIncrementQuantity = () => {
        incrementCartItemQuantity(eachitem.id)
      }
      const onDecrementQuantity = () => {
        if (eachitem.quantity < 2) {
          removeCartItem(eachitem.id)
        } else {
          decrementCartItemQuantity(eachitem.id)
        }
      }
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={eachitem.imageurl} alt="dishImage" />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{eachitem.name}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                onClick={onDecrementQuantity}
                type="button"
                className="quantity-controller-button"
              >
                -
              </button>
              <p className="cart-quantity">{eachitem.quantity}</p>
              <button
                onClick={onIncrementQuantity}
                type="button"
                className="quantity-controller-button"
              >
                +
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">
                Rs {eachitem.price * eachitem.quantity}/-
              </p>
              <button
                className="remove-button"
                type="button"
                data-testid="remove"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            data-testid="remove"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
          </button>
        </li>
      )
    }}
  </MyContext.Consumer>
)

export default CartItem
