import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MegaMenu from "../home/MegaMenu";
import SliderHome from '../home/SliderHome';


export default class HomeTop extends Component {
  render() {
    return (
      <Container>
        <Row>

<Col lg={3} md={3} sm={12}>
    
    <MegaMenu/>
    
    </Col>

    <Col className="p-0 m-0 overflow-hidden" lg={9} md={9} sm={12}>
    
    <SliderHome/>
    
    </Col>


             
        </Row>  
        </Container>
    )
  }
}
