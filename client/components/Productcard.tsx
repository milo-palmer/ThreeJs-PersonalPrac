import { Link } from 'react-router-dom'

interface Props {
  id: number
  name: string
  price: number
  model: string
}

function Productcard(props: Props) {
  return (
    <div className="product-card">
      <Link to={`/products/${props.id}`} className="product-link">
        <img src={props.model} alt="" />
        <div className="text-container">
          <h3>{props.name}</h3>
          <h4>$ {props.price}</h4>
        </div>
      </Link>
    </div>
  )
}

export default Productcard
