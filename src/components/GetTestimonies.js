import React from 'react';
import { useSelector } from 'react-redux';
import { Grow } from '@material-ui/core';

import { Container, Row, Col } from 'react-bootstrap';

import { first } from '../veryTired/allData/tiredApi';

const GetTestimonies = () => {
    const testimonials = useSelector((state) => state.testimonials);
    console.log(testimonials);
    return (
        <Container>
            <Grow in>
            <Row>
            {first.map( person => { 
                return( 
                <Col sm="12" lg="4" md="4" className="mb-2" key={person.name}>
                    <img src={person.image} alt="person" className="img-fluid" />
                    <h4 className="name mt-3">{person.name}</h4>
                    <span className="location mr-3">{person.location} </span>    
                    <span className={person.tag === "VENDOR" ? 'otag' : 'tag'}>{person.tag}</span>
                    <p className="testimony mt-3">{person.testimony}</p>
                </Col>
                )}
              )
            }
            </Row>
            </Grow>
            
        </Container>
    );
};

export default GetTestimonies;
