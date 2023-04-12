import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <p className="Logo-text">SN3KERS</p>
      <ul>
        <li>
          <Link to={'/'} className="product-link">
            Home
          </Link>
          <div className="underline"></div>
        </li>
        <li>
          <a href="#products" className="product-link">
            The Collection
          </a>

          <div className="underline"></div>
        </li>
        <li>
          <Link to={'/products/3'} className="product-link">
            The Basics
          </Link>
          <div className="underline"></div>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
