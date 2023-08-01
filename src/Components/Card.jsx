import { useContext } from 'react'
import { ShoppingCardContext } from '../Context'

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

export const Card = ({ data }) => {

    const context = useContext(ShoppingCardContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
        context.closeCheckoutSideMenu()
    }

    const addProductToCard = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCardProducts([...context.cardProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    const renderIcon = (id) => {
        const isInCart = context.cardProducts?.filter(product => product.id === id).length > 0
        if (isInCart){
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-gray-700 w-6 h-6 rounded-full m-2 p-1"
                >
                    <CheckIcon
                        className="h-6 w-6 text-gray-100"
                    />
                </div>
            )
        }else{
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(event) => addProductToCard(event, data) }>
                    <PlusIcon
                        className="h-6 w-6 text-gray-700"
                    />
                </div>
            )
        }
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 shadow-sm rounded-t-lg"
            onClick={ () => showProduct(data) }
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span 
                    className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"
                >
                    {data.category.name}
                </span>
                <img
                    className="w-full h-full object-cover rounded-lg" 
                    src={data.images[0]} 
                    alt={data.title} 
                />
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between items-center h-auto pb-1 px-1">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}
