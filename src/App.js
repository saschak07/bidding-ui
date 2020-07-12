import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Contracts from './Containers/Contracts/Contracts'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import ConsultantProfile from './Containers/ConsultantProfile/ConsultantProfile';
import PastProjects from './Containers/PastProjects/PastProjects';
import Disclaimer from './Containers/Disclaimers/Disclaimer'
import TemplateUpload from './Containers/TempleteUpdate/TemplateUpdate'
import InsertIdea from './Containers/InsertIdea/InsertIdea'
import BidDownloader from './Containers/BidDownloader/BidDownloader'
import ProposalList from './Containers/ProposalList/PoposalList'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <p>Hello world!</p> */}
      <Navbar/>
      <Switch>
        <Route path="/profile/:org" component={ConsultantProfile} />
        <Route path="/past-projects/:org" component={PastProjects}/>
        <Route path="/disclaimers/:org" component={Disclaimer}/>
        <Route path="/insert-idea/:org" component={InsertIdea}/>
        <Route path="/donwloader/:org" component={BidDownloader}/>
        <Route path="/template-upload" component={TemplateUpload}/>
        <Route path="/proposals" component={ProposalList}/>
        <Route path="/" component={Contracts} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
