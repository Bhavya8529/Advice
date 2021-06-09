import React, {Component} from 'react';
import {Container,Row,Col,Button,Nav} from "react-bootstrap";
import performRequest from "../Apicalls/axiosfile";
import './signin.css'
import getClientToken from '../Apicalls/getClientToken'
import { Redirect } from "react-router-dom";
import getClientDetails from '../Apicalls/getClientDetails';
import Header from "../Header/header";
class Signin extends Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
      redirect:null,
      loggedin:false
    }
  }
  storeData = async (accessToken) => {
    try {
      await localStorage.setItem('accessToken', accessToken)
    } catch (e) {
    }
  }
  storeUserData = async (myId,myName,myEmail) => {
    try {
      await localStorage.setItem('id', myId)
      await localStorage.setItem('name', myName)
      await localStorage.setItem('email', myEmail)
    } catch (e) {
    }
  }
  
  handleSubmit=()=>{
    let path = "/signin"
      let method = "POST"
      let body = {
        email:this.state.email,
        password:this.state.password,
      }
      const response = performRequest(path, method, body)
      response.then(res => {
        
        if (res[1].token != undefined) {
          this.storeData(res[1].token)
          this.storeUserData(res[0].id,res[0].name,res[0].email)
          console.log(res)
          this.setState({ redirect: "/Query" })
          
        }
      })
      // let accessToken1 = getClientToken()
      //   accessToken1.then((item) => {
      //     if(item=='none'){
      //       this.setState({loggedin:false})
      //     }
      //     else{
      //       this.setState({loggedin:true})
      //     }
      //   })
        // let details = getClientDetails()
        // details.then((item) => {
        //   console.log(item)
        // })
  }
  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
  return (
      <div>
        <Header/>
    <Row>
      <Col>
      <div className="head">
        Signin
      </div>
      <div className="mt-5">
    <form className="form">
    <input type='email' onChange={(e)=>this.setState({email:e.target.value})} required="email" className="inp2"/>
    <input type="text" onChange={(e)=>this.setState({password:e.target.value})} required="text" className="mt-2 inp2"/>
    <button onClick={()=>{this.handleSubmit()}}>Submit</button>
    </form>
    </div>
    <div>
        <Nav.Link href="/Signup">Create an account</Nav.Link>
    </div>
      </Col>
    </Row>
    
    </div>
  );
}
}

export default Signin;
