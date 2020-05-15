import React from 'react';

import './index.scss';

import Sub_june from '../../../components/Sub_june';

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
          <Sub_june />
        </div>

        <div className="box">

           <div className="text" style={textStyle}>
            We are June's friends.
          </div>

          <div className="image">
            <img src = "/images/june/june-friends/friend4.jpg" alt=""/>
          </div>
          <div className="image">
            <img src = "/images/june/june-friends/june-friend3.JPG" alt=""/>
          </div>
          <div className="image">
            <img src='/images/june/june-friends/june-friend2.jpeg' alt=""/>
          </div>
          <div className="image">
            <img src = "/images/june/june-friends/june-friend.jpeg" alt=""/>
          </div>


        </div>

        

      </div>

    );
  }
}

export default Ai;
