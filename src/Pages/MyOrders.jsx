import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCardContext } from '../Context'
import { Layout } from '../Components/Layout'
import { OrdersCard } from '../Components/OrdersCard'

export const MyOrders = () => {
  const context = useContext(ShoppingCardContext)
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
          <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index)=> (

          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard 
              key={order}
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts} 
            />
          </Link>

        ))
      }
    </Layout>
  )
}
