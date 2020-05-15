import React from 'react';

import './index.scss';

class Home extends React.Component {
  render() {

    var divStyle = {
      textAlign : "center"
    };

    // anniversary calculating
    var firstDate = new Date(2019, 7, 17);
    var d = new Date(); 
    var currentDate = new Date( d.getFullYear(), d.getMonth(), d.getDate() );
    var oneDay = 24 * 60 * 60 * 1000;
    var result = (currentDate - firstDate) / oneDay + 1;


    return(
      <div className="home" style={divStyle}>

        
        <div className="text">
          <h4>안녕하세요, 마리와 준의 인터넷집입니다.</h4>
          <h4>오늘은 이 두 분이 만난지 {result}일이 되는 날입니다.</h4>
        </div>

        <div className="image">
          <img src="/images/main/endoHwang.jpg" width="400px"/>
        </div>
        
        <br />

        <div className="image">
          <img src="/images/main/birthday.JPG" width="400px"/>
        </div>

        <br />

        <div className="image">
          <img src="/images/main/winter.jpeg" width="400px"/>
        </div>

        <br />

        <div className="image">
          <img src="/images/main/flower.jpeg" width="400px"/>
        </div>
        

      </div>

    );
  }
}

export default Home;
