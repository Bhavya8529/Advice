import React, {Component} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";
import './service.css'
import Header from "../Header/header";
import getClientToken from '../Apicalls/getClientToken'
import {Redirect} from "react-router-dom"
class Service extends Component{
  constructor(){
    super();
    this.state={
      redirect:null
    }
  }
  sendQuery=()=>{
    let accessToken1 = getClientToken()
        accessToken1.then((item) => {
          if(item=='none'){
            this.setState({redirect:"/signin"})
          }
          else{
            this.setState({redirect:"/query"})
          }
        })
  }
  
  render(){
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
  return (
      <div>
          {/* <Header/> */}
    <Container fluid className="contain">
            <Row>
        <div className="headings">
            Our Services? 
            </div>
            </Row>
            <Row className="services">
                <Row>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://www.dance.nyc/images/users/14104/Screen_Shot_2020-01-10_at_1.58.37_PMarticle_image.png"/>
                    <div className="title">Lifestyle</div>
                </div>
                
            </Col>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="http://courses.aiu.edu/images/marketing%20rapid%20city2.jpg"/>
                    <div className="title">Marketing</div>
                </div>
                
            </Col>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1106530967%2F960x0.jpg%3Ffit%3Dscale"/>
                    <div className="title">Development</div>
                </div>
            </Col>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://5.imimg.com/data5/GR/EP/GLADMIN-51395158/career-counselling-service-500x500.jpg"/>
                    <div className="title">Career Counselling</div>
                </div>
            </Col>
            </Row>
            <Row className="mt-3">
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2018/05/how-business-analytics-can-help-your-business.jpg?w=715&h=375&crop=1"/>
                    <div className="title">Business Help</div>
                </div>
            </Col>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://149379058.v2.pressablecdn.com/wp-content/uploads/2018/03/careers-student-teacher.jpg"/>
                    <div className="title">Academic Help</div>
                </div>
            </Col>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://info.rti.com/hubfs/RTI%20Blog/2018-06-12%20Plague%20of%20Confusion/Post%20Image/rti-blog-post-image-2018-06-12-plague-of-confusion-642x315-0618.jpg"/>
                    <div className="title">Suggestion</div>
                </div>
            </Col>
            <Col sm className="sm">
                <div className="sm1" onClick={()=>{this.sendQuery()}}>
                    <img className="img4" src="https://i2.wp.com/blogs.einstein.yu.edu/wp-content/uploads/2018/03/paper-figures.jpg?fit=600%2C368"/>
                    <div className="title">Others</div>
                </div>
            </Col>
            </Row>
            </Row>
    </Container>
    </div>
  )
  }
}
export default Service;