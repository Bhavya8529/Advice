import React, {Component} from 'react';
import {Container,Row,Col,Button,Nav} from "react-bootstrap";
import './home.css'
import Service from '../Service/service'
import performRequest from "../Apicalls/axiosfile"
import Descriptor from '../Descriptor/descriptor'
import Portfolio from "../Portfolio/portfolio"; 
import Header from '../Header/header'
import getClientToken from "../Apicalls/getClientToken";
class Home extends Component{
  constructor(){
    super();
    this.state={
      loggedin:false,
      email:""
    }
  }
  componentDidMount(){
    let accessToken1 = getClientToken()
        accessToken1.then((item) => {
          
          if(item=='none'){
            this.setState({loggedin:false})
          }
          else{
            this.setState({loggedin:true})
          }
        })
        console.log(this.state.loggedin)
  }
  subscribe=()=>{
    let path = "/subscribe"
    let method = "POST"
    let body = {
      email:this.state.email
    }
    const response = performRequest(path, method, body)
    response.then(res => {
        console.log(res)
    })
  }
  render(){
  return (
      <div>
    <Header/>
    <Container fluid className="contain">
    <Row>
        <Col sm>
            <div>
                <img className="img1" src="https://2yee132kzd8n3a7u5l1icbzt-wpengine.netdna-ssl.com/wp-content/uploads/sites/94/2020/03/enrique-aguilar-gqzcHoW6vQk-unsplash-1200x385.jpg"/>
            </div>
        </Col>
    <Col sm>
        <div className="text1">
        Advice is a platform where one can interact with the experts and can seek the best
        advice regarding their problem or query. The problem can be of any type, any field 
        or anything. We will come up with the most suitable advice/solution for you after 
        doing complete research and analysis. 
        </div>
        <div>
            {this.state.loggedin?(
                <Nav.Link href="/query">
                <Button className="btn1">Raise your query now for free</Button>
            </Nav.Link>
            ):(
                <Nav.Link href="/signin">
            <Button className="btn1">Raise your query now for free</Button>
        </Nav.Link>
            )}
        
        </div>
    </Col>
    </Row>
    <Row>
        <Descriptor/>
    </Row>
    <div>
        <Service/>
    </div>
    <Row className="part2">
    <div className="headings">
        Who are we? 
        </div>
        </Row>
        {/* <Row>
        <Col sm className="sm">
        <div>
            <img  className="img2" src="https://image.freepik.com/free-vector/cartoon-illustration-bubble-with-question-mark-cute-style-design_152558-4010.jpg"/>
        </div>
        </Col>
        <Col sm>
        <div className="text1">
        Advice is a platform where one can interact with the experts and can seek the best
        advice regarding their problem or query. The problem can be of any type, any field 
        or anything. We will come up with the most suitable advice/solution for you after 
        doing complete research and analysis. 
        </div>
        </Col>
        </Row>
        <Row>
        <div className="headings">
            Why us? 
            </div>
            </Row> */}
            <Row className="margin">
                <Col sm className="sm">
                <div>
                    <img className="img3" src="https://cdn.friendlystock.com/wp-content/uploads/2018/11/2-panda-with-sunglasses-cartoon-clipart-500x808.jpg"/>
                </div>

                </Col>
                <Col sm>
                <div className="part2">
            As we all are very busy in our lives and we don’t have a single second to waste and we as a concerned 
            organization/institution appreciates this fact. It is true that one person cannot know everything, he or she can get 
            stuck at one place and can waste a lot of their quality time. 

            Here we come into play, we give you a effective advice after doing complete research and analysis for you done by 
            the panel of experts which will help you in saving a lot of your quality time, money and give you a  clear roadmap 
            to your vision. 

            We can make you more focused and confident towards your goal. 

            One good advice can change your life. 

            Its easy to reach out to us. You just have to raise a query and we will be there to help you. No paper work, no 
            sort of formality direct advice. 

            We give advice to everyone regarding every thing. From small Business to large organizations, from a single 
            student to a group of entrepreneurs. 

            We offer our advice in all the fields be it a company related issue or be it a choice of your food.Just tell us  
        </div>
        </Col>
            
        </Row>
        {/* <Row>
        <div className="headings">
        How We Function? 
        </div>
        </Row>
        <Row className="margin">
        <Col sm className="sm">
                <div>
                    <img className="img4" src="https://previews.123rf.com/images/quartadis/quartadis1606/quartadis160600062/58321122-gear-and-ideas-concept-of-the-functioning-of-the-human-body-and-the-brain-gear-lines-icon-objects-is.jpg"/>
                </div>

                </Col>
                <Col sm>
        <div className="text1">
        You tell us your problem  

        Our expert team will do the research and analyze all the facts deeply and give you 
        the most suitable advice to follow. 

        And most importantly we don’t leave you hanging in the middle we are there to help you.....
        </div> 
        
        </Col>
    </Row> */}
        {/* //     <div>
        // Get advice now and reduce the burden of unnecessary problem because we are here to take  care of that. 
        // <div> */}
        <div className="color">
    <Row className="subscribe">
          <div className="text2">
          For Insights and more information please Subscribe!
          </div>
          <div className="text2">
              We don't spam
          </div>
    </Row>
    <Row>
          <div className="subscribeBox">
          <input className="myInput" type="email" placeholder="Enter your email" onChange={(e)=>this.setState({email:e.target.value})}/>
          </div>
          </Row>
    <Row>
          <Button onClick={()=>this.subscribe()} className="subscribeButton">Subscribe</Button>
    </Row>
    
    </div>
    <div>
        <Portfolio/>
    </div>
    </Container>
   </div>
  );
}
}

export default Home;
