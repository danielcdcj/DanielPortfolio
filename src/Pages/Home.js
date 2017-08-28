import React, { Component } from 'react';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import { setLanguage } from '../actions';

class Home_Component extends Component {
  render(){
    return(
      <div>
        <div>Home</div>
        <FilterLink to="about">Goto About</FilterLink>
        <div>{this.props.language}</div>
        <button onClick={(e)=>{
            this.props.dispatch(setLanguage("English"));
          }}>English</button>
        <button onClick={(e)=>{
            this.props.dispatch(setLanguage("Chinese_Traditional"));
          }}>繁體中文</button>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language
  }
}
export default connect(mapStateToProps)(Home_Component);
