import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCardContext } from '../Context'

import { OrderCard } from './OrderCard'

export const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCardContext)
    const products = context.cardProducts
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
            <div className="px-2 scrollable-cards">
                {
                    products.map(product => (
                        <OrderCard
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </aside>
    ) 
}
