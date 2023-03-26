import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Products from './Products'
import Productpage from './Productpage'
const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Products />
      <Productpage />
    </>
  )
}

export default App
