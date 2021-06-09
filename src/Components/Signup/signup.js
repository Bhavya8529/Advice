import React, {Component} from 'react';
import {Container,Row,Col,Button,Nav} from "react-bootstrap";
import './signup.css'
import performRequest from "../Apicalls/axiosfile";
import Header from "../Header/header";
class Signup extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      email:'',
      password:''
    }
  }
  handleSubmit=()=>{
    console.log("i clicked");
      let path = "/register"
        let method = "POST"
        let body = {
          email:this.state.email,
          password:this.state.password,
          name:this.state.name
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
    <input type='text' onChange={(e)=>this.setState({name:e.target.value})}/>
    <input type="text" onChange={(e)=>this.setState({email:e.target.value})}/>
    <input type='text' onChange={(e)=>this.setState({password:e.target.value})}/>
    <Button onClick={()=>{this.handleSubmit()}}>Submit</Button>
    </div>
  );
}
}

export default Signup;
