import React from 'react';

import Sub_color from '../../../components/Sub_color';

//import './index.scss';


class Green extends React.Component {
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
            <img src='/images/green/item2.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Mari's Deep Green Bag
          </div>
          <div className="image" style={imageStyle}>
            <img src='/images/green/item1.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Incase Compact Sleeve
          </div>
        </div>

      </div>

    );
  }
}

export default Green;
