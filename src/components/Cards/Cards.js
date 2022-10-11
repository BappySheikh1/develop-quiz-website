import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Cards = ({cards}) => {
    const {name,logo,total,id}=cards
    return (
         <div>
          <Card className='cards-container bg-dark'>
            <Card.Img variant="top" src={logo} />
             <Card.Body className='card-body '>
             <Card.Title>{name}</Card.Title>
               <Card.Text>
                  Quiz: {total} 
              </Card.Text>
              <Link to={`/home/${id}`}>
              <Button variant="danger" className='fw-semibold text-light'>
               Quiz Practice  <FontAwesomeIcon icon={faArrowRight}/>
              </Button>
              </Link>
             </Card.Body>
           </Card>
         </div>
    );
};

export default Cards;