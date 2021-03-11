import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {Grow} from '@material-ui/core';

import { second } from '../veryTired/currentData/tiredApi';

const RecentTestimonies = () => {
    return (
        <Container className="pt-5 pb-5 mt-3 mb-3">
            <Grow in>
            <Row>
            {second.map(person => { 
                return( 
                <Col sm="12" lg="4" md="4" className="mb-2" key={person.name}>
                    <img src={person.image} alt="person" className="img-fluid" />
                    <h4 className="name mt-3">{person.name}</h4>
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

export default RecentTestimonies;
