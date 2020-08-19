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
            We are Mari's friends.
          </div>

          <div className="image">
            <img src = "/images/mari/mari-friends/ai_7.jpg" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/mari/mari-friends/ai6.jpg" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/mari/mari-friends/aiandkiki.JPG" alt=""/>
          </div>
          <div className="image">
            <img src='/images/mari/mari-friends/kiki.jpg' alt=""/>
          </div>
          <div className="image">
            <img src = "/images/mari/mari-friends/ai3.JPG" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/mari/mari-friends/ai2.JPG" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/mari/mari-friends/ai4.JPG" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/mari/mari-friends/ai5.JPG" alt=""/>
          </div>


        </div>

        

      </div>

    );
  }
}

export default Ai;
