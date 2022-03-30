import React, { Component } from 'react'
import Slider from 'react-slick/lib/slider'
import { Container, Row, Col, Card } from 'react-bootstrap';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class newArrival extends Component {

  constructor(props) {
    super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this)

}
next(){
    this.slider.slickNext();
}
previous(){
    this.slider.slickPrev();
}
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (

<Container className="text-center BetweenTwoSection" fluid={true}>
                <h4 className="section-title px-0 mx-0 ">NEW ARRIVAL
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </h4>
                <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Slider  ref={c=>(this.slider=c)}   {...settings}>
                        <div className="p-1 h-100">
                            <Card className="card w-100  image-box ">
                                <img src="images/bag1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="p-1  h-100 ">
                            <Card className="card w-100 image-box ">
                                <img src="images/bag1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="p-1 h-100">
                            <Card className="card w-100   image-box ">
                                <img src="images/bag1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="p-1 h-100">
                            <Card className="card w-100  image-box ">
                                <img src="images/bag1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="p-1 h-100">
                            <Card className="card w-100  image-box ">
                                <img src="images/bag1.jpg"/>
                                <Card.Body>
                                    <h5 className="product-name-on-card">ASUS TUF A15 FA506IU Ryzen 7 4800H GTX</h5>
                                    <p className="product-price-on-card">Price: 3000TK</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>


            </Container>
    )
  }
}
