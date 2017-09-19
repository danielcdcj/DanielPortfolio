import React, { Component } from 'react';
import Typed from 'typed.js';

export default class Header extends Component {
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
  }
  componentWillUnmount(){
    this.typed.destroy();
  }
  render(){
    return(
      <div id="header">
        <div style={{
            backgroundImage:"url('img/sand.jpg')",
            height:"100vh",
            width:"100vw",
            display: "table-cell",
            verticalAlign:"middle",
            color:"white"
          }}>
          <div className="container">
            <table style={{width:"100%"}}><tbody><tr>
              <td style={{width:"10%"}}></td>
              <td>
                <div className="row">
                  <div className="col-lg-7">
                    <span style={{color:"#55aa55", fontSize:"1.2em"}}>Hi there, my name is</span><br />
                    <span style={{color:"#0088cc", fontSize:"5em", fontFamily:"CraftyGirlsRegular"}}>Daniel</span><br />
                  </div>
                  <div className="col-lg-5 hidden-lg-down">
                    <img src="img/daniel.jpg" style={{width:"80%", borderRadius:"2em"}} draggable={false}/>
                  </div>
                </div>

                <span style={{color:"#333333", fontFamily:"UbuntuMono"}} ref={(el)=>{this.el = el}}/>

              </td>
              <td style={{width:"10%"}}></td>
            </tr></tbody></table>
          </div>
        </div>
      </div>
    );
  }
}
