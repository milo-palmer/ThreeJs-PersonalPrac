import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faFaceGrinTongueSquint,
} from '@fortawesome/free-solid-svg-icons'
import Products from './Products'
function Hero() {
  return (
    <>
      <section className="grid">
        <div className="box">
          <img
            src="/images/Jordans.jpg"
            alt="Air Jordan 1s"
            className="greyscale"
          />
        </div>
        <p className="hero-p">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          nam minus dolore voluptatibus sint quasi pariatur iste quibusdam rem,
          itaque dolor dolorem id sed labore.
        </p>
      </section>
      <section className="grid">
        <div className="flex">
          <p className="hero">SN3KERS</p>
          <FontAwesomeIcon icon={faFaceGrinTongueSquint} className="face" />
        </div>
        <button className="btn">
          View the collection
          <FontAwesomeIcon icon={faArrowDown} className="arrow" />
        </button>
      </section>
      <Products />
    </>
  )
}

export default Hero
