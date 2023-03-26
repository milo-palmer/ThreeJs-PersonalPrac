import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShoeById } from '../../server/db/db'

interface Shoe {
  id: number
  name: string
  price: number
  model: string
}

function Productpage() {
  //Db function call get item by id
  const { id } = useParams()

  // const [shoe, setShoe] = useState({} as Shoe)
  // //Id in the params

  // const loadShoe = async () => {
  //   const data = await getShoeById(+id)
  //   setShoe(() => data)
  // }

  // loadShoe()

  const shoe = {
    name: "Jordan 1's",
    price: 69.99,
    model: '/images/Jordans.jpg',
  }

  return (
    <section className="section grid gap">
      <div style={{ width: '100%' }}>
        <img
          src={shoe.model}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="productpage-text-container">
        <div>
          <h2>{shoe.name}</h2>
          <h3>$ {shoe.price}</h3>
        </div>
        <button className="buybtn">Add to Cart</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus
        accusantium quasi rerum voluptatem doloribus? Id temporibus atque
        excepturi placeat modi corrupti recusandae ullam. Est officiis fugit
        repellendus excepturi libero?
      </p>
    </section>
  )
}

export default Productpage
