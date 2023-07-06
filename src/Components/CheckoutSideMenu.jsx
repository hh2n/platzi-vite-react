import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCardContext } from '../Context'

import { OrderCard } from './OrderCard'
import { totalPrice } from '../Utils'

export const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCardContext)
    const products = context.cardProducts

    const handleDelete = (id) => {
        const filteredProducts = products?.filter(product => product.id != id)
        context.setCardProducts(filteredProducts)
        context.setCount(context.count - 1)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: products,
            totalProducts: products.length,
            totalPrice: totalPrice(products),
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCardProducts([])
    }

    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-gray-400 rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div 
                    className="cursor-pointer rounded-full hover:shadow"
                    onClick={ () => context.closeCheckoutSideMenu() }
                >
                    <XCircleIcon className="h-6 w-6 text-gray-600 hover:text-gray-800 hover:h-7 hover:w-7" />
                </div>
            </div>
            <div className="px-2 scrollable-cards flex-1">
                {
                    products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 border-gray-400 rounded-lg shadow">
                <p className="flex justify-between items-center gap-2 mb-2">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">${totalPrice(products)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button 
                        className="w-full py-3 text-white rounded-lg bg-gray-700 mb-6"
                        onClick={() => handleCheckout()}
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    ) 
}
