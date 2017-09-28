import React, { Component } from 'react';
import Typed from 'typed.js';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      urlHeight:0
    };
  }
  // header is the component that locate above the navbar. Try put some text in the div and see.
  componentDidMount(){
    const options = {
      strings: [
        "I'm a passionate <b style='color:#00aaff'>developer</b> who builds <b style='color:#00aaff'>Mobile Application</b>",
        "I'm a passionate <b style='color:#00aaff'>developer</b> who builds <b style='color:#00aaff'>Interactive Website</b>",
        "I'm a passionate <b style='color:#00aaff'>developer</b> who builds <b style='color:#00aaff'>Beautiful, Responsive UI</b>",
        "I'm a passionate <b style='color:#00aaff'>developer</b> who builds <b style='color:#00aaff'>Elegantly Creative Solutions</b>",
      ],
      typeSpeed: 30,
      backSpeed: 50
    }
    this.typed = new Typed(this.el, options);

    var jQuery = window['jQuery'];
    jQuery(window).on('resize', (event)=>{

      this.setState({
        windowWidth:window.innerWidth,
        windowHeight:window.innerHeight
      });

      var header_name_height = jQuery("#header_name").outerHeight();
      jQuery("#profile_picture").width(header_name_height);

      var screen = window['screen'];
      var urlHeight = Math.max(0, window.outerHeight - window.innerHeight);
      var lastURLHeight = this.state.urlHeight;
      this.setState({urlHeight})
    });
    var screen = window['screen'];
    var urlHeight = Math.max(0, window.outerHeight - window.innerHeight);
    var lastURLHeight = this.state.urlHeight;
    this.setState({urlHeight})

    var header_name_height = jQuery("#header_name").outerHeight();
    jQuery("#profile_picture").width(header_name_height);
  }
  componentWillUnmount(){
    this.typed.destroy();
  }
  render(){

    return(
      <div id="header" style={{width:"100%"}}>
        <div style={{
            backgroundImage:"url('img/sand.jpg')",
            height:"100vh",
            width:"100%",
            display: "table-cell",
            verticalAlign:"middle",
            color:"white",
            top:0,
            zIndex:-1
          }}>
          <div style={{
              height:"100vh",
              width:"100%",
              display: "table-cell",
              verticalAlign:"middle",
              color:"white",
              top:0
            }}>
            <div className="container" style={{textAlign:"center"}}>
              <table style={{margin:"0 auto"}}><tbody>
                <tr>
                  <td>
                    <div id="header_name">
                      <span style={{color:"#55aa55", fontSize:"1.2em"}}>Hi there, my name is</span><br />
                      <span style={{color:"#0088cc", fontSize:"5em", fontFamily:"CraftyGirlsRegular"}}>Daniel</span><br />
                    </div>
                  </td>
                  <td>
                    <img className="hidden-sm-down" id="profile_picture" src="img/daniel.jpg" style={{marginLeft:"1em", width:"80%", borderRadius:"2em"}} draggable={false}/>
                  </td>
                </tr>
              </tbody></table>
              <br />
              <span style={{color:"#333333", fontFamily:"UbuntuMono"}} ref={(el)=>{this.el = el}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
