import Productcard from './Productcard'

function Products() {
  return (
    <section className="section" id="products">
      <h2 className="h2">The Collection</h2>
      <div className="product-grid">
        <Productcard
          name="Nike Air Jordans Petopo"
          price={59.99}
          model="/images/Shoe.png"
          id={1}
        />
        <Productcard
          name="Jordan 1s"
          price={259.99}
          model="/images/Jordans.jpg"
          id={2}
        />
        <Productcard
          name="Nike Air Jordans Petopo"
          price={59.99}
          model="/images/Shoe.png"
          id={3}
        />
      </div>
    </section>
  )
}

export default Products
