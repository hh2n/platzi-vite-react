import { createContext, useState } from 'react'

export const ShoppingCardContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Card  . Incrementn Quantity
    const [count, setCount] = useState(0)

    // Product Detail . Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail . Show product
    const [productToShow, setproductToShow] = useState({})

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setproductToShow
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )

}