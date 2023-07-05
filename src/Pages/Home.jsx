import { useEffect, useState } from "react"
import { Card } from "../Components/Card"
import { Layout } from "../Components/Layout"
import { ProductDetail } from '../Components/ProductDetail'

export const Home = () => {
  
  const [ items, setItems ] = useState(null)

  useEffect(()=>{
     fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
  }, [])

  return (
      <Layout>
          <div className="">
            Home   
            <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
              {
                items?.map( item => ( 
                    <Card 
                      key={item.id} 
                      data={item} 
                    />
                ))
              }
            </div>
          </div>
          <ProductDetail />
      </Layout>
  )
}
