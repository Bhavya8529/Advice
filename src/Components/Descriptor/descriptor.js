import React, {Component} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import Dimg1 from '../../assets/Dimg1.png'
import Dimg2 from '../../assets/Dimg2.png'
import Dimg3 from '../../assets/Dimg3.png'
import './descriptor.css'

class Descriptor extends Component{
  constructor(){
    super();
    this.state={
      
    }
  }
  
  render(){
  return (
     <Container>
         <Row className="main">
            <Col sm className="card1">
            <div className="heading">
            Problem
            </div>
            <div>
            <img  className="img" src={Dimg1}/></div>
            <div className="text">
                Start by telling us your problem.Your problem can be 
                simple or it can be complicated irrespective of type.
                Just tell us and we will fix it.
            </div>
             </Col>
             <Col sm className="card1">
            <div className="heading">
            Research
            </div>
            <div>
            <img  className="img" src={Dimg2}/></div>
            <div></div>
            <div className="text">
                On the basis of your problem description, our team of experts 
                will look into it and do all the research for you.
            </div>
             </Col>
             <Col sm className="card1">
            <div className="heading">
            Solution
            </div>
            <div>
            <img  className="img" src={Dimg3}/></div>
            <div></div>
            <div className="text">
                Our team will analyse all the cases and compare all the possibele 
                solutions and will provide you with a best solution or advice.
            </div>
             </Col>
         </Row>
     </Container>
  )}
}
export default Descriptor;