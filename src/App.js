import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import FilterLink from './components/FilterLink';
import Home from './Pages/Home';
import { getSiteString, getSiteLanguages } from './API';
import { setSiteString, setSiteLanguages } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentWillMount(){

    // You can load data from server the server. Some are optional
    // Note: if link to server, make sure to configure API/index.js

    /*
    // (optional) load available site languages from server
    getSiteLanguages((response)=>{
      this.props.dispatch(setSiteLanguages(response.data));
    })
    */

    /*
    // (optional) load strings from server
    getSiteString((response)=>{
      this.props.dispatch(setSiteString(response.data));
    })
    */
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    siteString: state.siteString
  }
}
export default connect(mapStateToProps)(App);
