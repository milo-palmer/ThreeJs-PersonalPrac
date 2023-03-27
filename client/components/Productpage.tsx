import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShoeFromId } from '../apiClient'

interface Shoe {
  id: number
  name: string
  price: number
  model: string
}

function Productpage() {
  //Db function call get item by id
  const { id } = useParams()
  const [shoe, setShoe] = useState({} as Shoe)

  if (!id) {
    return <h1>Data Error</h1>
  }

  // //Id in the params

  useEffect(() => {
    getShoeFromId(+id)
      .then((shoe) => {
        setShoe(() => shoe)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  // function handleClick(e) {
  //   e.preventDefault()
  //   loadShoe()
  // }

  // const loadShoe = async () => {
  //   const data = await getShoeFromId(+id)
  //   console.log(data)
  //   setShoe(() => data)
  // }

  // console.log(id)

  // const shoe = {
  //   name: "Jordan 1's",
  //   price: 69.99,
  //   model: '/images/Jordans.jpg',
  // }

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
      {/* <button onClick={handleClick}>Click</button> */}
    </section>
  )
}

export default Productpage
