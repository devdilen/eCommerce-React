import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions/RestAction';

function Singleview() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.restReducer.restList);
  const singleRest = products.find((product) => product.id == params.id);

  return singleRest ? (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <img
            src={singleRest.image}
            alt=""
            className="img-fluid"
          />
        </Col>

        <Col xs={12} md={6} lg={6} className='mt-5 p-5 '>
          <ListGroup>
            <ListGroup.Item>
         <h1>  {singleRest.title}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
             <h3> <strong>Category:</strong> {singleRest.category}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
           <h3>   <strong>Rating:</strong> {singleRest.rating.rate}/5</h3>
            </ListGroup.Item>
            <ListGroup.Item>
             <h3> <strong>Price:</strong> {singleRest.price}$</h3>
            </ListGroup.Item>
            <ListGroup.Item>
             <h3> <strong>Description:</strong> {singleRest.description}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
             <h3> <strong>Total Count:</strong> {singleRest.rating.count}</h3>
            </ListGroup.Item>

          </ListGroup>
        </Col>
      </Row>
    </Container>
  ) : null;
}

export default Singleview;