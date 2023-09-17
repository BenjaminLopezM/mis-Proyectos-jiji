import { products as initialProducts } from "./mocks/product.json"
import { Products } from "./components/products"
import { useState} from "react"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./components/cart"
import { CartProvider } from "./context/cart"

function App() {
  const { filterProducts} = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
     <Header />
     <Cart />
     <Products products={filteredProducts}/>
     {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
} 


export default App
