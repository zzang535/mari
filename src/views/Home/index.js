import React from 'react';

import flower from '../../images/flower.jpeg';

import './index.scss';

class Home extends React.Component {
  render() {

    var divStyle = {
      textAlign : "center"
    };

    return(
      <div className="home" style={divStyle}>

        
        <div className="text">
          안녕하세요. 마리의 홈페이지 입니다.
        </div>
        <br /><br />
        <div className="image">
          <img src={flower} width="400px"/>
        </div>
        

      </div>

    );
  }
}

export default Home;
