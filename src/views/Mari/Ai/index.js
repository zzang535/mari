import React from 'react';

import './index.scss';

import Sub_mari from '../../../components/Sub_mari';

class Ai extends React.Component {
  
  render() {

    var divStyle = {
      textAlign: 'center'
    }

    var textStyle = {
      paddingBottom: '30px'
    }

    return(
      <div style={divStyle} className="ai">

        <div className="sub_menu">
          <Sub_mari />
        </div>

        <div className="box">

           <div className="text" style={textStyle}>
            Hello Ai!
          </div>

          <div className="image">
            <img src = "/images/ai/ai3.JPG" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/ai/ai2.JPG" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/ai/ai4.JPG" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/ai/ai5.JPG" alt=""/>
          </div>


        </div>

        

      </div>

    );
  }
}

export default Ai;
