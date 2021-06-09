import React, {Component,NavLink} from 'react';
import './footer.css'
import { Navbar,Nav, Container, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook,FaTwitter,FaWhatsapp,FaLinkedin,FaInstagram } from 'react-icons/fa';
class Footer extends Component{
  constructor(){
    super();
    this.state={
      
    }
  }
  
  render(){
  return (
      <Container fluid className="footerContainer">
        <Row>
          <Col className="col">
          <div>
            <h4>ADVICE</h4>
          </div>
          
          <div className="colContent1">
            <h5>About Us</h5>
          </div>
          <div>
            text for about
          </div>
          <div className="colContent1">
            <h5>Contact Us</h5>
          </div>
          <div>
            +91 6397346700
          </div>
          <div>
            bhavya96344@gmail.com
          </div>
          
          </Col>
          <Col className="col">
          <div>
            <h5>Information</h5>
          </div>
          <div className="colContent">
          <div>
            <Link to="/About">About Us</Link>
            
          </div>
          <div>
          <Link to="/Service">Our Services</Link>
            
          </div>
          <div>
            <Link to="#">Testimonials</Link>
            
          </div>
          </div>
          </Col>
          <Col className="col">
          <div>
            <h5>Helpful Links</h5>
          </div>
          <div className="colContent">
          <div>
          <Link to="/">Home</Link>
          </div>
          <div>
          <Link to="/Service">Services</Link>
          </div>
          <div>
            <Link to="#">Supports</Link>
            
          </div>
          <div>
          <Link to="#">Terms & Condition</Link>
          </div>
          <div>
          <Link to="#">Privacy Policy</Link>
          </div>
          </div>
          </Col>
        </Row>
        
        <div className="myLine"></div>
        <Row>
          <div className="social">
        <FaFacebook size="25" />
        <FaInstagram size="25"/>
        <FaLinkedin size="25"/>
        <FaTwitter size="25"/>
        <FaWhatsapp size="25"/>
        </div>
        </Row>
      </Container>
  )
  }
}
export default Footer;