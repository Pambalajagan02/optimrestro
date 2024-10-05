import './index.css'
import MyContext from '../../context/context'
import {Component} from 'react'
class DishItem extends Component{
    state = {quantity: 0}

    onDecrementFunc=()=>{
    const {quantity} = this.state
    if (quantity > 0) {
      this.setState(prev => ({quantity: prev.quantity - 1}))
    } else {
      this.setState({quantity: 0})
    }

    }
    onIncrementFunc=()=>{
        this.setState(prev => ({quantity: prev.quantity + 1}))
    }
    render(){
        const {quantity}=this.state
        return (<MyContext.Consumer>
            {value=>{
                const {setCartItem,cartItem,incrementCartItemQuantity}=value
                const {item}=this.props
                const onClickAddtoart=()=>{
                const checkItemPresences = cartItem.find(arr => arr.id === item.id)
                if (checkItemPresences !== undefined) {
                    incrementCartItemQuantity(item.id)
                  } else {
                    setCartItem({...item, quantity})
                  }
                }
                return (<li className="list-container">
                    <img src={item.imageurl} alt={item.name} className='image-style'/>
                    <div>
                        <h1 className='name-heading'>{item.name}</h1>
                        <p>price: {item.price}</p>
                        <p>availableQuantity: {item.availablequantity}</p>
                        <p>{item.category},{item.subcategory}</p> 
                    </div>
                   {
                    item.availablequantity? <div className='quantity-style'>
                    <button type="button" className='quantity-size' onClick={this.onDecrementFunc}>-</button>
                    <p>{quantity}</p> 
                    <button type="button"  className='quantity-size' onClick={this.onIncrementFunc}>+</button>
                </div>:<p>dish not availabale</p>
                   }
                  {item.availablequantity && quantity>0?  <button type="button" className='button-cart' onClick={onClickAddtoart}>ADD TO CART</button>:""}
                </li>)
            }}
        </MyContext.Consumer>
    )
    }
}

export default DishItem 