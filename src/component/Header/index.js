import {Link} from 'react-router-dom'
import './index.css'
import {IoCartOutline} from 'react-icons/io5'
import MyContext from '../../context/context'

const Header =()=>{
    return <MyContext.Consumer>
        {value=>{
            const {cartItem}=value 
            const count= cartItem.length
            return (<nav className="nav-container">
               <Link to="/" className="restro-head">
               <h1>Restro</h1>
               </Link>
                <Link to="/cart" className="link">
                        <div className="cart-card">
                          <button
                            type="button"
                            data-testid="cart"
                            className="cartbuton"
                          >
                            <IoCartOutline className="cart-icon" />
                          </button>
                          <span className="cart-count">{count}</span>
                        </div>
                      </Link>
            </nav>)
        }}
    </MyContext.Consumer>

}
export default Header