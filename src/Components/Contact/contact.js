import React, {Component} from 'react';
import './contact.css'
import { Navbar,Nav, Container, Row, Col } from "react-bootstrap";
import Header from "../Header/header";
class Contact extends Component{
  constructor(){
    super();
    this.state={
      
    }
  }
  
  render(){
  return (
    <div>
      <Header/>
    
    <Container>
      <Row>
        <Col sm className="details">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS732XDpTKawBbsN7fFsSQN-aki-LX0NYGGEg&usqp=CAU"/>
        </div>
        <div>
        ADVICE
      </div>
      <div>
        contact Number: +91 6397346700
      </div>
      <div>
        Email: bhavya96344@gmail.com
      </div>
      <div>
        other details
      </div>
        </Col>
        <Col sm>
      <div className="mt-5">
          <form className="form">
            <input type="text" placeholder="Name" className="contactInput"/>
            <input type="email" placeholder="Email Address" required="email" className="contactInput"/>
            <input type="phone" placeholder="Mobile Number" className="contactInput"/>
            <input type="text" placeholder="" className="contactMessage"/>
            <button className="subBtn">Submit</button>
          </form>
      </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
  }
}
export default Contact;