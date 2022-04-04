import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

// Link is used for WRAPPING a piece of JSX
// navigate() provides the same behavior but via JS

// {/* <a><button onClick=/></a> */} <-- this is very bad
// {/* <a><img /></a> */} <-- this is perfectly legit

const CartIndicator = ({ length }) => {
  // props.length is going to be the length of the cart array
  // in any given moment!
  const navigate = useNavigate()

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate('/cart')}>
        <FaShoppingCart />
        <span className="ml-2">{length}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
