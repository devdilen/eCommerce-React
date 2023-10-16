import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './actions/RestAction';
import {  Col,  Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Content.css';
import { Link } from 'react-router-dom';
import {  sortByPrice, sortByRating } from './actions/RestAction';
import {  Dropdown, DropdownButton } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addProduct } from './actions/RestAction';
import { deleteProduct } from './actions/RestAction';

function Home() {
 const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const sortOrder = useSelector((state) => state.restReducer.sortOrder);
 

  // Default sorting by price
  // Fetch products if not already loaded
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector(state => state.restReducer.restList);

  const handleSortChange = (order) => {
    if (order === 'price' && sortOrder !== 'price') {
      dispatch(sortByPrice());
    } else if (order === 'rating' && sortOrder !== 'rating') {
      dispatch(sortByRating());
    }
  } 
  const newProduct = {
    image: 'URL',
    heading: 'Product Heading',
    description: 'Product Description',
    price: 100,
    rating: {
      rate: 0,
      count: 0,
    }
  };
  
  const handleSaveChanges = () => {
    dispatch(addProduct(newProduct)); 
    setShow(false); 
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

   if (!products || !Array.isArray(products) || products.length === 0) {
    return <div>No products available.</div>;
  }
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  

    <><Row className='w-100'>
      <Col xs={6} className="text-end mt-2 ">
        <div>
          <DropdownButton
            id="sort-dropdown"
            title="Sort By"
            onSelect={handleSortChange}
            variant="secondary"
          >
            <Dropdown.Item eventKey="price">Price</Dropdown.Item>
            <Dropdown.Item eventKey="rating">Rating</Dropdown.Item>
          </DropdownButton>
        </div>
      </Col>
      <Col xs={6}  className="text-start mt-2">
 <div>
    <Button variant="primary" onClick={() => handleShow()}>
      Add Products
    </Button>
 </div>
</Col>

    </Row>
    
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              id="image-input"
              type="text"
              placeholder="Image URL"
              className="form-control mb-2" />
            <input id="title-input" type="text" placeholder="Title" className="form-control mb-2" />
            <input id="price-input" type="text" placeholder="Price" className="form-control mb-2" />
            <input id="description-input" type="text" placeholder="Description" className="form-control mb-2" />

          </div>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="primary" onClick={() => handleSaveChanges(newProduct)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <Row>


        {products.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3}>
            <div class="container">

              <article class="card" style={{ marginLeft: '5px' }}>
              <button className='delete-btn' onClick={() => handleDelete(product.id)}>Delete</button>
                <div class='card-background'>
                  <img style={{ objectFit: 'contain' }} src={product.image} alt="background" />
                </div>
                <div class='content'>
                  <h5><strong>{product.title}</strong></h5>
                  <ListGroup>
                    <ListGroup.Item><strong>Category: </strong>{product.category}</ListGroup.Item>
                    <ListGroup.Item> <strong>Rating: </strong>{product.rating.rate}/5 </ListGroup.Item>
                    <ListGroup.Item> <strong>Count: </strong>{product.rating.count} </ListGroup.Item>
                    <ListGroup.Item> <strong>Price: </strong>{product.price}$ </ListGroup.Item>

                  </ListGroup>
                </div>
                <div class="action-bottom-bar">
                  <a style={{ marginTop: '16px' }} href="#">
                    <Link to={`productView/${product.id}`}>Read More</Link>
                   

                    <svg xmlns="http://www.w3.org/2000/svg" class="chevron" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="arrow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                      <path d="M15 16l4 -4"></path>
                      <path d="M15 8l4 4"></path>
                    </svg>
                  </a>

                </div>
              </article>
            </div>
          </Col>
        ))}
      </Row></>
  )
}

export default Home