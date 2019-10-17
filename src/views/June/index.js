import React from 'react';
import june from '../../images/june.jpeg';
import junes from '../../images/junes.jpeg';
import junes2 from '../../images/junes2.jpeg';

import './index.scss';

class June extends React.Component {
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
      <div className="june" style={divStyle}>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src={june} width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Hello June!
          </div>
        </div>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src={junes2} width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            We are June's friends.
          </div>
        </div>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src={junes} width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            We are Pure.
          </div>
        </div>

      </div>

    );
  }
}

export default June;
