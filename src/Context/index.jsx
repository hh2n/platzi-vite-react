import { createContext, useState } from 'react'

export const ShoppingCardContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Card  . Incrementn Quantity
    const [count, setCount] = useState(0)

    // Product Detail . Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Chekout Side Menu Detail . Open / Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    // Product Detail . Show product
    const [productToShow, setProductToShow] = useState({})
    
    // Shopping Cart . Add products to cart 
    const [cardProducts, setCardProducts] = useState([])

    // Shopping Cart . Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cardProducts,
            setCardProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )

}