import { Link } from 'react-router-dom'
import Cardmodel from './Cardmodel'
import { Canvas } from '@react-three/fiber'

interface Props {
  id: number
  name: string
  price: number
  model: string
  image: string
}

function Productcard(props: Props) {
  return (
    <div className="product-card">
      <Link to={`/products/${props.id}`} className="product-link">
        <img src={props.image} alt="" />
        {/* <Cardmodel /> */}
        <div className="text-container">
          <h3>{props.name}</h3>
          <h4>$ {props.price}</h4>
        </div>
      </Link>
    </div>
  )
}

export default Productcard
