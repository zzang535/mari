import React from 'react';

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
            <img src='/images/june.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Hello June!
          </div>
        </div>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src='/images/junes2.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            We are June's friends.
          </div>
        </div>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src='/images/junes.jpeg' width="400px"/>
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
