import React, {Component} from 'react';
import './header.css'
import { Navbar,Nav } from "react-bootstrap";
import getClientToken from "../Apicalls/getClientToken";
class Header extends Component{
  constructor(){
    super();
    this.state={
      loggedin:false
    }
  }
  componentDidMount(){
    let accessToken1 = getClientToken()
        accessToken1.then((item) => {
          console.log(item)
          if(item=='none'){
            this.setState({loggedin:false})
          }
          else{
            this.setState({loggedin:true})
          }
        })
        console.log(this.state.loggedin)
  }
  clearStorage = async () => {
    console.log("striked successfully")
    try {
        await localStorage.removeItem('accessToken');
        await localStorage.removeItem('id');
        await localStorage.removeItem('name');
        await localStorage.removeItem('email');
    } catch (error) {
    }
}
  render(){
   
  return (
    <div className="main">
      <Navbar expand="lg" className="bgcol">
  <Navbar.Brand href="/">Advice</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mytabs">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/About">About Us</Nav.Link>
      <Nav.Link href="/Service">Our Services</Nav.Link>
      <Nav.Link href="/Contact">Contact Us</Nav.Link>
      {this.state.loggedin?(
        <Nav.Link href="/" onClick={()=>this.clearStorage()}>Log out</Nav.Link>
      ):(
        <Nav.Link href="/Signin">Log In</Nav.Link>
      )}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}
}

export default Header;
