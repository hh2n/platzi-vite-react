import { createContext, useEffect, useState } from 'react'

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

    //Get Products 
    const [ items, setItems ] = useState(null)
    const [ filteredItems, setFilteredItems ] = useState(null)
    
    //Get Products by Title
    const [ searchByTitle, setSearchByTitle ] = useState(null)

    useEffect(()=>{
       fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=>{
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
     }, [items, searchByTitle])

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
            setOrder,
            items, 
            setItems,
            searchByTitle, 
            setSearchByTitle,
            filteredItems, 
            setFilteredItems
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )

}