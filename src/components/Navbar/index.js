import React, { Component } from 'react';
import { fallbackValue } from '../../Tools';
import { connect } from 'react-redux';
import FilterLink from '../FilterLink';
import { setLanguage } from '../../actions';
import NavbarFactory from './NavbarFactory';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {};

    if(fallbackValue(null, this, 'props', 'id') === null){
      throw "Navbar component needs an id";
    }
    if(fallbackValue(null, this, 'props', 'headerID') === null){
      throw "Navbar component needs a header ID";
    }
  }

  componentDidMount(){
    const id = fallbackValue(null, this, 'props', 'id');
    const headerID = fallbackValue(null, this, 'props', 'headerID');

    var jQuery = window['jQuery'];
    jQuery(window).on('scroll', (event)=>{
      var scrollValue = jQuery(window).scrollTop();
      if ( scrollValue > jQuery('#' + headerID).height()) {
        //jQuery('#' + id).addClass('affix');
        jQuery('#' + id).css('position', "fixed");
        jQuery('#' + id).css('top', 0);
        jQuery('#spacer_' + id).height(jQuery('#' + id).outerHeight());
        //jQuery('#brand_' + id).removeClass('hidden-lg-down');
      } else {
        //jQuery('#' + id).removeClass('affix');
        jQuery('#' + id).css('position', "relative");
        jQuery('#' + id).css('top', null);
        jQuery('#spacer_' + id).height(0);
        //jQuery('#brand_' + id).addClass('hidden-lg-down');
      }
    });
  }

  render(){
    const id = fallbackValue(null, this, 'props', 'id');
    var siteString = fallbackValue({}, this, 'props', 'siteString');
    var langCode = this.props.language.currentLanguage.label;
    return (
      <NavbarFactory
        id={id}
        headerID={this.props.headerID}
        items={[
          {
            id:"mobileapps",
            title:"Mobile Apps",
            stagePoint:600,
            href:"mobileApps",
            scrollTarget:true
          },
          {
            id:"projects",
            title:"Projects",
            stagePoint:600,
            href:"projects",
            scrollTarget:true
          },
          {
            id:"skills",
            title:"My Skills",
            stagePoint:600,
            href:"skills",
            scrollTarget:true
          }
        ]}
        brand={<div style={{fontWeight:"bold"}}>Daniel Hsieh</div>}
        shouldDisplayBrand={(status, numStaged)=>{
          return status.stickingToTop || numStaged == 0;
        }}
        color="white"
        backgroundColor="rgba(0,100,200,0.95)"
        backgroundImage=""/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    siteString: state.siteString
  }
}
export default connect(mapStateToProps)(Navbar);

/*
return(
  <div>
    <div id={"spacer_" + id}></div>
    <nav id={id} className="navbar navbar-toggleable navbar-light bg-faded">
      <button
        id={'toggleButton_' + id}
        className="navbar-toggler navbar-toggler-right"
        type="button" data-toggle="collapse"
        data-target={"#navbarSupportedContent_" + id}
        aria-controls={"navbarSupportedContent_" + id}
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <FilterLink id={"brand_" + id} className="navbar-brand" to="/">
        {fallbackValue("My Website", siteString, 'general', 'siteName', langCode)}
      </FilterLink>
      <div className="collapse navbar-collapse" id={"navbarSupportedContent_" + id}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <FilterLink className="nav-link" to="/#">
              {fallbackValue("My Website", siteString, 'general', 'about', langCode)}
            </FilterLink>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown" style={{"cursor":"pointer"}}>
            <a className="nav-link dropdown-toggle" id={"langButton_" + id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-globe" style={{fontSize:"20px"}}></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" id={"langButton_" + id}>
              {this.props.language.availableLanguages.map((language)=>{
                return (
                  <button
                    key={language.label}
                    className="btn btn-link dropdown-item"
                    onClick={(e)=>{
                      this.props.dispatch(setLanguage(language));
                    }}
                    >{language.display}</button>
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
*/
