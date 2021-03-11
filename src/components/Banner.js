import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Grow } from '@material-ui/core';

import banner from '../images/banner.svg';

const Banner = () => {
    return (
        <div className="mt-5">
            <Container>
                <Grow in>
                <Row>
                    <Col sm="12" lg="6" md="6" className="d-flex align-items-center">
                        <div>
                        <h1 className="heading-bnr">Amazing <br/> Experiences from Our Wonderful Customers</h1>
                        <p className="text-bnr">Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                        </div>
                    </Col>
                    <Col sm="12" lg="6" md="6" >
                        <img src={banner}  alt="banner" className="img-fluid" />
                    </Col>
                </Row>
                </Grow>
                
            </Container>
        </div>
    );
};

export default Banner;
