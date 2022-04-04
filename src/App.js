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

    // localStorage is a "persistent" memory of your browser
    // it works across the major browsers (firefox, chrome, safari, edge, opera)
    // you can save and retrieve strings out of it
    // for saving a string:
    // localStorage.setItem('user', 'Stefano')
  }

  // this works, but removes ALL the books with the same id
  // const removeFromCart = (book) => {
  //   let newCart = cart.filter((el) => el.id !== book.id)
  //   setCart(newCart)
  // }

  const removeFromCart = (index) => {
    // splice()
    // splice() MODIFIES the array you invoke it onto
    // so I need to clone the cart array in order to modify it
    // because the cart state variable is READ-ONLY, I cannot modify it without setCart

    // with splice() we're creating a COPY of the cart
    // we're REMOVING one element from that copy
    // and we're assigning that copy as the new value of cart
    // simple way: (doesn't work with an array of arrays/objects)
    // let newCart = [...cart]
    // proper way
    // let newCart = JSON.parse(JSON.stringify(cart))
    // newCart.splice(index, 1)
    // setCart(newCart)

    // filter()
    // with this method we're not "deleting" an element,
    // we're creating a new cart with ALL the elements but the one
    // we want to remove
    let newCart = cart.filter((el, i) => i !== index)
    setCart(newCart)
    // for removing a key from the localStorage:
    // localStorage.removeItem('user')
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
          <Route
            path="/cart"
            element={<Cart cartArray={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
