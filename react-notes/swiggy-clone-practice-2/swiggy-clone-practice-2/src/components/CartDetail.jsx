import { useSelector } from "react-redux"

const CartDetail = () => {

    const cartItems = useSelector((res)=>{return res.cart.items});
    console.log(cartItems);

    return (
        <div>
            <h2>Cart Detail page</h2>
           {cartItems.map((item,index)=>
            <ul key={index}>
                <li>{item}</li>
            </ul>
           )}
        </div>
    )
    
}

export default CartDetail