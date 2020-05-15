import React from 'react';

import Sub_color from '../../../components/Sub_color';

//import './index.scss';


class White extends React.Component {
  render() {

    var divStyle = {
      textAlign: 'center'
    }

    var imageStyle = {
      padding: '10px'
    }

    var textStyle = {
      paddingBottom: '30px'
    }

    return(
      <div className="color" style={divStyle}>

        <div className="sub_menu">
          <Sub_color />
        </div>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src='/images/color/white/white2.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            White animals
          </div>
          <div className="image" style={imageStyle}>
            <img src='/images/color/white/white1.jpg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            White people
          </div>
        </div>

      </div>

    );
  }
}

export default White;
