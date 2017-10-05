/*
  props:
    id (required)
    headerID (required)
    backgroundColor (optional) (default: "rgba(0,100,200,0.8)")
    color (optional) (default: "white"): color of the text
    items (optional) (default: []): list of items on the navbar
      example:
        [
          {
            id:"home",      // required
            title:"Home",   // required
            priority:"high" // (optional) low:show when width is large; medium: show when width is medium; high: show when width is small; top:always show; (default: high)
          }
        ]
*/

import React, { Component } from 'react';
import { fallbackValue } from '../../Tools';
import { connect } from 'react-redux';
import FilterLink from '../FilterLink';
import { setLanguage } from '../../actions';
class NavbarFactory extends Component {
  constructor(props){
    super(props);

    this.state = {
      stickingToTop:false
    };

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
        jQuery('#' + id).css('position', "fixed");
        jQuery('#' + id).css('top', 0);
        jQuery('#spacer_' + id).height(jQuery('#' + id).outerHeight());
        this.setState({
          stickingToTop:true
        });
      } else {
        jQuery('#' + id).css('position', "relative");
        jQuery('#' + id).css('top', null);
        jQuery('#spacer_' + id).height(0);
        this.setState({
          stickingToTop:false
        });
      }
    });
    jQuery(window).on('resize', (event)=>{
      var navbarWidth = jQuery('#' + id).width();
      var brandWidth = jQuery('#' + id + "_brand").width();

      this.setState({
        navbarWidth,
        brandWidth
      })
    });
  }

  render(){
    const id = fallbackValue(null, this, 'props', 'id');
    var siteString = fallbackValue({}, this, 'props', 'siteString');
    var langCode = this.props.language.currentLanguage.label;

    var backgroundColor = fallbackValue("rgba(0,100,200,0.8)", this, "props", "backgroundColor");
    var backgroundImage = fallbackValue("rgba(0,100,200,0.8)", this, "props", "backgroundImage");
    var color = fallbackValue("white", this, "props", "color");
    var items = fallbackValue([], this, "props", "items");
    var numStaged = this.numStaged(items);
    var stickingToTop = this.state.stickingToTop;

    var shouldDisplayBrand = fallbackValue((status, numStaged)=>{return false;}, this, "props", "shouldDisplayBrand");
    var navbarWidth = fallbackValue(0, this, "state", "navbarWidth");
    var brandWidth = fallbackValue(0, this, "state", "brandWidth");
    return (
      <div style={{width:"100%", color:color, zIndex:9999}}>
        <div id={"spacer_" + id}></div>
        <div id={id} style={{width:"100%", backgroundColor, backgroundImage, zIndex: 10}}>
          <div className="w3-bar">
            <a id={id + "_brand"} onClick={(e)=>{this.scrollToID("header", -50) }} className={"w3-bar-item w3-button"} style={{display:((shouldDisplayBrand({stickingToTop}, numStaged)) ? "block":"none")}}>
              {fallbackValue(<noscript />, this, "props", "brand")}
            </a>
            {items.map((item)=>{
              var onHoverBackgroundColor = fallbackValue("grey", item.onHoverBackgroundColor);

              var isStaged = this.isStaged(item);
              if(item.scrollTarget){
                return (
                  <a key={item.id + "_staged"} onClick={(e)=>{this.scrollToID(item.href, -50)}} className={"w3-bar-item w3-button w3-hover-" + onHoverBackgroundColor} style={{...item.style, display:isStaged ? "block":"none"}}>{item.title}</a>
                );
              } else {
                return (
                  <a key={item.id + "_staged"} href={item.href} className={"w3-bar-item w3-button w3-hover-" + onHoverBackgroundColor} style={{...item.style, display:isStaged ? "block":"none"}}>{item.title}</a>
                );
              }

            })}
            <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right" style={{display:((items.length - numStaged) > 0 ? "block":"none")}} onClick={(e)=>{this.onHamburgerClicked()}}>&#9776;</a>
          </div>

          <div id="demo" className="w3-bar-block w3-hide">

            {items.map((item)=>{
              var onHoverBackgroundColor = fallbackValue("grey", item.onHoverBackgroundColor);
              var isStaged = this.isStaged(item);
              if(item.scrollTarget){
                return (
                  <a key={item.id + "_unstaged"} onClick={(e)=>{this.scrollToID(item.href, -50); this.onHamburgerClicked()}} className="w3-bar-item w3-button" style={{display:isStaged ? "none":"block"}}>{item.title}</a>
                );
              } else {
                return (
                  <a key={item.id + "_unstaged"} href={item.href} className="w3-bar-item w3-button" style={{display:isStaged ? "none":"block"}}>{item.title}</a>
                );
              }
            })}
          </div>
        </div>

      </div>
    );
  }
  onHamburgerClicked() {
    console.log("hamburger clicked!")
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
  }
  isStaged(item){
    var windowWidth = window.innerWidth;
    var stagePoint = fallbackValue(400, item, "stagePoint");

    return windowWidth >= stagePoint;
  }
  numStaged(items){
    var acc = 0;
    var windowWidth = window.innerWidth;
    items.forEach((item)=>{
      var stagePoint = fallbackValue(400, item, "stagePoint");
      if(this.isStaged(item)){
        acc++;
      }
    });
    return acc;
  }
  scrollToID(targetDivID, yOffset = 0){
    var jQuery = window['jQuery'];
    jQuery('html, body').animate({ scrollTop: jQuery('#' + targetDivID).offset().top + yOffset }, 'slow');
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.language,
    siteString: state.siteString
  }
}
export default connect(mapStateToProps)(NavbarFactory);
