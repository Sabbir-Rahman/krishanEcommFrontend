import React, {useContext} from 'react'
import { cartContext } from 'Global/CartContext'
import { Link } from 'react-router-dom'

const KrishiBazarNavbar = ({cartToggle}) => {
    const {shoppingCart} = useContext(cartContext);
    return(
        <nav>
            <ul className="left">
                 <li>
                     <Link to="/home">কৃষি বাজার</Link>
                </li>
            </ul>
            <ul className="right">
                <li onClick={cartToggle}>
                    <Link to="/cart">
                        <span className="dollor">
                            <i className="fas fa-cart-plus">
                            </i>
                        </span>
                        <span className="shoppingCartTotal">
                            {shoppingCart ? shoppingCart.length : 0}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default KrishiBazarNavbar