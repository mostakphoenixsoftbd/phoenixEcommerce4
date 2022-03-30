import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'


class featureProducts extends Component {
  render() {
    return (

      <Container className="text-center pt-3  BetweenTwoSection" fluid={true}>
         <h4 className="section-title">FEATURED PRODUCTS</h4>
         <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
        <Row>
        <Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
<Card className='image-box'>
<img src="images/tshirt.jpg"/>
</Card>
<Card.Body> 
<p className='product-name-on-card'>ASUS Laptop for future</p>
<p className='product-price-on-card'>Price: 35000 BDT  </p>
</Card.Body>
</Col>

<Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
<Card className='image-box'>
<img src="images/tshirt.jpg"/>
</Card>
<Card.Body> 
<p className='product-name-on-card'>ASUS Laptop for future</p>
<p className='product-price-on-card'>Price: 35000 BDT  </p>
</Card.Body>
</Col>

<Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
<Card className='image-box'>
<img src="images/tshirt.jpg"/>
</Card>
<Card.Body> 
<p className='product-name-on-card'>ASUS Laptop for future</p>
<p className='product-price-on-card'>Price: 35000 BDT  </p>
</Card.Body>
</Col>

<Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
<Card className='image-box'>
<img src="images/tshirt.jpg"/>
</Card>
<Card.Body> 
<p className='product-name-on-card'>ASUS Laptop for future</p>
<p className='product-price-on-card'>Price: 35000 BDT  </p>
</Card.Body>
</Col>

<Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
<Card className='image-box'>
<img src="images/tshirt.jpg"/>
</Card>
<Card.Body> 
<p className='product-name-on-card'>ASUS Laptop for future</p>
<p className='product-price-on-card'>Price: 35000 BDT  </p>
</Card.Body>
</Col>

<Col key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
<Card className='image-box'>
<img src="images/tshirt.jpg"/>
</Card>
<Card.Body> 
<p className='product-name-on-card'>ASUS Laptop for future</p>
<p className='product-price-on-card'>Price: 35000 BDT  </p>
</Card.Body>
</Col>





       </Row> 
     </Container>
    );
  }
}
export default featureProducts;
