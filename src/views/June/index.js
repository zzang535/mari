import React from 'react';

import './index.scss';

import Sub_june from '../../components/Sub_june';

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

        <div className="sub_menu">
          <Sub_june />
        </div>

        <div className="box">
          
          <div className="text" style={textStyle}>
            Hello June!
          </div>

          <div className="image" style={imageStyle}>
            <img src='/images/june/june2.JPG' width="400px"/>
          </div>

          <div className="image" style={imageStyle}>
            <img src='/images/june/june.jpeg' width="400px"/>
          </div>

        </div>


      </div>

    );
  }
}

export default June;
