import React, { Component } from 'react';
import { fallbackValue } from '../../Tools';

export default class SkillBar extends Component {
  render(){
    var title = fallbackValue("", this, "props", "title");
    var percentage = fallbackValue(0, this, "props", "percentage");
    var barColor = fallbackValue("blue", this, "props", "barColor");
    var barWidth = fallbackValue(0, percentage) + "%";

    return(
      <div style={{paddingBottom:"1em"}}>
        <p style={{
            padding:"0",
            border:"0",
            margin:"0"
          }}>{title}</p>
        <div className="skillContainer" style={{
            width: "100%",
            backgroundColor:"#ddd",
            borderRadius:"1em",
            padding:"0",
            border:"0",
            margin:"0"
          }}>
          <div style={{
              textAlign: "right",
              paddingRight:"0.5em",
              lineHeight:"1.2em",
              color:"white",
              width:barWidth,
              backgroundColor:barColor,
              borderRadius:"1em",
              fontSize:"1em"
            }}>{percentage + "%"}</div>
        </div>
      </div>
    );
  }
}
