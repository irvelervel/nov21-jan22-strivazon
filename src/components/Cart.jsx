import Button from 'react-bootstrap/Button'
import { FaTrash } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'

const Cart = ({ cartArray }) => (
  <Row>
    <Col sm={12}>
      <ul style={{ listStyle: 'none' }}>
        {cartArray.map((book, i) => (
          <li key={i} className="my-4">
            <Button
              variant="danger"
              onClick={() => {
                // probably this will be used for REMOVING elements
                // from the cart...
              }}
            >
              <FaTrash />
            </Button>
            <img
              className="book-cover-small"
              src={book.imageUrl}
              alt="book selected"
            />
            {book.title}
          </li>
        ))}
      </ul>
    </Col>
    <Row>
      <Col sm={12} className="font-weight-bold">
        TOTAL:{' '}
        {cartArray.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue.price),
          0
        )}
      </Col>
    </Row>
  </Row>
)

export default Cart
