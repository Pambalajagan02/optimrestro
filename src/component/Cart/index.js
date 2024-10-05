
import MyContext from "../../context/context"
import CartItem from "../CartItem"
import Header from '../Header'
const Cart=()=>{
    return <MyContext.Consumer>
        {value=>{
            const {cartItem}=value 
            return (
                <>
                 <Header />
                {cartItem.length > 0 ? (
                  <>
                    <ul>
                      {cartItem.map((each) => (
                        <CartItem key={each.id} eachitem={each} />
                      ))}
                    </ul>
                  </>
                ) : <h1>your cart is empty</h1>}
              </>
            ) 
        }}

    </MyContext.Consumer>

    

}
export default Cart