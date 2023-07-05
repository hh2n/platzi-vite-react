import { XCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCardContext } from '../Context'

export const ProductDetail = () => {

    const context = useContext(ShoppingCardContext)
    const product = context.productToShow
    
    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden' } product-detail flex-col fixed right-0 border border-gray-400 rounded-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div 
                    className="cursor-pointer rounded-full hover:shadow"
                    onClick={ () => context.closeProductDetail() }
                >
                    <XCircleIcon className="h-6 w-6 text-gray-600 hover:text-gray-800 hover:h-7 hover:w-7" />
                </div>
            </div>
            <figure className="px-2">
                <img 
                    className="w-full h-full rounded-lg"
                    src={product.images[0]}
                    alt={product.title}
                />
            </figure>
            <p className="flex flex-col p-5">
                <span className="font-medium text-2xl mb-4 text-gray-800">${product.price}</span>
                <span className="font-medium text-md text-gray-800">{product.title}</span>
                <span className="font-medium text-sm text-gray-700">{product.description}</span>
            </p>
        </aside>
    )
}
