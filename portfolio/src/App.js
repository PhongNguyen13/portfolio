import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

import Header from './components/header';
import Home from './pages/Home';
import ResUp from './pages/Research&Upskilling';
import PlanCon from './pages/Planning&Control';
import ComTeam from './pages/Communication&Teamwork';
import DevQua from "./pages/Development&QualityAssurance";

class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <GlobalStyle />
      <Header/>
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/research-upskilling" component={ResUp} />
        <Route path="/planning-control" component={PlanCon} />
        <Route path="/communication-teamwork" component={ComTeam} />
        <Route path="/development-qualityassurance" component={DevQua} />
      </Switch>
      </Router>
    </Provider>
    )
  }
}

export default App;
