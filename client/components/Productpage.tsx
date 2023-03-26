function Productpage() {
  //Db function call get item by id
  //Id in the params

  return (
    <section className="section grid gap">
      <div style={{ width: '100%' }}>
        <img
          src="/images/Shoe.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className="productpage-text-container">
        <div>
          <h2>Name</h2>
          <h3>Price</h3>
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
