import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

// our goal is to provide to the application a CART functionality
// which is currently missing :(

// we need to add a cart array into the state of App

// RULES OF HOOKS
// 1) we have to be inside a react functional component
// 2) every hook must sit at the top level of the component, before the
// return statement, outside any function, loop, condition etc.

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (book) => {
    let newCart = [...cart, book]
    setCart(newCart)
  }

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12} className="text-center background-div">
            <Link to="/">
              {/* Link will be rendered in HTML as an anchor tag <a /> */}
              <h1>Strivazon Book Store</h1>
            </Link>
          </Col>
          <CartIndicator length={cart.length} />
        </Row>
        <hr />
        <Routes>
          <Route path="/" element={<BookStore addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartArray={cart} />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
