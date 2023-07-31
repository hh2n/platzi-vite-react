import { createContext, useEffect, useState } from 'react'

export const ShoppingCardContext = createContext()

export const initializeLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parsedSignOut

    if(!accountInLocalStorage){
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    }else{
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if(!signOutInLocalStorage){
        localStorage.setItem('sign-out', JSON.stringify({}))
        parsedSignOut = false
    }else{
        parsedAccount = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCartProvider = ({ children }) => {
    // My account
    const [account, setAccount] = useState({})
    // Sign out 
    const [signOut, setSignOut] = useState(false)

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
    const [ searchByCategory, setSearchByCategory ] = useState(null)
    
    //Get Products by Title
    const [ searchByTitle, setSearchByTitle ] = useState(null)

    //////////////////////////////////////////////////////////
    useEffect(()=>{
       fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (type, items, searchByTitle, searchByCategory) => {
        if(type === 'BY_TITLE'){
            return filteredItemsByTitle(items, searchByTitle)
        }
        if(type === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }
        if(type === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!type){
            return items
        }
    }

    useEffect(()=>{
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if(!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if(!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
     }, [items, searchByTitle, searchByCategory])

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
            setFilteredItems,
            searchByCategory, 
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )

}