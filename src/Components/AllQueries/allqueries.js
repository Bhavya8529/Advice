import React, {Component} from 'react';
import {Container,Row,Col,Button,Nav} from "react-bootstrap";
import performRequest from '../Apicalls/axiosfile'
import Header from '../Header/header';
//import './home.css'
 
class AllQueries extends Component{
  constructor(){
    super();
    this.state={
      details:[]
    }
  }
  componentDidMount(){
    let id = localStorage.getItem("id");
    let path = "/query/" + id
        let method = "GET"
        let body = {}
        const response = performRequest(path, method, body)
        response.then(res => {
           this.setState({details:res})
            // this.setState({ redirect: "/AllQueries" })
        })
  }
  render(){
    // console.log(this.state.details)
    const item=this.state.details
  return (
      <div>
        <Header/>
          <div>
            {item.length!==0?(
                item.map(({query,solution},index) => (
                  <div>
                    <div>{index+1}. {query}</div>
                    <div>{solution}</div>
                    </div>
                ))
            ):(<div>you have not taken any advice</div>)}
          
          </div>
      </div>
  )}
}
export default AllQueries