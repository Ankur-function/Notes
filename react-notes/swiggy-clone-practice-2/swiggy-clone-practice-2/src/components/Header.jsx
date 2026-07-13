import { useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLogin,setIsLogin] = useState(false);
    const handleLogin = () => {
        setIsLogin(!isLogin);
    }
    const cartItems = useSelector((res)=>{return res.cart.items})

  return(
    <div className="header">
      <div className="logo">
        <img src='https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY='></img>
      </div>
      <div className="navItems">
        <ul>
          <li><Link to={'/grocery'}>Grocery</Link></li>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li>Contact</li>
          <li><Link to={'/cartDetail'}>Cart {cartItems.length} 'Items'</Link></li>
        </ul>
        <button onClick={handleLogin}>{isLogin?'Login':'Logout'}</button>
      </div>
    </div>
  )
}

export default Header;