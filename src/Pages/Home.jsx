import { useContext } from "react"
import { Card } from "../Components/Card"
import { Layout } from "../Components/Layout"
import { ProductDetail } from '../Components/ProductDetail'
import { ShoppingCardContext } from "../Context"

export const Home = () => {
  
  const context = useContext(ShoppingCardContext)
  const renderView = () => {
    if(context.filteredItems?.length > 0){
          return (
            context.filteredItems?.map( item => ( 
                <Card 
                  key={item.id} 
                  data={item} 
                />
            ))
          )
    }else{
        return (
          <div className="w-full text-red-500 font-semibold text-center m-2">
            We don't have anything :( 
          </div>
        )
    }

    
  }
  return (
      <Layout>
          <div className="">
            <div className="flex flex-col items-center justify-center relative w-full p-5">
                <h1 className="font-medium text-xl">Exclusive Products</h1>
                <input 
                  type="text" 
                  placeholder="Search a product" 
                  className="border p-3 rounded-md my-2 mb-4 w-full focus:outline-none" 
                  onChange={(event) => context.setSearchByTitle(event.target.value) }
                />
                <p className="w-full text-left font-light text-xs text-gray-500">
                  <i>{context.filteredItems?.length}  found items</i>
                </p>
            </div>
            <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
              {
                renderView()
              }
            </div>
          </div>
          <ProductDetail />
      </Layout>
  )
}
