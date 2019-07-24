import React, {Component} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Team from './Pages/Team';
import Class from './Pages/Class';
import Navbar from './Components/Navbar/index'
import Footer from './Components/Footer'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="AppBody">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Team" component={Team} />
            <Route path="/Class" component={Class} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
