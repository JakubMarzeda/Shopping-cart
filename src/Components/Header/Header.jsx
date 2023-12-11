import { Link } from "react-router-dom";
import shoppingTrolley from "../../../public/images/shopping-trolley.png"
import "./Header.css"
import { useSelector } from 'react-redux';

const Header = () => {
    const cartList = useSelector((state) => state.shoppingCart.list);
    const totalQuantity = cartList.reduce((total, product) => total + product.quantity, 0)
    return (
        <div className="header">
            <div className="logo">
                <a href="/"><h2>X-KOM</h2></a>
            </div>
            <div className="right-header">
                <Link to="/"><h2>SHOP</h2></Link>
                <Link className="shopping-trolley-quantity" to="/cart"><img src={shoppingTrolley} /> {totalQuantity > 0 && <span>{totalQuantity}</span>}</Link>
            </div>
        </div>
    )
}

export default Header