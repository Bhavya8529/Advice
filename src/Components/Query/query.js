import React, {Component} from 'react';
import {Container,Row,Col,Button,Nav} from "react-bootstrap";
import performRequest from '../Apicalls/axiosfile'
import getClientToken from '../Apicalls/getClientToken'
import getClientDetails from '../Apicalls/getClientDetails'
//import './home.css'
import { Link, Redirect } from "react-router-dom";
import Header from '../Header/header';

class Query extends Component{
  constructor(){
    super();
    this.state={
      query:"",
      redirect:null,
      loggedin:false,
      id:null
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
 
  submitQuery=()=>{
      console.log("i clicked");
      let details = getClientDetails()
        details.then((item) => {
          this.setState({id:item[0]})
          let path = "/query"
        let method = "POST"
        let body = {
          query:this.state.query,
          userId:item[0],
          name:item[1],
          email:item[2]
        }
        console.log(body)
        const response = performRequest(path, method, body)
        response.then(res => {
            console.log(res)
            // this.setState({ redirect: "/AllQueries" })
        })
        })
      
  }
  
  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
  return (
    <div>
      <Header/>
       <input type="text" onChange={(e)=>this.setState({query:e.target.value})}/>
       <Button onClick={()=>this.submitQuery()}>submit</Button>
       <Link to="/AllQueries">
       <Button>see all your queries</Button>
       </Link>
        
   </div>
  );
}
}

export default Query;
