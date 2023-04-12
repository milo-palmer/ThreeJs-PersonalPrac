import { useEffect, useState } from 'react'
import Productcard from './Productcard'
import { getShoes } from '../apiClient'

interface Product {
  name: string
  price: number
  model: string
  id: number
  image: string
}

function Products() {
  const [shoeData, setShoeData] = useState([] as Product[])

  useEffect(() => {
    getShoes()
      .then((shoe) => {
        setShoeData(() => shoe)
      })
      .catch((error) => {
        console.error(error.message + 'Error loading data')
      })
  }, [])

  return (
    <section className="section" id="products">
      <h2 className="h2">The Collection</h2>
      <div className="product-grid">
        {shoeData.map((product) => (
          <Productcard
            key={product.id}
            name={product.name}
            price={product.price}
            model={product.model}
            id={product.id}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Products
