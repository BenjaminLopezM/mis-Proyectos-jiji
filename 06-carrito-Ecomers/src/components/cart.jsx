import './cart.css'

import { useId } from 'react'
import { CartIcon,ClearCartIcon} from './icons'
import { useCart } from '../hooks/useCart'

    function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
        return (
            <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
        )
    } 

export function Cart () {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCard } = useCart()

    return (
        <>
        <label className='cart-button' htmlFor={cartCheckBoxId}>
          <CartIcon />
        </label>
        <input type="checkbox" id={cartCheckBoxId} hidden />

        <aside className='cart' >
            <ul>
                {cart.map(product => (
                    <CartItem
                        key={product.id} 
                        addToCard={() => addToCard(product)}               
                        {...product}
                        />
                ))}
            </ul>

            <button onClick={clearCart} >
              <ClearCartIcon />
            </button>
        </aside>
        </>
    )
}