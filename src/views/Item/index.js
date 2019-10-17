import React from 'react';

import item1 from '../../images/item1.jpeg';
import item2 from '../../images/item2.jpeg';

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
            <img src={item2} width="400px"/>
          </div>
          <div className="text" style={textStyle}>
            Mari's Deep Green Bag
          </div>
          <div className="image" style={imageStyle}>
            <img src={item1} width="400px"/>
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
