import React, { Component } from 'react';
import FilterLink from '../components/FilterLink';
import SkillBar from '../components/SkillBar';
import { connect } from 'react-redux';
import { setLanguage } from '../actions';
import { fallbackValue, mkVector } from '../Tools';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
//import { getSiteString } from '../API';
import Slider from 'react-slick';

class Home_Component extends Component {
  componentDidMount(){
    var jQuery = window['jQuery'];
    //jQuery('#fullpage').fullpage();
  }
  render(){
    var siteString = fallbackValue(null, this.props, "siteString");
    var jQuery = window['jQuery'];
    var settings = {
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      zIndex:-1,
      arrows:false,
      dots: true
    };
    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    var screenMin = Math.min(screenWidth, screenHeight);

    return(
      <div>
        <Header />
        <Navbar id="myNav" headerID="header" />
        <div id="mobileApps" style={{backgroundImage:"url('img/writeApp.png')", color:"white", paddingBottom:"2em", paddingLeft:"0.5em"}}>
          <span style={{fontSize:"1.5em"}}>MY MOBILE APP STORE</span>
          <hr style={{borderColor:"white"}}/>
          <div className="row">
            <a href="https://itunes.apple.com/us/developer/cheng-ta-hsieh/id1111361894" className="offset-3 col-3 offset-md-3 col-md-2" style={{textAlign:"center", color:"white"}}>
              <img src="img/app_store.png" style={{width:"100%"}}/>
              <span>App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/developer?id=Utoappia" className="col-3 offset-md-2 col-md-2" style={{textAlign:"center", color:"white"}}>
              <img src="img/google_play.png" style={{width:"100%"}}/>
              <span>Play Store</span>
            </a>
          </div>
        </div>
        <div id="projects" style={{backgroundImage:"url('img/workplace.png')", color:"white", paddingBottom:"2em", paddingLeft:"0.5em"}}>
          <span style={{fontSize:"1.5em"}}>MY PROJECTS</span>
          <hr style={{borderColor:"white"}}/>
          <Slider {...settings}>
            <div><SliderItem
              title={"Mummify"}
              projectPage={"https://devpost.com/software/mummify-lqigpf"}
              technologies={"RSA, jQuery, Bootstrap"}
              imgSrc={"img/Mummify.png"}
              description={<div>Mummify lets users to easily do encryption on the chrome browser. It incorporates <span style={{color:"yellow"}}>RSA</span>, an asymmetric encryption algorithm, so that for online conversation, there's no need to exchange encryption key in person.<br />Mummify is an award winning project in NWHacks 2016 for the <span style={{color:"yellow"}}>"Best Privacy, Security or Crypto Hack"</span> award from <a style={{color:"#4BB749"}} href="https://www.privateinternetaccess.com/">Private Internet Access</a>.</div>}
              /></div>
            <div><SliderItem
              title={"Daniel\'s Portfolio"}
              projectPage={"/"}
              technologies={"React.js, Redux"}
              imgSrc={"img/Portfolio.png"}
              description={<div>
                <span>This is the portfolio page you are looking at right now ;)</span><br /><br />
                <a href="https://github.com/danielcdcj/DanielPortfolio" className="btn btn-success" style={{fontSize:"1em", fontStyle:"normal"}}>
                  <i className="fa fa-github"></i> See it on GitHub!</a>
              </div>}
              /></div>
            <div><SliderItem
              title={"Bus Finder"}
              projectPage={"https://itunes.apple.com/us/app/bus-finder-vancouver/id1147421557?ls=1&mt=8"}
              technologies={"iOS, Swift, REST API, MapKit"}
              imgSrc={"img/BusFinder.png"}
              description={'Using TransLink\'s API to request real time location and updated schedule of the buses in Vancouver.'}
              /></div>
            <div><SliderItem
              title={"UmbraChat"}
              projectPage={"https://umbrachat.herokuapp.com/client.html"}
              technologies={"Node.js, jQuery UI"}
              imgSrc={"img/UmbraChat.png"}
              description={'A secure chat application for complete anonymity.'}
              /></div>
            <div><SliderItem
              title={"Blend Of Colors"}
              projectPage={"http://blendofcolors.com"}
              technologies={"OpenCart CMS"}
              imgSrc={"img/blendofcolors.png"}
              description={'An Online Beauty Shop I made for my client.\n\nThe site was made using OpenCart with "ThemeGlobal Lite" theme.'}
              /></div>
          </Slider>
        </div>
        <div id="skills" style={{backgroundImage:"url('img/skill.png')", color:"white", paddingBottom:"1em", paddingLeft:"0.5em", paddingRight:"0.5em"}}>
          <span style={{fontSize:"1.5em"}}>MY SKILLS</span>

          <hr style={{borderColor:"white"}}/>
          <div style={{paddingLeft:"1.0em", paddingRight:"1.0em"}}>
            <div style={{textAlign:"center", fontSize:"0.7em"}}>My Familiarity Level for Each Skill</div><br />
            <div className="row">
              <div className="col-lg-6">
                <SkillBar
                  title={"JavaScript"}
                  percentage={98}
                  barColor="#F7DE39"/>
                <SkillBar
                  title={"HTML, CSS, jQuery, Bootstrap"}
                  percentage={95}
                  barColor="#E54F27"/>
                <SkillBar
                  title={"React.js, React Native, Redux"}
                  percentage={95}
                  barColor="#61dafb"/>
                <SkillBar
                  title={"Responsive UI Design"}
                  percentage={90}
                  barColor="#aaaaaa"/>
                <SkillBar
                  title={"Laravel (PHP)"}
                  percentage={85}
                  barColor="#f4645f"/>
                <SkillBar
                  title={"Firebase"}
                  percentage={75}
                  barColor="#F5820B"/>
              </div>
              <div className="col-lg-6">
                <SkillBar
                  title={"Node.js"}
                  percentage={70}
                  barColor="#4FA337"/>
                <SkillBar
                  title={"iOS Development using Swift"}
                  percentage={80}
                  barColor="#999999"/>
                <SkillBar
                  title={"Android Development using Java"}
                  percentage={70}
                  barColor="#A4C639"/>
                <SkillBar
                  title={"Java"}
                  percentage={80}
                  barColor="#ED1B24"/>
                <SkillBar
                  title={"C#"}
                  percentage={60}
                  barColor="#672678"/>
                <SkillBar
                  title={"MATLAB"}
                  percentage={70}
                  barColor="#D82C17"/>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:"#333333", color:"white", paddingBottom:"0.5em", paddingTop:"0.5em", textAlign:"center", fontSize:"1em"}}>
          © Daniel Hsieh 2017
        </div>
      </div>
    );
  }
}

class SliderItem extends Component {
  render(){
    return(
      <div style={{zIndex:"-1 !important", paddingLeft:"0.5em", paddingRight:"0.5em"}}>
        <div className="w3-row" style={{width:"100%"}}>
          <div className="w3-col m6 l4">
            <span style={{fontSize:"1.3em"}}><a style={{color:"white", fontSize:"1em"}} href={this.props.projectPage}>{this.props.title} <i className="fa fa-external-link"></i></a></span>
          </div>
          <div className="w3-col m6 l8" style={{paddingLeft:"0.5em", color:"white", fontFamily:"UbuntuMono"}}>
            <span style={{fontWeight:"bold", fontSize:"1em"}}>{this.props.technologies}</span><br />
          </div>
        </div>
        <div className="w3-row" style={{width:"100%"}}>
          <div className="w3-col m6 l4">
            <img src={this.props.imgSrc} style={{borderRadius:"0.2em", width:"80%", margin:"auto"}} draggable="false"/>
          </div>
          <div className="w3-col m6 l8" style={{paddingLeft:"0.5em", color:"white", fontFamily:"UbuntuMono", fontSize:"1em"}}>
            <i>{this.props.description}</i>
          </div>
        </div>
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
