import React from 'react';

import Sub_mari from '../../components/Sub_mari';

import './index.scss';

class Mari extends React.Component {
  render() {

    var divStyle = {
      textAlign: 'center'
    }

    var textStyle = {
      paddingBottom: '30px'
    }

    return(
      <div className="mari" style={divStyle}>

        <div className="sub_menu">
          <Sub_mari />
        </div>

        <div className="box">

          <div className="image">
            <img src='/images/mari4.JPG' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Hello Mask Woman!
          </div>

          <div className="image">
            <img src='/images/mari.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Hello Mari!
          </div>

        </div>

      </div>

    );
  }
}

export default Mari;
