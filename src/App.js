import './App.css';
import Header from './Components/Header/header'
import Home from './Components/Home/home'
import ServiceMain from './Components/ServicesMain/servicemain'
import About from './Components/About/About'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import Query from "./Components/Query/query";
import Signin from "./Components/Signin/signin"
import Signup from "./Components/Signup/signup";
import AllQueries from './Components/AllQueries/allqueries'
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
     {/* <Header/> */}
     <Route path='/' exact component={Home}/>
     <Route path="/About" component={About}/>
     <Route path="/Service" component={ServiceMain}/>
     <Route path="/Contact" component={Contact}/>
     <Route path="/Query" component={Query}/>
     <Route path="/Signin" component={Signin}/>
     <Route path="/Signup" component={Signup}/>
     <Route path="/AllQueries" component={AllQueries}/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
