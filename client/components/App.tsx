import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Hero from './Hero'
import Productpage from './Productpage'
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products/:id" element={<Productpage />} />
      </Routes>
    </>
  )
}

export default App
