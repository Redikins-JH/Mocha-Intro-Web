import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Team from './Pages/Team';
import Navbar from './Components/Navbar/index'
import Footer from './Components/Footer'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Team" component={Team} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
