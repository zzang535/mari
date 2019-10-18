import React from 'react';

import './index.scss';


class Item extends React.Component {
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
      <div className="item" style={divStyle}>

        <div className="box">
          <div className="image" style={imageStyle}>
            <img src='/images/item2.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Mari's Deep Green Bag
          </div>
          <div className="image" style={imageStyle}>
            <img src='/images/item1.jpeg' width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Incase Compact Sleeve
          </div>
        </div>

      </div>

    );
  }
}

export default Item;
