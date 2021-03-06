import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from  '../components/Rating';

const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`} >
            <CardImg src={product.image} variant='top' alt='' />
            </Link>

        <Card.Body>
        <Link to={`/product/${product._id}`} >
            <Card.Title as='div'>
                <strong>{product.name}</strong>
            </Card.Title>
            </Link> 
            <Card.Text as='div'>
               <Rating 
               value={product.rating}
               text={`${product.numReviews} review `}
              
               />
            </Card.Text >
            <Card.Text as='h3'>
              ${product.price}
            </Card.Text>
        </Card.Body> 
            
        </Card>
    );
};

export default Product;