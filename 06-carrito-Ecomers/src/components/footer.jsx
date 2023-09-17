import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer () {
     //const { filters } = useFilters()
    return (
        <footer className='footer'>
            <h4>Prueba Tecnica de React</h4>
            <span>@ben</span>
            <h5>Shopping Cart con useContext & useReducer</h5>
        </footer>
    )
}