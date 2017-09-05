import React, { Component } from 'react';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
//import { getSiteString } from '../API';

class Home_Component extends Component {
  render(){
    var siteString = fallbackValue(null, this.props, "siteString");
    var jQuery = window['jQuery'];
    return(
      <div>
        <Header />
        <Navbar id="myNav" headerID="header"/>
        {mkVector(1,100).map((num)=>{
          return <div key={num}>Some text for scrolling</div>
        })}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    siteString: state.siteString
  }
}
export default connect(mapStateToProps)(Home_Component);
