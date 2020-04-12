import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Contracts from './Containers/Contracts/Contracts'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ConsultantProfile from './Containers/ConsultantProfile/ConsultantProfile';
import PastProjects from './Containers/PastProjects/PastProjects';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <p>Hello world!</p> */}
      <Navbar/>
      <Switch>
        <Route path="/profile/:org" component={ConsultantProfile} />
        <Route path="/past-projects/:org" component={PastProjects}/>
        <Route path="/" component={Contracts} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
