import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShoppingCardContext } from '../Context'
import { Layout } from '../Components/Layout'
import { OrderCard } from '../Components/OrderCard'

export const MyOrder = () => {
  const context = useContext(ShoppingCardContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1

  return (
      <Layout>
            <div className="flex items-center justify-center relative w-80 mb-5">
                <Link to={'/my-orders'} className="absolute left-0">
                  <ChevronLeftIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-80">
                {
                    context.order?.[index]?.products.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                        />
                    ))
                }
            </div>
      </Layout>
  )
}
