import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  HashRouter
} from 'react-router-dom'
import FilterLink from './components/FilterLink';
import Home from './Pages/Home';
import { getSiteString, getSiteLanguages } from './API';
import { setSiteString, setSiteLanguages } from './actions';
import { connect } from 'react-redux';
import { fallbackValue } from './Tools';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }
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

  componentDidMount(){
    var jQuery = window['jQuery'];
    jQuery(window).on('resize', (event)=>{

      this.setState({
        windowWidth:window.innerWidth,
        windowHeight:window.innerHeight
      })
    });
  }

  render() {
    var windowWidth = fallbackValue(window.innerWidth, this, "state", "windowWidth");
    var windowHeight = fallbackValue(window.innerHeight, this, "state", "windowHeight");
    var vmin = Math.min(windowWidth, windowHeight);

    var fontSize = 16 + Math.pow(Math.max(vmin - 320, 0), 0.5) / 2;
    return (
      <HashRouter>
        <div style={{fontSize}}>
          <Route exact path="/" component={Home}/>
        </div>
      </HashRouter>
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
